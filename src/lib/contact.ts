import { supabase } from './supabase'

export interface ContactInput {
  email: string
  firstName?: string
  lastName?: string
  company?: string
  jobTitle?: string
  phone?: string
  primaryInterest?: string
  message?: string
  /** Honeypot — must stay empty. Bots that fill it are silently dropped. */
  website?: string
}

export interface SubmitResult {
  ok: boolean
  error?: string
}

const SITE = 'zentrucking.ai'

/**
 * Writes a contact + submission to the shared ZenConnect database using the
 * anon key. RLS permits public INSERT but not SELECT, so we never chain
 * `.select()` (the RETURNING clause would be rejected by the read policy).
 */
export async function submitContact(input: ContactInput): Promise<SubmitResult> {
  // Honeypot: pretend success so bots don't retry, but write nothing.
  if (input.website && input.website.trim() !== '') {
    return { ok: true }
  }

  const email = input.email.toLowerCase().trim()
  if (!email) return { ok: false, error: 'Email is required.' }

  const primaryInterest = input.primaryInterest?.trim() || null
  const background = input.message?.trim()
  // contact_submissions.message is NOT NULL — always send something meaningful.
  const message =
    background ||
    `Contact request from ${SITE}${primaryInterest ? ` — interested in ${primaryInterest}` : ''}.`

  // 1) Upsert-ish insert of the contact. Duplicate email (23505) is fine.
  const { error: contactError } = await supabase.from('contacts').insert({
    email,
    first_name: input.firstName?.trim() || null,
    last_name: input.lastName?.trim() || null,
    company: input.company?.trim() || null,
    phone: input.phone?.trim() || null,
    job_title: input.jobTitle?.trim() || null,
    primary_interest: primaryInterest,
    source: SITE,
    status: 'new',
  })
  if (contactError && contactError.code !== '23505') {
    return { ok: false, error: contactError.message }
  }

  // 2) Submission record. anon can't read the contact id back, so we link by
  //    email in metadata (same approach zenteck.ai uses on its anon path).
  const { error: submissionError } = await supabase.from('contact_submissions').insert({
    contact_id: null,
    message,
    metadata: {
      email,
      site: SITE,
      primary_interest: primaryInterest,
      timestamp: new Date().toISOString(),
    },
  })
  if (submissionError) {
    return { ok: false, error: submissionError.message }
  }

  return { ok: true }
}
