import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="site-footer__cta">
          <div>
            <span className="eyebrow">Get started</span>
            <h2>See what an automated back office does for your trucks.</h2>
            <p className="lead">
              Book a 20-minute walkthrough. We&apos;ll show the dispatcher console, the driver app,
              and the AI voice agent booking a real load.
            </p>
          </div>
          <div className="site-footer__cta-actions">
            <a className="btn btn--primary" href="mailto:support@zentrucking.ai?subject=Zen%20Trucking%20demo">
              Book a demo
            </a>
            <a className="btn btn--on-navy" href="mailto:support@zentrucking.ai">
              support@zentrucking.ai
            </a>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__col site-footer__brand">
            <strong>Zen Trucking</strong>
            <p>
              An AI-native dispatch and driver platform. Source, clean, match, verify by phone,
              plan around hours of service, and track to delivery — in one system.
            </p>
            <p className="site-footer__partner">
              Enterprise delivery in collaboration with
              <img src="/logos/zenteck_logo_white.png" alt="Zenteck" className="site-footer__zenteck" />
            </p>
          </div>

          <div className="site-footer__col">
            <h4>Who it&apos;s for</h4>
            <Link to="/drivers">Drivers &amp; owner-operators</Link>
            <Link to="/fleets">Small fleets (up to 50)</Link>
            <Link to="/enterprise">Enterprise &amp; embed</Link>
          </div>

          <div className="site-footer__col">
            <h4>Platform</h4>
            <Link to="/drivers#how">How it works</Link>
            <Link to="/drivers#calculator">Journey planner</Link>
            <Link to="/enterprise#modules">Modules &amp; APIs</Link>
          </div>

          <div className="site-footer__col">
            <h4>Company</h4>
            <a href="mailto:support@zentrucking.ai">Contact</a>
            <a href="https://zentrucking.ai">zentrucking.ai</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="site-footer__base">
          <span>© {new Date().getFullYear()} Zen Trucking. All rights reserved.</span>
          <span>Confidential — figures illustrative.</span>
        </div>
      </div>
    </footer>
  )
}
