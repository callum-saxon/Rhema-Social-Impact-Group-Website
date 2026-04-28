import { Link } from 'react-router-dom';
import {
  Hammer, Wrench, ClipboardCheck, Flame, Zap, Shield,
  Building2, Sparkles, FileCheck, ArrowRight,
} from 'lucide-react';

const SECTIONS = [
  {
    title: 'Refurbishment',
    icon: <Hammer size={26} />,
    intro: 'The value-add work that turns a sourced property into a home fit for the cohort.',
    items: [
      { icon: <Building2 size={20} />, h: 'Layout reconfiguration', p: 'Convertible reception → 3rd bed; 3-bed → 4-bed where structure allows. The single highest-impact change for supported-living yield and citizen capacity.' },
      { icon: <Sparkles size={20} />,  h: 'Kitchen & bathroom replacement', p: 'Specification chosen for durability and ease of maintenance, not magazine appeal. Anti-ligature where the cohort requires; wet-rooms where mobility is in scope.' },
      { icon: <Zap size={20} />,       h: 'Full rewires', p: 'Where the EICR demands it. Up to ~£8k typical on a Victorian terrace. Certified by NICEIC contractors and uploaded to Atlas at sign-off.' },
      { icon: <Flame size={20} />,     h: 'Fire-safety package', p: 'Interlinked detection, FD30 doors, signage, evacuation plan. Sized to the building and the regulatory footprint of the supported-housing model.' },
    ],
  },
  {
    title: 'Ongoing maintenance',
    icon: <Wrench size={26} />,
    intro: 'Reactive and planned — booked, tracked and audit-trailed in Property Atlas.',
    items: [
      { icon: <FileCheck size={20} />, h: 'Statutory inspections', p: 'Annual gas safety, 5-yearly EICR, fire risk assessments, legionella checks. Scheduled in advance, alerted on the platform, never missed.' },
      { icon: <Wrench size={20} />,    h: 'Reactive jobs', p: 'Plumbing, electrical, fabric-of-building. SLA-tracked. P1 (safety) responded in <4h, P2 in <24h, P3 in <5 working days.' },
      { icon: <Shield size={20} />,    h: 'Compliance dashboard', p: 'Every certificate live and queryable. The investor sees current status; the commissioner sees the audit trail; the operator sees what is overdue.' },
    ],
  },
  {
    title: 'Property management',
    icon: <ClipboardCheck size={26} />,
    intro: 'End-to-end stewardship of the FRI-leased asset.',
    items: [
      { icon: <Building2 size={20} />, h: 'Lease compliance', p: 'We hold the relationship between investor, registered provider (Dawson HA) and operator (Elevate). Lease terms tracked, breaches flagged early.' },
      { icon: <FileCheck size={20} />, h: 'Void minimisation', p: 'Atlas matching surfaces an available bed to LA commissioners the moment a citizen moves on. Voids measured in days, not weeks.' },
      { icon: <Sparkles size={20} />,  h: 'Rent flow & reporting', p: 'Investor sees one monthly statement. We deal with the rest — LHA payments, top-ups, deductions, lease re-bases.' },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container reveal">
          <p className="eyebrow">What we do</p>
          <h1 className="display">Three services. Ten years of property muscle behind them.</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            Rhema is structured around three services that map onto the
            life-cycle of a supported-housing property — buy it, fit it out, run it.
            Every step lives on Property Atlas, so nothing falls between teams.
          </p>
        </div>
      </section>

      {SECTIONS.map((sec, i) => (
        <section key={sec.title} className={`section ${i % 2 ? 'section--alt' : ''}`}>
          <div className="container">
            <header className="section-head reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="svc__icon" style={{ width: 56, height: 56 }}>{sec.icon}</div>
                <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', margin: 0 }}>
                  {sec.title}
                </h2>
              </div>
              <hr className="gold-rule" style={{ marginTop: 16 }} />
              <p className="lead">{sec.intro}</p>
            </header>

            <div className="grid-3">
              {sec.items.map((item, j) => (
                <article
                  key={item.h}
                  className="card svc reveal"
                  data-delay={j * 100}
                  style={{ transitionDelay: `${j * 100}ms` }}
                >
                  <div className="svc__icon">{item.icon}</div>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--primary">
        <div className="container reveal" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--s-7)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Bundled or separate</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              Use one service. Use all three. Same standard either way.
            </h2>
            <p className="lead">
              Most clients take refurb and ongoing maintenance together. Some come
              to us only for the FRI management once a property is already up and
              running. Some only need a one-off refurb on an asset they already own.
              We&rsquo;ll tell you straight which option fits.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link className="btn btn--gold" to="/contact">Scope a project <ArrowRight size={16} /></Link>
            <Link className="btn btn--ghost" to="/our-process">See how we deliver</Link>
          </div>
        </div>
      </section>
    </>
  );
}
