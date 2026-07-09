import { Check, Layers, Plug, Code, Route, Phone, Clock, Shield, Radar, Arrow } from '../components/icons'
import './pages.css'

export default function Enterprise() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="badge-soon"><span className="badge-soon__dot" />Coming soon</span>
          </div>
          <span className="eyebrow hero__eyebrow">For fleets of any size · embed</span>
          <h1>Zen Trucking capabilities, inside your own tech stack.</h1>
          <p className="hero__lead">
            Already run your own systems? Take the parts of Zen Trucking you need — routing and real
            mileage, HOS-aware journey planning, net-$/hour load scoring, and the AI voice agent —
            and embed them where your operation already lives. Delivered by Zen Trucking in
            collaboration with Zenteck engineering.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:support@zentrucking.ai?subject=Embedding%20Zen%20Trucking">
              Scope an integration
            </a>
            <a className="btn btn--on-navy" href="#modules">Browse modules</a>
          </div>
        </div>
      </section>

      {/* THREE WAYS TO ENGAGE */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Three ways to engage</span>
            <h2>Off-the-shelf, integrated, or custom-built.</h2>
            <p className="lead" style={{ margin: '12px auto 0' }}>
              Start with packaged modules, wire them into your systems of record, or commission
              custom development — with the same governed, auditable AI foundation underneath.
            </p>
          </div>

          <div className="tiers">
            <div className="tier">
              <div className="feature__icon"><Layers /></div>
              <h3>Off-the-shelf modules</h3>
              <p className="tier__desc">Drop-in capabilities exposed as APIs and services, ready to call from your own applications.</p>
              <ul className="tier__list">
                <li><Check /> Truck routing &amp; real mileage</li>
                <li><Check /> HOS-aware journey planning</li>
                <li><Check /> Net-$/hour load scoring</li>
                <li><Check /> AI voice verification agent</li>
              </ul>
              <a className="btn btn--ghost" style={{ whiteSpace: 'normal', textAlign: 'center' }} href="mailto:support@zentrucking.ai?subject=Preview%20upcoming%20Zen%20Trucking%20offerings">Get in touch to preview the upcoming offerings <Arrow /></a>
            </div>

            <div className="tier tier--featured">
              <div className="feature__icon"><Plug /></div>
              <h3>Custom integration</h3>
              <p className="tier__desc">We connect the modules into your TMS, ELD, load boards and systems of record — your data, your rules.</p>
              <ul className="tier__list">
                <li><Check /> Connectors to your existing systems</li>
                <li><Check /> Configuration to your policies &amp; blacklists</li>
                <li><Check /> Identity &amp; permissions resolved server-side</li>
                <li><Check /> Full observability and audit trail</li>
              </ul>
              <a className="btn btn--primary" style={{ whiteSpace: 'normal', textAlign: 'center' }} href="mailto:support@zentrucking.ai?subject=Preview%20upcoming%20Zen%20Trucking%20offerings">Get in touch to preview the upcoming offerings <Arrow /></a>
            </div>

            <div className="tier">
              <div className="feature__icon"><Code /></div>
              <h3>Custom development</h3>
              <p className="tier__desc">Bespoke capabilities and workflows built with Zenteck engineering on top of the Zen platform.</p>
              <ul className="tier__list">
                <li><Check /> New capabilities as configurable data</li>
                <li><Check /> Domain-specific voice &amp; automation flows</li>
                <li><Check /> Dedicated delivery &amp; support</li>
                <li><Check /> Roadmap aligned to your operation</li>
              </ul>
              <a className="btn btn--ghost" style={{ whiteSpace: 'normal', textAlign: 'center' }} href="mailto:support@zentrucking.ai?subject=Preview%20upcoming%20Zen%20Trucking%20offerings">Get in touch to preview the upcoming offerings <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE CATALOG */}
      <section className="section section--tint" id="modules">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Module catalog</span>
            <h2>Composable capabilities, callable as APIs.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              Each module reuses the same production engine that runs the Zen Trucking platform —
              take one, several, or the whole stack.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { icon: <Route />, t: 'Routing &amp; mileage', d: 'Truck-legal routing with real mileage, geocoding, time-zone resolution and appointment-window derivation.' },
              { icon: <Clock />, t: 'HOS journey engine', d: 'Builds and validates journeys around the 11/14-hour clock, placing required breaks and 10-hour resets.' },
              { icon: <Radar />, t: 'Load scoring', d: 'Ranks loads by net income per elapsed hour across the week — netting empty miles and dwell.' },
              { icon: <Phone />, t: 'AI voice agent', d: 'Places real calls to brokers and shippers, validates answers against your rules, and writes verified data back.' },
              { icon: <Shield />, t: 'Rules &amp; compliance', d: 'Configurable rulebook, blacklists, and ELD-synced HOS monitoring with continuous flags.' },
              { icon: <Layers />, t: 'Data cleaning pipeline', d: 'Normalizes messy load-board data into one consistent, de-duplicated, decision-ready shape.' },
            ].map((m) => (
              <div key={m.t} className="card feature">
                <div className="feature__icon">{m.icon}</div>
                <h3 dangerouslySetInnerHTML={{ __html: m.t }} />
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZEN AGENT / GOVERNANCE */}
      <section className="section section--navy">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Governed by construction</span>
              <h2>A conversational control layer you can trust on the critical path.</h2>
              <p className="lead">
                The AI voice and chat capabilities run on Zen Agent — a configurable control layer
                that separates judgment from action. Models only interpret intent; deterministic,
                configurable software collects details, confirms before any change, executes against
                your system, and composes answers from real data.
              </p>
              <ul className="checklist">
                <li><Check size={20} /><span><strong>Configured, not coded</strong> — new capabilities are data records, not releases.</span></li>
                <li><Check size={20} /><span><strong>Confirms before it changes anything</strong> — reads specifics back and waits for a clear yes.</span></li>
                <li><Check size={20} /><span><strong>Grounded, or it says so</strong> — facts from your system; an honest &ldquo;I don&apos;t have that&rdquo; otherwise.</span></li>
                <li><Check size={20} /><span><strong>Text &amp; voice, one engine</strong> — the same safeguards on every channel.</span></li>
              </ul>
            </div>
            <div className="card" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)', padding: 30 }}>
              <div className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>Delivered with Zenteck</div>
              <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 16 }}>
                Enterprise engagements are delivered by Zen Trucking together with Zenteck — bringing
                integration, custom development, and dedicated support to embed these capabilities
                safely in your stack.
              </p>
              <img
                src="/logos/zenteck_logo_white.png"
                alt="Zenteck"
                style={{ height: 26, width: 'auto', marginTop: 18, opacity: 0.95 }}
              />
              <a
                className="btn btn--primary"
                style={{ marginTop: 24 }}
                href="mailto:support@zentrucking.ai?subject=Embedding%20Zen%20Trucking"
              >
                Start a conversation <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
