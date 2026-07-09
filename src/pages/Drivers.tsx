import VideoPlaceholder from '../components/VideoPlaceholder'
import JourneyCalculator from '../components/JourneyCalculator'
import { Check, Dollar, Clock, Phone, Route, Truck } from '../components/icons'
import './pages.css'

export default function Drivers() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow hero__eyebrow">For drivers &amp; owner-operators</span>
          <h1>Your back office, running while you drive.</h1>
          <p className="hero__lead">
            You&apos;re the driver, the dispatcher, the negotiator and the bookkeeper — often at
            night after a full day at the wheel. Zen Trucking takes the coordination off your plate:
            it finds better loads, makes the broker calls, and plans every trip around your
            hours-of-service clock so your ETAs are honest and your week earns more.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#calculator">Try the journey planner</a>
            <a className="btn btn--on-navy" href="#demos">Watch the app</a>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why drivers use it</span>
            <h2>Less admin. Better loads. A truck that stays loaded.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              On margins measured in pennies per mile, the waste isn&apos;t the driving — it&apos;s
              the phone work, the empty miles, and the hours lost waiting at a dock. Zen Trucking
              goes after all three.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: <Dollar />, t: 'Paid for your time, not just your miles', d: 'Every load is ranked by revenue per elapsed hour — driving, stops, the wait for the pickup window, and required rest — so a high rate hiding a 14-hour wait is exposed for what it is.' },
              { icon: <Phone />, t: 'The calls get made for you', d: 'The AI voice agent phones brokers and shippers to confirm the rate, get a real contact, and pin down appointment windows — the work that used to eat your evening.' },
              { icon: <Clock />, t: 'ETAs built around your clock', d: 'The plan places your required 30-minute break and 10-hour reset where they actually fall, factors in your midnight recaps and cycle clock so your arrival time is real — and shippers can be kept updated automatically.' },
              { icon: <Route />, t: 'The next load, lined up early', d: 'Because it knows when and where you’ll free up, it works your reload well in advance — not in the last hour — to cut the empty miles to your next pickup.' },
              { icon: <Truck />, t: 'Dwell turned into reset time', d: 'Where waiting is unavoidable, it aligns that time with your required HOS breaks so a dock wait does double duty instead of stacking dead time on top of your limits.' },
              { icon: <Check />, t: 'Loads you’re actually allowed to run', d: 'Matching respects your equipment, your lanes, and your own broker and shipper blacklists — no loads you’d never take cluttering the list.' },
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

      {/* HOW IT WORKS (simple, pragmatic) */}
      <section className="section section--tint" id="how">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Five simple steps, from load board to delivered.</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                No new workflow to learn. You get clean, ranked loads; you accept from the app; the
                platform handles the rest and keeps you and the shipper in the loop.
              </p>
              <ul className="checklist">
                <li><Check size={20} /><span>Everything happens in the <strong>native mobile driver app</strong> — accept, navigate, get updates.</span></li>
                <li><Check size={20} /><span>The office console and your app share <strong>one backend</strong>, so there&apos;s nothing to reconcile.</span></li>
              </ul>
            </div>
            <div className="card" style={{ padding: '10px 26px' }}>
              <div className="steps">
                {[
                  { t: 'Loads come to you, clean', d: 'Sourced from the boards you subscribe to, de-duplicated, with real mileage and appointment windows already filled in.' },
                  { t: 'Ranked by net $/hour', d: 'The best load for your week rises to the top — accounting for empty miles, dwell and your home-time.' },
                  { t: 'Details confirmed by phone', d: 'The AI voice agent calls to lock the rate, contact and windows before you commit. No hold music for you.' },
                  { t: 'A journey planned around HOS', d: 'Breaks and rest placed where they legally fall, checked for feasibility before the load is ever offered.' },
                  { t: 'Accept &amp; drive — tracked to the dock', d: 'Live status keeps the shipper updated for you, and your reload gets worked in the background.' },
                ].map((s, i) => (
                  <div key={s.t} className="step">
                    <div className="step__num">{i + 1}</div>
                    <div>
                      <h3 dangerouslySetInnerHTML={{ __html: s.t }} />
                      <p>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section className="section" id="demos">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">See it in action</span>
            <h2>Short, narrated app demos.</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>
              A quick look at the driver app on a real device, with a voice-over walking through each
              screen.
            </p>
          </div>

          <div className="demo-grid">
            <VideoPlaceholder
              title="Accepting your best load"
              duration="0:50"
              caption="From the ranked list to an accepted journey in a few taps."
            />
            <VideoPlaceholder
              title="The AI voice agent, calling a broker"
              duration="1:05"
              caption="Hear the agent confirm rate, contact and appointment windows."
            />
            <VideoPlaceholder
              title="Your HOS-aware journey"
              duration="0:45"
              caption="Breaks and reset placed automatically; an ETA you can trust."
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section section--tint" id="calculator">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Try it yourself</span>
            <h2>Plan a journey around your hours of service.</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>
              Enter an origin and destination, your location, and where your HOS clock stands. The
              planner lays out the drive, the required breaks and rests, and an honest ETA — the same
              logic the platform uses to decide whether a load is even feasible.
            </p>
          </div>
          <JourneyCalculator />
        </div>
      </section>
    </>
  )
}
