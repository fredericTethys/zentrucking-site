import VideoPlaceholder from '../components/VideoPlaceholder'
import { Check, Headset, Radar, Dollar, Users, Shield, Broom, Arrow } from '../components/icons'
import './pages.css'

export default function Fleets() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow hero__eyebrow">For small fleets · up to 50 trucks</span>
          <h1>Dispatch coordination for your whole fleet, as a service.</h1>
          <p className="hero__lead">
            Zen Trucking runs coordination across every truck you operate — sourcing, cleaning,
            matching, verifying by phone and planning around hours of service — powered by our
            desktop dispatch console. Grow the fleet without growing the back office that normally
            scales with it.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:support@zentrucking.ai?subject=Fleet%20dispatch%20coordination">
              Talk to us about your fleet
            </a>
            <a className="btn btn--on-navy" href="#console">See the console</a>
          </div>

          <div className="statrow">
            <div className="statrow__item"><span className="statrow__num">Up to 50</span><span className="statrow__lbl">trucks coordinated on one shared backend</span></div>
            <div className="statrow__item"><span className="statrow__num">6–10%</span><span className="statrow__lbl">typical dispatch fee, turned into a fixed, controllable cost</span></div>
            <div className="statrow__item"><span className="statrow__num">1 system</span><span className="statrow__lbl">sourcing, matching, verification, tracking &amp; HOS together</span></div>
          </div>
        </div>
      </section>

      {/* THE MODEL */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The model</span>
            <h2>Zen coordinates the fleet. Your office runs the console.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Zen Trucking provides the dispatching coordination and services across your entire
              fleet, while your team works from the desktop dispatcher console — one screen instead
              of four load boards, a spreadsheet, and a phone on hold.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: <Headset />, t: 'Coordination as a service', d: 'We take on the load sourcing, cleaning and phone verification across every truck — the work a dispatch service does, automated at its core and delivered as a service.' },
              { icon: <Radar />, t: 'Fleet-wide matching', d: 'Clean loads are matched and ranked across all your drivers at once — by location, equipment, rate, distance and your own rules and blacklists.' },
              { icon: <Dollar />, t: 'A dispatch cost you control', d: 'A dispatch service takes 6–10% of gross off every settlement, for the life of the truck. Automating the core of that work turns a percentage into a fixed, predictable line.' },
              { icon: <Users />, t: 'Grow without adding staff', d: 'Because coordination runs in parallel at any hour, you can add trucks without hiring the dispatchers and office staff that normally scale with them.' },
              { icon: <Shield />, t: 'Compliance handled', d: 'Hours-of-service and ELD data are synced and monitored continuously, so you stay compliant without a dedicated person watching the clock.' },
              { icon: <Broom />, t: 'One clean source of truth', d: 'The driver apps and the office console share one backend — a load cleaned once or a rule changed once is consistent for everyone.' },
            ].map((f) => (
              <div key={f.t} className="card feature">
                <div className="feature__icon">{f.icon}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSOLE */}
      <section className="section section--tint" id="console">
        <div className="container">
          <div className="split split--reverse">
            <div className="split__media">
              <VideoPlaceholder
                title="Desktop dispatch console"
                duration="1:20"
                caption="Live fleet view, ranked loads, and one-click journey planning."
              />
            </div>
            <div>
              <span className="eyebrow">The desktop dispatch application</span>
              <h2>Everything your dispatcher needs on one screen.</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                The console is where your office manages the fleet: a live map of every truck,
                ranked loads ready to assign, journeys planned around each driver&apos;s HOS, and the
                status of every AI voice verification in flight.
              </p>
              <ul className="checklist">
                <li><Check size={20} /><span><strong>Live tracking</strong> against the plan — early/late arrivals flagged without calling the driver.</span></li>
                <li><Check size={20} /><span><strong>Assign &amp; re-plan</strong> loads across the fleet with feasibility checked against hours of service.</span></li>
                <li><Check size={20} /><span><strong>See every automated call</strong> and its result, with a full audit trail behind each booking.</span></li>
                <li><Check size={20} /><span><strong>Your rules, enforced</strong> — blacklists, lane preferences and policy applied consistently.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What changes</span>
            <h2>The economics small fleets actually feel.</h2>
          </div>
          <div className="metrics">
            <div className="metric"><div className="metric__num">Fixed</div><div className="metric__lbl">dispatch cost in place of a percentage of every load&apos;s gross revenue</div></div>
            <div className="metric"><div className="metric__num">Nights back</div><div className="metric__lbl">the phone verification that ate your dispatcher&apos;s evening runs as a background task</div></div>
            <div className="metric"><div className="metric__num">More loaded miles</div><div className="metric__lbl">reloads worked early and dwell aligned to HOS keep trucks moving</div></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <a className="btn btn--dark" href="mailto:support@zentrucking.ai?subject=Fleet%20dispatch%20coordination">
              Book a fleet walkthrough <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
