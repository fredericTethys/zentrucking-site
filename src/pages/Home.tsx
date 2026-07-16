import { Link } from 'react-router-dom'
import {
  Check, Phone, Route, Clock, Broom, Radar, Dollar, Shield, Arrow,
} from '../components/icons'
import HeroVideo from '../components/HeroVideo'
import './pages.css'

export default function Home() {
  return (
    <>
      {/* HERO — looping background video (drop a clip at public/media/hero.mp4).
          Falls back to the brand gradient until a file is present. */}
      <HeroVideo
        src="/media/hero.mp4"
        webmSrc="/media/hero.webm"
        poster="/media/hero-poster.jpg"
        align="right"
      >
        <span className="eyebrow hero__eyebrow">AI-native dispatch &amp; driver platform</span>
        <h1>The dedicated dispatch coordination for every driver, done by software.</h1>
        <p className="hero__lead">
          Zen Trucking takes a load from the moment it appears on a board to the moment a driver
          delivers it — sourcing, cleaning, matching, verifying by phone with an AI voice agent,
          planning around hours of service, and tracking to the dock. One system, two apps,
          one source of truth.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#choose">
            Find your path <Arrow />
          </a>
          <a className="btn btn--on-navy" href="#contact">
            Book a demo
          </a>
        </div>

        <div className="statrow">
          <div className="statrow__item">
            <span className="statrow__num">9 in 10</span>
            <span className="statrow__lbl">US carriers run 10 trucks or fewer — the fleets we built Zen Trucking for</span>
          </div>
          <div className="statrow__item">
            <span className="statrow__num">Any load board</span>
            <span className="statrow__lbl">We connect to the load boards you use — or your shippers post loads directly to Zen Trucking</span>
          </div>
          <div className="statrow__item">
            <span className="statrow__num">Net $/hr</span>
            <span className="statrow__lbl">Loads ranked by income per hour of the driver&apos;s week, not per mile</span>
          </div>
        </div>
      </HeroVideo>

      {/* WHAT IT IS — quick strip */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What Zen Trucking does</span>
            <h2>The dispatcher&apos;s day, run as a continuous loop.</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>
              Everything that used to require a person on the phone, searching load boards or
              scrubbing spreadsheets becomes a background process — trustworthy because the data
              is clean, the rules are explicit, and every step is logged.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: <Route />, t: 'Source & clean', d: 'Pulls loads from the boards you subscribe to, then geocodes, de-dupes, and computes real truck-routing mileage so every load is decision-ready.' },
              { icon: <Phone />, t: 'Verify by phone', d: 'AI voice agents call brokers and shippers to confirm rate, contacts and appointment windows — then write verified data straight back.' },
              { icon: <Clock />, t: 'Plan around HOS', d: 'Builds each journey around the driver’s hours-of-service clock, so arrival times reflect when the truck will actually move and stop.' },
              { icon: <Radar />, t: 'Match to the driver', d: 'Ranks clean loads by location, equipment, rate and each operator’s own rules — including broker and shipper blacklists.' },
              { icon: <Dollar />, t: 'Optimize the week', d: 'Nets out empty miles and dwell to rank loads by revenue per elapsed hour across the whole week — not the rate on one load.' },
              { icon: <Shield />, t: 'Track & stay compliant', d: 'Geofencing and ELD data keep the plan honest, flag slips early, and keep hours-of-service compliant without a person watching.' },
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

      {/* CHOOSE YOUR PATH */}
      <section className="section section--tint" id="choose">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Choose your path</span>
            <h2>Built for three kinds of operator.</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>
              The same engine, priced and packaged for where you sit — from a single truck to an
              enterprise embedding Zen capabilities in its own stack.
            </p>
          </div>

          <div className="audience">
            {/* Drivers */}
            <div className="audience__card">
              <div className="audience__top audience__top--a">
                <span className="audience__kicker">For the cab</span>
                <h3>Drivers &amp; owner-operators</h3>
                <p>An automated back office in your pocket. Better loads, honest ETAs, no evening phone calls.</p>
              </div>
              <div className="audience__body">
                <ul className="audience__list">
                  <li><Check /> Loads ranked by revenue per hour</li>
                  <li><Check /> HOS-aware journey planning &amp; break placement</li>
                  <li><Check /> AI voice agent makes the broker calls for you</li>
                  <li><Check /> Watch the app in action &amp; try the journey planner</li>
                </ul>
                <Link className="btn btn--dark audience__cta" to="/drivers">
                  See the driver experience <Arrow />
                </Link>
              </div>
            </div>

            {/* Fleets */}
            <div className="audience__card">
              <div className="audience__top audience__top--b">
                <span className="audience__kicker">Up to 50 trucks</span>
                <h3>Small fleet operators</h3>
                <p>Zen Trucking coordinates dispatch across your whole fleet, powered by our desktop dispatch console.</p>
              </div>
              <div className="audience__body">
                <ul className="audience__list">
                  <li><Check /> Fleet-wide dispatch coordination as a service</li>
                  <li><Check /> Desktop dispatcher console for your office</li>
                  <li><Check /> Turn a % -of-revenue dispatch fee into a fixed cost</li>
                  <li><Check /> Add trucks without adding back-office headcount</li>
                </ul>
                <Link className="btn btn--dark audience__cta" to="/fleets">
                  Explore fleet coordination <Arrow />
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="audience__card">
              <div className="audience__top audience__top--c">
                <span className="audience__kicker">Any size · embed</span>
                <h3>Enterprise &amp; embed</h3>
                <p>Put Zen Trucking capabilities inside your own tech stack, with Zenteck delivery.</p>
              </div>
              <div className="audience__body">
                <ul className="audience__list">
                  <li><Check /> Off-the-shelf modules (routing, HOS, AI voice)</li>
                  <li><Check /> Custom integration into your systems of record</li>
                  <li><Check /> Custom development with Zenteck engineering</li>
                  <li><Check /> Governed, auditable AI on your critical path</li>
                </ul>
                <Link className="btn btn--dark audience__cta" to="/enterprise">
                  See modules &amp; integration <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW / trust strip */}
      <section className="section section--navy">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why it&apos;s trustworthy</span>
              <h2>Automation you can put on the critical path.</h2>
              <p className="lead">
                Zen Trucking uses AI for one narrow job — understanding what&apos;s needed — and
                deterministic, configurable software for everything that changes data or places a
                call. That separation, plus a complete audit trail of every decision and every
                conversation, is what makes handing real bookings to software safe.
              </p>
              <ul className="checklist">
                <li><Check size={20} /><span><strong>Configured, not hard-coded</strong> — rules, blacklists and what the agent asks are data you control.</span></li>
                <li><Check size={20} /><span><strong>Grounded answers</strong> — facts come from your system, never invented.</span></li>
                <li><Check size={20} /><span><strong>Auditable by design</strong> — every call, decision and write is recorded with full context.</span></li>
              </ul>
            </div>
            <div className="grid" style={{ gap: 16 }}>
              {[
                { icon: <Broom />, t: 'Clean data at the source', d: 'Geocoding, real mileage, dedup and appointment windows before anyone acts on a load.' },
                { icon: <Phone />, t: 'AI voice, in production', d: 'Live calls to brokers and shippers on current-generation real-time speech models.' },
                { icon: <Clock />, t: 'HOS-real ETAs', d: 'Arrival times built around the driver’s legal clock and planned stops with traffic-aware transit times.' },
              ].map((c) => (
                <div key={c.t} className="card feature" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)' }}>
                  <div className="feature__icon" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>{c.icon}</div>
                  <h3 style={{ color: '#fff' }}>{c.t}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.78)' }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
