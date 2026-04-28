import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const STEPS = [
  { n: '01', h: 'Survey & spec',         p: 'Within 5 working days of the property exchange, we are on site. Survey, photos, condition report, refurb spec, draft schedule of works. Cohort fit confirmed with Elevate.' },
  { n: '02', h: 'Mobilisation',          p: 'Subcontractors briefed (electrician, plumber, joiner, decorator). Materials ordered. H&S RAMS produced and lodged in Atlas before any tools land on site.' },
  { n: '03', h: 'Refurb on site',        p: 'Average 4–8 weeks. Daily progress photos and budget burn updated in Atlas. Variations approved on-platform with a paper trail, never WhatsApp.' },
  { n: '04', h: 'Statutory sign-off',    p: 'Gas, EICR, EPC, fire risk assessment, legionella, building control where applicable. All certificates uploaded to Atlas at PC.' },
  { n: '05', h: 'Handover to Elevate',   p: 'Walk-through with Elevate&rsquo;s registered manager. Snag list closed within 14 days. Keys handed over. Citizen referral pathway opens.' },
  { n: '06', h: 'Ongoing operate',       p: 'Reactive maintenance SLA active from day one. Planned maintenance scheduled out 24 months. Property Atlas runs the schedule; we run the trades.' },
];

export default function Process() {
  return (
    <>
      <section className="page-head">
        <div className="container reveal">
          <p className="eyebrow">Our process</p>
          <h1 className="display">From keys-in-hand to citizen-in-residence — a six-step path.</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            We package the full property life-cycle into six accountable steps —
            each one logged in Property Atlas, each one with a named owner on our
            side. The investor sees progress; the operator sees handover; the
            commissioner sees compliance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 'var(--s-8)', alignItems: 'flex-start' }}>
          <div>
            {STEPS.map((s, i) => (
              <article key={s.n} className="process-step reveal" data-delay={i * 80} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="process-step__n">{s.n}</div>
                <div>
                  <h3>{s.h}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.p }} />
                </div>
              </article>
            ))}
          </div>

          <aside className="card reveal" style={{ position: 'sticky', top: 100 }}>
            <Clock size={22} color="var(--gold-dark)" style={{ marginBottom: 8 }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--primary)', margin: '0 0 6px' }}>
              Typical timeline
            </h3>
            <p style={{ color: 'var(--ink-soft)', margin: '0 0 16px', fontSize: 14, lineHeight: 1.6 }}>
              From keys to first tenant in residence:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, fontSize: 14, color: 'var(--ink-soft)' }}>
              <li><b style={{ color: 'var(--primary)' }}>Week 1</b> &nbsp;Survey + spec</li>
              <li><b style={{ color: 'var(--primary)' }}>Week 2</b> &nbsp;Mobilisation</li>
              <li><b style={{ color: 'var(--primary)' }}>Week 3–10</b> &nbsp;Refurb on site</li>
              <li><b style={{ color: 'var(--primary)' }}>Week 11</b> &nbsp;Statutory sign-off</li>
              <li><b style={{ color: 'var(--primary)' }}>Week 12</b> &nbsp;Handover &amp; matching</li>
            </ul>
            <hr className="gold-rule" />
            <p style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: 'var(--ink-soft)', margin: 0 }}>
              <ShieldCheck size={16} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              Every step audited in Property Atlas — full paper trail for the investor and the regulator.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--earth">
        <div className="container center reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="eyebrow">Ready to scope a project?</p>
          <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Send us the address. We&rsquo;ll send you a survey slot.
          </h2>
          <p className="lead">
            We&rsquo;ll have eyes on the property within 5 working days, a draft
            spec within 10, and a fixed-price proposal within 15. No tyre-kicking.
          </p>
          <Link className="btn btn--gold" to="/contact" style={{ marginTop: 24 }}>
            Start a scoping conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
