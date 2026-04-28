import { Link } from 'react-router-dom';
import { Handshake, Building2, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Partners() {
  return (
    <>
      <section className="page-head">
        <div className="container reveal">
          <p className="eyebrow">Partners</p>
          <h1 className="display">Built on registered-provider partnerships.</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            Supported housing only works when the right organisations are in the
            right place in the chain. Rhema is one piece of a tightly-bound
            partnership — registered provider, operator, investor, and the
            commissioning local authority that pays the rent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="partner reveal" style={{ marginBottom: 'var(--s-7)' }}>
            <div className="partner__seal">
              <b>Dawson<br />Housing<br />Association</b>
              <small>Registered Provider</small>
            </div>
            <div>
              <p className="eyebrow">Lead partner</p>
              <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', margin: '0 0 16px' }}>
                Dawson Housing Association
              </h2>
              <hr className="gold-rule" />
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                Dawson HA is our registered-provider partner. Every property in the
                portfolio that holds an FRI lease with Elevate is leased to Dawson —
                bringing the regulatory rigour of the Regulator of Social Housing
                to bear on every tenancy. Rhema delivers the property side; Dawson
                holds the tenancy and the regulatory accountability.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                The partnership matters because supported-housing rents are paid by
                Local Housing Allowance plus LA/NHS top-ups, and that funding only
                flows where there&rsquo;s a registered provider in the chain. Dawson
                makes the model work.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">Inside the family</p>
            <h2 className="display">Two sister brands — same mission, different specialism.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              Rhema doesn&rsquo;t do this alone. We&rsquo;re part of a three-brand
              family that together delivers source → refurb → operate → fund —
              all on one shared platform, Property Atlas.
            </p>
          </header>

          <div className="family">
            <a className="family__card family__card--elevate reveal" href="https://elevatesl.co.uk" target="_blank" rel="noreferrer">
              <div className="family__mark">E</div>
              <h3>Elevate Supported Living</h3>
              <p>
                Therapeutic and enhanced specialist homes for ages 16+ living with
                complex needs, mental health conditions and learning disabilities.
                Elevate is the operator on the ground; Rhema is the property
                partner that hands them a home that actually works.
              </p>
              <small>elevatesl.co.uk <ArrowUpRight size={14} /></small>
            </a>

            <a className="family__card family__card--impact reveal" data-delay="120" style={{ transitionDelay: '120ms' }} href="https://impactig.co.uk" target="_blank" rel="noreferrer">
              <div className="family__mark">i</div>
              <h3>Impact Investment Group</h3>
              <p>
                Property sourcing &amp; managed investment service for socially-minded
                investors. Impact sources the deal; Rhema fits it out and runs it; the
                investor sees an FRI-leased asset on a registered-provider lease.
              </p>
              <small>impactig.co.uk <ArrowUpRight size={14} /></small>
            </a>

            <div className="family__card family__card--rhema reveal" data-delay="240" style={{ transitionDelay: '240ms' }}>
              <div className="family__mark">R</div>
              <h3>Rhema Social Impact</h3>
              <p>
                Property refurbishment, ongoing maintenance and management — partnered
                with Dawson Housing Association. The property side of the operation —
                that&rsquo;s us.
              </p>
              <small>rhemasi.co.uk · You are here</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">The wider network</p>
            <h2 className="display">The other people in the chain.</h2>
            <hr className="gold-rule" />
          </header>

          <div className="grid-3">
            <article className="card svc reveal">
              <div className="svc__icon"><Building2 size={20} /></div>
              <h3>Local Authorities</h3>
              <p>Commissioning teams across the East Midlands and the North East — we publish bed availability live, respond to referrals within 24 hours, and report outcomes quarterly.</p>
            </article>
            <article className="card svc reveal" data-delay="120" style={{ transitionDelay: '120ms' }}>
              <div className="svc__icon"><Handshake size={20} /></div>
              <h3>NHS Trusts</h3>
              <p>Step-down placements, MDT discharge planning, integrated CMHT working. Where NHS funding is in the picture, we make it visible to the panel.</p>
            </article>
            <article className="card svc reveal" data-delay="240" style={{ transitionDelay: '240ms' }}>
              <div className="svc__icon"><ShieldCheck size={20} /></div>
              <h3>Subcontract trades</h3>
              <p>Vetted regional teams: NICEIC electricians, Gas Safe plumbers, accredited joiners and decorators. Insurance and accreditation tracked in Atlas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--primary">
        <div className="container reveal" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--s-7)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Get involved</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              Local authority commissioner, RP, or trade — let&rsquo;s talk.
            </h2>
            <p className="lead">
              We&rsquo;re always interested in conversations with new local authorities,
              with other registered providers looking for property partners, and with
              high-quality regional trade teams who want a steady run of work that
              actually matters.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link className="btn btn--gold" to="/contact">Become a partner <ArrowRight size={16} /></Link>
            <Link className="btn btn--ghost" to="/property-atlas">See how Atlas works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
