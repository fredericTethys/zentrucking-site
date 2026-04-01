export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: April 1, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-[15px] leading-relaxed">
        <p>
          Zen Trucking ("we," "us," "our"), a brand of Zenteck AI, operates the Road Chief Dispatch platform.
          This Privacy Policy describes how we collect, use, and protect your personal information.
        </p>

        <Section title="Information We Collect">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact information:</strong> name, email address, phone number</li>
            <li><strong>Employment information:</strong> driver credentials, qualifications, ELD data</li>
            <li><strong>Location data:</strong> GPS coordinates from ELD devices for fleet tracking</li>
            <li><strong>Communication data:</strong> messages sent through our platform and SMS notifications</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dispatch operations:</strong> assigning loads, scheduling pickups and deliveries</li>
            <li><strong>Operational communications:</strong> sending SMS and in-app notifications about load assignments, schedule updates, and dispatch instructions</li>
            <li><strong>Fleet management:</strong> tracking driver availability, HOS compliance, and location</li>
            <li><strong>Platform improvement:</strong> analyzing usage patterns to improve our services</li>
          </ul>
        </Section>

        <Section title="SMS Communications">
          <ul className="list-disc pl-5 space-y-1">
            <li>We send operational text messages to drivers regarding load assignments, schedule changes, and dispatch updates</li>
            <li>Message frequency varies based on operational needs (typically 1-10 messages per day)</li>
            <li>Message and data rates may apply</li>
            <li>Reply <strong>STOP</strong> to opt out of SMS messages at any time</li>
            <li>Reply <strong>HELP</strong> for support information</li>
            <li>For support, contact <a href="mailto:dispatch@zenteck.ai" className="text-blue-600 hover:underline">dispatch@zenteck.ai</a> or call <a href="tel:+16026917995" className="text-blue-600 hover:underline">(602) 691-7995</a></li>
          </ul>
        </Section>

        <Section title="Data Sharing">
          <ul className="list-disc pl-5 space-y-1">
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
            We retain your personal information for as long as your account is active or as needed to provide services.
            You may request deletion of your data by contacting us.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Zen Trucking / Zenteck AI<br />
            Email: <a href="mailto:dispatch@zenteck.ai" className="text-blue-600 hover:underline">dispatch@zenteck.ai</a><br />
            Phone: <a href="tel:+16026917995" className="text-blue-600 hover:underline">(602) 691-7995</a>
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
