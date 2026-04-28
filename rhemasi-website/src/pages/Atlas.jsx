import {
  ArrowRight, ClipboardList, Wrench, ShieldCheck, BarChart3,
  FileCheck, Activity, LayoutDashboard, Hammer, AlertTriangle,
} from 'lucide-react';

export default function Atlas() {
  return (
    <>
      <section className="page-head">
        <div className="container reveal">
          <p className="eyebrow">The platform behind us</p>
          <h1 className="display">
            Property Atlas — refurb, maintenance and management on one thread.
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: 760 }}>
            Property Atlas is the shared platform that ties Rhema, Elevate and
            Impact Investment Group into one operation. For Rhema specifically,
            Atlas is the system of record for every spec, every job, every
            certificate and every spend.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dashboard reveal">
            <div className="dashboard__sidebar">
              <div className="active"><LayoutDashboard size={14} /> Property cards</div>
              <div><Hammer size={14} /> Refurb pipeline</div>
              <div><Wrench size={14} /> Reactive jobs</div>
              <div><FileCheck size={14} /> Statutory schedule</div>
              <div><BarChart3 size={14} /> Spend tracker</div>
              <div><ShieldCheck size={14} /> Trade accreditation</div>
            </div>
            <div className="dashboard__main">
              <h5>Live property cards · 38 active</h5>
              <div className="dashboard__rows">
                <div className="dashboard__row">
                  <div><strong>Middlesbrough TS3 — 12 Acklam Rd</strong><br /><span style={{ opacity: 0.7, fontSize: 11 }}>4-bed SL · Tenanted · Elevate</span></div>
                  <span className="pill pill--green">Compliant</span>
                  <span style={{ fontSize: 12, opacity: 0.85 }}>£0 · 30d</span>
                </div>
                <div className="dashboard__row">
                  <div><strong>Sunderland SR4 — 22 Hylton Rd</strong><br /><span style={{ opacity: 0.7, fontSize: 11 }}>Refurb in progress · Wk 6 of 8</span></div>
                  <span className="pill pill--amber">Refurb</span>
                  <span style={{ fontSize: 12, opacity: 0.85 }}>£18.4k</span>
                </div>
                <div className="dashboard__row">
                  <div><strong>Nottingham NG7 — 8 Lenton Blvd</strong><br /><span style={{ opacity: 0.7, fontSize: 11 }}>EICR due in 7 days</span></div>
                  <span className="pill pill--amber">Action</span>
                  <span style={{ fontSize: 12, opacity: 0.85 }}>Booked</span>
                </div>
                <div className="dashboard__row">
                  <div><strong>Stockton TS19 — 4 Hartburn Ln</strong><br /><span style={{ opacity: 0.7, fontSize: 11 }}>Reactive: boiler P1 · 1h 12m</span></div>
                  <span className="pill pill--red">P1 SLA</span>
                  <span style={{ fontSize: 12, opacity: 0.85 }}>Engineer en-route</span>
                </div>
                <div className="dashboard__row">
                  <div><strong>Derby DE23 — 18 Burton Rd</strong><br /><span style={{ opacity: 0.7, fontSize: 11 }}>Handover signed · Citizen placed</span></div>
                  <span className="pill pill--green">Live</span>
                  <span style={{ fontSize: 12, opacity: 0.85 }}>5 days void</span>
                </div>
              </div>
              <p style={{ marginTop: 14, fontSize: 11, opacity: 0.6, textAlign: 'right' }}>
                Sample view — actual data redacted for confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">What Atlas does for property work</p>
            <h2 className="display">Six capabilities. One source of truth.</h2>
            <hr className="gold-rule" />
          </header>

          <div className="grid-3">
            <Feature i={0} icon={<ClipboardList size={20} />} h="Refurb workspace"     p="Spec, schedule of works, photos, variations, sign-offs — all on one card per property." />
            <Feature i={1} icon={<Wrench size={20} />}        h="Reactive jobs"        p="Tenant or operator raises a ticket, Atlas routes to a vetted trade, SLA timer runs. Closure photos required before sign-off." />
            <Feature i={2} icon={<FileCheck size={20} />}     h="Statutory schedule"   p="Gas, EICR, fire, legionella, EPC. Forward-looking calendar. Alerts at 90/30/7 days. No certificate ever expires unnoticed." />
            <Feature i={3} icon={<BarChart3 size={20} />}     h="Spend tracking"       p="Refurb budget vs actual. Maintenance spend year-to-date. Investor sees what they own; we see what we run." />
            <Feature i={4} icon={<ShieldCheck size={20} />}   h="Trade accreditation"  p="NICEIC, Gas Safe, public liability, employer&rsquo;s liability — current expiry tracked. No expired insurance ever leaves Atlas onto a job." />
            <Feature i={5} icon={<Activity size={20} />}      h="Handover to Elevate"  p="At PC, Atlas produces a handover pack: certificates, snag list, warranties, manuals. Elevate signs it off — and citizen placement opens." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">One platform, three brands</p>
            <h2 className="display">Same data. Different angle for each role.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              Atlas isn&rsquo;t a Rhema-only tool. It&rsquo;s the connective tissue
              between Impact (deals + investors), Rhema (property) and Elevate (operations).
              Each side sees the slice they care about.
            </p>
          </header>

          <div className="grid-3">
            <article className="card svc reveal">
              <div className="svc__icon" style={{ background: 'linear-gradient(135deg, #0E3F4A, #163A45)' }}>
                <Activity size={20} />
              </div>
              <h3 style={{ color: '#0E3F4A' }}>Elevate sees</h3>
              <p>Live bed availability, citizen placements, statutory compliance status per property. The data the registered manager needs to evidence safe operations.</p>
            </article>
            <article className="card svc reveal" data-delay="120" style={{ transitionDelay: '120ms' }}>
              <h3>Rhema sees</h3>
              <p>Refurb pipeline, reactive job queue, statutory schedule, accredited trade list, spend vs budget. The full property workbench.</p>
            </article>
            <article className="card svc reveal" data-delay="240" style={{ transitionDelay: '240ms' }}>
              <div className="svc__icon" style={{ background: 'linear-gradient(135deg, #0F1B36, #1A2950)' }}>
                <BarChart3 size={20} />
              </div>
              <h3 style={{ color: '#0F1B36' }}>Impact sees</h3>
              <p>Live deals, risk scoring, investor-facing property cards, gross/net yield, monthly statements. The commercial side of the operation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--earth">
        <div className="container reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-7)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Never miss a beat</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              Atlas alerts before you&rsquo;d know to ask.
            </h2>
            <p className="lead">
              Statutory dates count down 90/30/7 days out. SLA timers turn amber
              before they break. Trade insurance expiry warns 30 days early. The
              system flags it; we deal with it; the property card stays green.
            </p>
          </div>
          <div className="card" style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(232,168,124,0.30)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--on-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AlertTriangle size={18} color="var(--gold-light)" />
                <span>EICR due in 7 days · NG7 — 8 Lenton Blvd</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AlertTriangle size={18} color="#F08585" />
                <span>P1 reactive raised · Boiler · TS19 — 4 Hartburn Ln</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AlertTriangle size={18} color="var(--gold-light)" />
                <span>Trade insurance expiring · Robson Electrical (NICEIC)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <ShieldCheck size={18} color="#7AD2A2" />
                <span>Handover signed · DE23 — 18 Burton Rd · ready for placement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--primary">
        <div className="container reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow">One platform. Three brands. Every detail.</p>
          <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Property Atlas is the difference.
          </h2>
          <p className="lead" style={{ margin: '24px auto 28px' }}>
            Property Atlas is what makes Rhema, Elevate and Impact more than three
            companies sharing a portfolio. It&rsquo;s the platform that turns
            separate teams into one operation — without losing the specialism in any of them.
          </p>
          <a className="btn btn--gold" href="https://atlas.impactig.co.uk" target="_blank" rel="noreferrer">
            Open Atlas portal <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, h, p, i = 0 }) {
  return (
    <article className="card svc reveal" data-delay={i * 80} style={{ transitionDelay: `${i * 80}ms` }}>
      <div className="svc__icon">{icon}</div>
      <h3>{h}</h3>
      <p dangerouslySetInnerHTML={{ __html: p }} />
    </article>
  );
}
