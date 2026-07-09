import './pages.css'

export default function TermsAndConditions() {
  return (
    <div className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal__updated">Last updated April 1, 2026</p>

        <div className="legal__body">
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
              email <a href="mailto:dispatch@zenteck.ai">dispatch@zenteck.ai</a>,
              or call <a href="tel:+16026917995">(602) 691-7995</a>.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Your phone number and personal information will not be shared with third parties for
              marketing purposes. See our <a href="/privacy-policy">Privacy Policy</a> for full details.
            </p>
          </Section>

          <Section title="8. Supported Carriers">
            <p>
              Major US carriers are supported including AT&amp;T, Verizon, T-Mobile, and others.
              Delivery is subject to carrier network availability.
            </p>
          </Section>

          <Section title="9. Contact Information">
            <p>
              Zen Trucking / Zenteck AI<br />
              Email: <a href="mailto:dispatch@zenteck.ai">dispatch@zenteck.ai</a><br />
              Phone: <a href="tel:+16026917995">(602) 691-7995</a><br />
              Website: <a href="https://zentrucking.ai">zentrucking.ai</a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
