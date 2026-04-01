export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: April 1, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-[15px] leading-relaxed">
        <Section title="1. Program Description">
          <p>
            Zen Trucking uses the Road Chief Dispatch platform to send operational SMS text messages
            to contracted and employed drivers. Messages include load assignments, pickup/delivery
            schedules, dispatch updates, and other operational communications.
          </p>
        </Section>

        <Section title="2. Message Frequency">
          <p>
            Message frequency varies based on operational needs. Drivers typically receive
            1-10 messages per day during active dispatch periods.
          </p>
        </Section>

        <Section title="3. Message and Data Rates">
          <p>
            Standard message and data rates may apply. Contact your wireless carrier for details
            about your messaging plan.
          </p>
        </Section>

        <Section title="4. Opt-In and Consent">
          <p>
            Drivers opt in to receive SMS messages when they are onboarded as operators in the
            Road Chief Dispatch platform. During account creation, drivers provide their mobile
            phone number and consent to receive operational text messages about load assignments,
            schedule updates, and dispatch communications.
          </p>
        </Section>

        <Section title="5. Opt-Out">
          <p>
            To stop receiving SMS messages, reply <strong>STOP</strong> to any message. You will receive a
            confirmation message and no further texts will be sent. You may also contact dispatch
            to have your number removed.
          </p>
        </Section>

        <Section title="6. Help">
          <p>
            For help or support, reply <strong>HELP</strong> to any message,
            email <a href="mailto:dispatch@zenteck.ai" className="text-blue-600 hover:underline">dispatch@zenteck.ai</a>,
            or call <a href="tel:+16026917995" className="text-blue-600 hover:underline">(602) 691-7995</a>.
          </p>
        </Section>

        <Section title="7. Privacy">
          <p>
            Your phone number and personal information will not be shared with third parties for
            marketing purposes. See our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for
            full details.
          </p>
        </Section>

        <Section title="8. Supported Carriers">
          <p>
            Major US carriers are supported including AT&T, Verizon, T-Mobile, and others.
            Delivery is subject to carrier network availability.
          </p>
        </Section>

        <Section title="9. Contact Information">
          <p>
            Zen Trucking / Zenteck AI<br />
            Email: <a href="mailto:dispatch@zenteck.ai" className="text-blue-600 hover:underline">dispatch@zenteck.ai</a><br />
            Phone: <a href="tel:+16026917995" className="text-blue-600 hover:underline">(602) 691-7995</a><br />
            Website: <a href="https://zentrucking.ai" className="text-blue-600 hover:underline">zentrucking.ai</a>
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      {children}
    </div>
  )
}
