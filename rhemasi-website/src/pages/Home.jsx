import { Link } from 'react-router-dom';
import {
  ArrowRight, Hammer, Wrench, ClipboardCheck,
  Leaf, Heart, Home as HomeIcon, Building2, ArrowUpRight,
} from 'lucide-react';
export default function Home() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Refurb · Maintain · Manage</p>
            <h1 className="display">
              Property work that <em>respects</em><br />
              the people who&rsquo;ll live there.
            </h1>
            <p className="lead hero__lead">
              Rhema Social Impact refurbishes, maintains and manages property for the
              supported-housing sector — alongside Dawson Housing Association
              (Registered Provider) and our sister brands Elevate and Impact.
              We turn a sourced property into a home that actually fits the citizen who needs it.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/services">Our services <ArrowRight size={16} /></Link>
              <Link className="btn btn--outline" to="/contact">Talk to us</Link>
            </div>
          </div>

          <aside className="metrics">
            <p className="eyebrow" style={{ margin: 0 }}>Operating today</p>
            <hr className="gold-rule" />
            <dl>
              <div><dt>Properties under management</dt><dd>38</dd></div>
              <div><dt>Refurbs delivered (24m)</dt><dd>22</dd></div>
              <div><dt>Avg refurb spend</dt><dd>£26k</dd></div>
              <div><dt>Reactive jobs SLA</dt><dd>94%</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ---- SERVICES ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">What we do</p>
            <h2 className="display">Three services. One accountable team.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              From the moment Impact hands over keys to the moment Elevate places a citizen —
              and every day after that — Rhema is the property side of the operation.
            </p>
          </header>

          <div className="grid-3">
            <article className="card svc">
              <div className="svc__icon"><Hammer size={20} /></div>
              <h3>Refurbishment</h3>
              <p>
                Kitchens, bathrooms, rewires, layout changes — the value-add work that
                turns a 2-/3-bed terrace into a home that&rsquo;s right for the cohort.
                Typical spend £15k–£40k. Delivered in 4–8 weeks.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><Wrench size={20} /></div>
              <h3>Ongoing maintenance</h3>
              <p>
                Reactive and planned. Gas safety, electrical inspections, fire safety,
                fabric-of-the-building. Logged through Property Atlas so the owner sees
                the audit trail and the operator sees the booked job.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><ClipboardCheck size={20} /></div>
              <h3>Property management</h3>
              <p>
                End-to-end management for the FRI-leased property: lease compliance,
                statutory inspections, void minimisation, rent flow. The investor sees
                one number; we keep the rest of the spreadsheet.
              </p>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--s-7)' }}>
            <Link className="btn btn--outline" to="/services">
              See full service breakdown <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- DAWSON PARTNER ---- */}
      <section className="section">
        <div className="container">
          <article className="partner">
            <div className="partner__seal">
              <b>Dawson<br />Housing<br />Association</b>
              <small>Registered Provider</small>
            </div>
            <div>
              <p className="eyebrow">Our key partner</p>
              <h2 className="display" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', color: 'var(--primary)', margin: '0 0 16px' }}>
                A registered-provider partnership built around outcomes.
              </h2>
              <hr className="gold-rule" />
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                Rhema works alongside Dawson Housing Association on the management,
                maintenance and refurbishment of every property in our portfolio. Dawson
                brings the registered-provider rigour, the regulatory expertise and the
                lettings experience; Rhema brings the trades, the project management and
                the platform that ties it together. Together we move properties from
                acquisition to tenanted faster and to a higher standard than any one
                party could alone.
              </p>
              <Link className="btn btn--primary" to="/partners" style={{ marginTop: 24 }}>
                About the partnership <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ---- ATLAS STRIP ---- */}
      <section className="section section--alt">
        <div className="container">
          <article className="atlas-strip">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>Powered by Property Atlas</p>
              <h2>
                Every job, every certificate, every spend —{' '}
                <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>on one platform.</em>
              </h2>
              <p>
                Rhema doesn&rsquo;t run on spreadsheets. Property Atlas tracks every
                refurb spec, every reactive job, every gas/electric/fire certificate,
                every spend against budget. The investor sees the property&rsquo;s
                health. The operator sees what&rsquo;s booked. The commissioner sees
                that compliance is current. No one needs to email anyone for &ldquo;the
                latest version&rdquo;.
              </p>
              <Link className="btn btn--gold" to="/property-atlas">
                How Atlas works for property mgmt <ArrowRight size={16} />
              </Link>
            </div>
            <div className="atlas-strip__viz">
              <h4>Atlas for the property side</h4>
              <ul>
                <li>Refurb spec, photos, certificates &amp; warranties</li>
                <li>Reactive jobs with SLA timers</li>
                <li>Statutory inspection schedule + alerts</li>
                <li>Spend tracking against budget</li>
                <li>Investor-portal handoff for owners</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ---- IMPACT STATS ---- */}
      <section className="section section--earth">
        <div className="container">
          <header className="section-head" style={{ maxWidth: 760 }}>
            <p className="eyebrow">Why &ldquo;Social Impact&rdquo;</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
              Property work matters when the person on the other side is in crisis.
            </h2>
            <hr className="gold-rule" />
            <p className="lead">
              The work we do isn&rsquo;t cosmetic. A poorly-fitted bathroom is a fall risk.
              A late electrical inspection is a fire. A dragged-out refurb is a citizen
              waiting in a hospital bed they don&rsquo;t need. We treat property work as
              care work, with the urgency that implies.
            </p>
          </header>

          <div className="stats">
            <div>
              <p className="stat__num">227k</p>
              <p className="stat__label">People in the worst<br />forms of homelessness*</p>
            </div>
            <div>
              <p className="stat__num">96k</p>
              <p className="stat__label">Households in temp<br />accommodation*</p>
            </div>
            <div>
              <p className="stat__num">£26k</p>
              <p className="stat__label">Avg refurb that turns<br />a void into a home</p>
            </div>
            <div>
              <p className="stat__num">94%</p>
              <p className="stat__label">Of reactive jobs<br />we resolve in SLA</p>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 12, opacity: 0.7 }}>
            *UK figures, Crisis &amp; Shelter — the scale of the housing crisis Rhema and our partners exist to address.
          </p>
        </div>
      </section>

      {/* ---- SISTER BRANDS ---- */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">The family</p>
            <h2 className="display">One mission. Three specialist brands.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              Rhema is one of three sister brands working from a shared platform — Property Atlas.
              Each brand keeps its specialism; together we deliver a full
              source-refurb-operate-let-fund pathway.
            </p>
          </header>

          <div className="family">
            <a className="family__card family__card--elevate" href="https://elevatesl.co.uk" target="_blank" rel="noreferrer">
              <div className="family__mark">E</div>
              <h3>Elevate</h3>
              <p>
                Therapeutic supported housing for adults and young people with complex
                needs, mental health and learning disabilities — the care delivery
                arm of the family.
              </p>
              <small>elevatesl.co.uk <ArrowUpRight size={14} /></small>
            </a>

            <div className="family__card family__card--rhema">
              <div className="family__mark">R</div>
              <h3>Rhema</h3>
              <p>
                Property refurbishment, ongoing maintenance and management — partnered
                with Dawson Housing Association. This is us — the property side
                of the operation.
              </p>
              <small>rhemasi.co.uk · You are here</small>
            </div>

            <a className="family__card family__card--impact" href="https://impactig.co.uk" target="_blank" rel="noreferrer">
              <div className="family__mark">i</div>
              <h3>Impact</h3>
              <p>
                Property sourcing &amp; managed investment service for socially-minded
                investors — the commercial side of the operation, channelling capital
                into homes that change lives.
              </p>
              <small>impactig.co.uk <ArrowUpRight size={14} /></small>
            </a>
          </div>
        </div>
      </section>

      {/* ---- WHO WE WORK WITH ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Who we work with</p>
            <h2 className="display">A property partner that fits the model.</h2>
            <hr className="gold-rule" />
          </header>
          <div className="grid-3">
            <article className="card svc">
              <div className="svc__icon"><Building2 size={20} /></div>
              <h3>Local authorities</h3>
              <p>
                Commissioning teams across the East Midlands and the North East — we
                publish bed availability live, respond to referrals within 24 hours,
                and report outcomes quarterly.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><Heart size={20} /></div>
              <h3>NHS Trusts</h3>
              <p>
                Step-down placements, MDT discharge planning, integrated CMHT working.
                Where NHS funding is in the picture, we make the route to a
                tenancy visible to the panel.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><HomeIcon size={20} /></div>
              <h3>Investors via Impact</h3>
              <p>
                FRI-leased single units and small portfolios. We deal with everything
                operational; the investor sees the monthly statement and the live
                property card in Atlas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---- CLOSING CTA ---- */}
      <section className="section">
        <div className="container">
          <article className="cta-banner">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>Start a conversation</p>
              <h3>
                Got a property to refurb, a portfolio to manage, or a partnership to scope?
              </h3>
              <p>
                We respond to all enquiries within one working day. No bots, no funnels —
                just a real conversation about whether what you need and what we do
                are a fit.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link className="btn btn--gold" to="/contact">Talk to us <ArrowRight size={16} /></Link>
              <Link className="btn btn--ghost" to="/our-process">See how we work</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
