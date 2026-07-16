import { useState } from 'react'
import { INTEREST_OPTIONS } from '../lib/interests'
import { Arrow } from './icons'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobTitle: '',
  phone: '',
  primaryInterest: '',
  message: '',
  website: '', // honeypot
}

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus('submitting')
    // Load supabase-js only on submit — keeps it out of the initial bundle.
    const { submitContact } = await import('../lib/contact')
    const res = await submitContact(form)
    if (res.ok) {
      setStatus('success')
      setForm(initial)
    } else {
      setStatus('error')
      setError(res.error ?? 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="cform cform--done" role="status">
        <div className="cform__check" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>We&apos;ll be in touch soon at the email you provided.</p>
        <button className="btn btn--ghost" type="button" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="cform__row">
        <label className="cform__field">
          <span>First name</span>
          <input value={form.firstName} onChange={(e) => set('firstName', e.target.value)} autoComplete="given-name" />
        </label>
        <label className="cform__field">
          <span>Last name</span>
          <input value={form.lastName} onChange={(e) => set('lastName', e.target.value)} autoComplete="family-name" />
        </label>
      </div>

      <label className="cform__field">
        <span>Email <em>*</em></span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          autoComplete="email"
          placeholder="you@company.com"
        />
      </label>

      <div className="cform__row">
        <label className="cform__field">
          <span>Company</span>
          <input value={form.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" />
        </label>
        <label className="cform__field">
          <span>Role / title</span>
          <input value={form.jobTitle} onChange={(e) => set('jobTitle', e.target.value)} autoComplete="organization-title" />
        </label>
      </div>

      <div className="cform__row">
        <label className="cform__field">
          <span>Phone <em>(optional)</em></span>
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" />
        </label>
        <label className="cform__field">
          <span>Primarily interested in</span>
          <select value={form.primaryInterest} onChange={(e) => set('primaryInterest', e.target.value)}>
            <option value="">Select one…</option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="cform__field">
        <span>Anything else? <em>(optional)</em></span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="A little background on who you are and why you'd like to connect."
        />
      </label>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        className="cform__hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => set('website', e.target.value)}
      />

      {status === 'error' && <p className="cform__error">{error}</p>}

      <div className="cform__actions">
        <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : <>Send message <Arrow /></>}
        </button>
        <span className="cform__note">We&apos;ll only use this to get back to you.</span>
      </div>
    </form>
  )
}
