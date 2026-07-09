import './pages.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="legal__updated">Last updated April 1, 2026</p>

        <div className="legal__body">
          <p className="lead">
            Zen Trucking (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), a brand of Zenteck AI,
            operates the Road Chief Dispatch platform. This Privacy Policy describes how we collect, use,
            and protect your personal information.
          </p>

          <Section title="Information We Collect">
            <ul>
              <li><strong>Contact information:</strong> name, email address, phone number</li>
              <li><strong>Employment information:</strong> driver credentials, qualifications, ELD data</li>
              <li><strong>Location data:</strong> GPS coordinates from ELD devices for fleet tracking</li>
              <li><strong>Communication data:</strong> messages sent through our platform and SMS notifications</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul>
              <li><strong>Dispatch operations:</strong> assigning loads, scheduling pickups and deliveries</li>
              <li><strong>Operational communications:</strong> sending SMS and in-app notifications about load assignments, schedule updates, and dispatch instructions</li>
              <li><strong>Fleet management:</strong> tracking driver availability, HOS compliance, and location</li>
              <li><strong>Platform improvement:</strong> analyzing usage patterns to improve our services</li>
            </ul>
          </Section>

          <Section title="SMS Communications">
            <ul>
              <li>We send operational text messages to drivers regarding load assignments, schedule changes, and dispatch updates</li>
              <li>Message frequency varies based on operational needs (typically 1-10 messages per day)</li>
              <li>Message and data rates may apply</li>
              <li>Reply <strong>STOP</strong> to opt out of SMS messages at any time</li>
              <li>Reply <strong>HELP</strong> for support information</li>
              <li>For support, contact <a href="mailto:dispatch@zenteck.ai">dispatch@zenteck.ai</a> or call <a href="tel:+16026917995">(602) 691-7995</a></li>
            </ul>
          </Section>

          <Section title="Data Sharing">
            <ul>
              <li>We do not sell your personal information to third parties</li>
              <li>We do not share your information for marketing purposes</li>
              <li>We may share data with service providers necessary for platform operations (e.g., mapping services, ELD providers, communication services)</li>
              <li>We may disclose information when required by law</li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>
              We implement industry-standard security measures to protect your personal information,
              including encryption, access controls, and secure data storage.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as needed to
              provide services. You may request deletion of your data by contacting us.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              Zen Trucking / Zenteck AI<br />
              Email: <a href="mailto:dispatch@zenteck.ai">dispatch@zenteck.ai</a><br />
              Phone: <a href="tel:+16026917995">(602) 691-7995</a>
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
