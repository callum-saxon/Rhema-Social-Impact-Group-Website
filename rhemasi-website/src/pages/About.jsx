import { Link } from 'react-router-dom';
import {
  ArrowRight, AlertCircle, Heart, Home as HomeIcon,
  Users, Sparkles, Target,
} from 'lucide-react';
import { LogoFigures } from '../components/Logo.jsx';

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">About Rhema</p>
          <h1 className="display">
            Life-changing housing solutions, built on quality property work.
          </h1>
          <p className="lead" style={{ maxWidth: 760 }}>
            Rhema Social Impact exists to refurbish, maintain and manage property
            for vulnerable people facing or experiencing homelessness, mental
            health conditions, learning disabilities and complex needs. We
            partner with registered provider Dawson Housing Association,
            local authorities, charities and care providers to turn houses into
            homes that actually fit the people who&rsquo;ll live in them.
          </p>
        </div>
      </section>

      {/* ---- WHO WE ARE ---- */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-8)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', color: 'var(--primary)' }}>
              A property partner with a social purpose.
            </h2>
            <hr className="gold-rule" />
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75 }}>
              Rhema is the property arm of a three-brand family — alongside
              Elevate Supported Living (the operator) and Impact Investment Group
              (sourcing &amp; managed investment). We collaborate with local
              authorities, registered providers and charities to deliver supported
              accommodation, social housing, family-assessment homes, step-down
              transitions and 16–18 semi-independent homes.
            </p>
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75 }}>
              With people&rsquo;s homes at the heart of what we do, we innovate new
              solutions, increase supply and scale opportunity that addresses the
              UK social-housing crisis — one property at a time.
            </p>
          </div>
          <div style={{ display: 'grid', placeItems: 'center', padding: 'var(--s-6)', background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))', borderRadius: 'var(--r-xl)' }}>
            <LogoFigures size={260} />
          </div>
        </div>
      </section>

      {/* ---- THE PROBLEM ---- */}
      <section className="section section--earth">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">The challenge</p>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
              A chronic shortage of suitable homes.
            </h2>
            <hr className="gold-rule" />
            <p className="lead">
              There&rsquo;s an acute UK-wide shortage of affordable, good-quality
              and suitable housing for people experiencing or at risk of
              homelessness, in hospital awaiting discharge, fleeing abuse, or
              leaving care or the criminal-justice system. The result: families and
              individuals stuck in expensive, unsuitable B&amp;B accommodation
              for months or years.
            </p>
          </header>

          <div className="stats">
            <div>
              <p className="stat__num">227k</p>
              <p className="stat__label">People in the worst<br />forms of homelessness</p>
            </div>
            <div>
              <p className="stat__num">96k</p>
              <p className="stat__label">Households in temp<br />accommodation</p>
            </div>
            <div>
              <p className="stat__num">121k</p>
              <p className="stat__label">Dependent children in<br />temporary housing</p>
            </div>
            <div>
              <p className="stat__num">↑430%</p>
              <p className="stat__label">LGA-reported increase<br />in B&amp;B spend</p>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 12, opacity: 0.7 }}>
            Sources: Crisis, Shelter, Local Government Association, ONS &amp; gov.uk live homelessness tables.
          </p>
        </div>
      </section>

      {/* ---- THE SOLUTION ---- */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Our approach</p>
            <h2 className="display">A holistic 360 housing &amp; support solution.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              We partner with local authorities, charities and housing associations
              to offer a range of supported-housing services — and the property
              expertise to make sure every home is decent-homes-standard or above.
            </p>
          </header>

          <div className="grid-3">
            <article className="card svc">
              <div className="svc__icon"><HomeIcon size={20} /></div>
              <h3>Housing with support</h3>
              <p>
                Emergency housing, temporary accommodation, individual and family
                assessment homes, permanent homes, step-down transitions, and
                16–18 semi-independent homes for care leavers.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><Users size={20} /></div>
              <h3>Right-sized properties</h3>
              <p>
                Blocks of 1- and 2-bed flats, small HMOs, single houses or flats —
                all decent-homes-standard and above, so each person lives in a
                safe, comfortable and appropriate home.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><Sparkles size={20} /></div>
              <h3>Property sourcing</h3>
              <p>
                Acquisition and refurbishment for local authorities, housing
                associations, care providers and social-impact investors —
                channelled through our sister brand Impact Investment Group.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---- VALUES ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">What we believe</p>
            <h2 className="display">Property work as care work.</h2>
            <hr className="gold-rule" />
          </header>

          <div className="grid-3">
            <article className="card svc">
              <div className="svc__icon"><Heart size={20} /></div>
              <h3>People at the centre</h3>
              <p>
                Every refurb spec asks the same first question: who is going to live
                here, and what do they need? We design for the cohort, not for a
                magazine spread.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><Target size={20} /></div>
              <h3>Outcomes over outputs</h3>
              <p>
                We&rsquo;re measured on what happens after handover — reduced void
                days, reduced readmissions, sustained tenancies — not just on
                whether the kitchen looks tidy on day one.
              </p>
            </article>
            <article className="card svc">
              <div className="svc__icon"><AlertCircle size={20} /></div>
              <h3>Urgency without shortcuts</h3>
              <p>
                When a citizen is in a hospital bed they don&rsquo;t need, every
                week we shave off the refurb is a week of their life back. We
                move fast — without ever cutting compliance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---- 360 model ---- */}
      <section className="section">
        <div className="container">
          <article className="atlas-strip">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold)' }}>The full 360 model</p>
              <h2>
                Property + people + platform — the only way it works at scale.
              </h2>
              <p>
                Rhema delivers the property side. Elevate delivers the support side.
                Impact channels the capital. Dawson holds the registered-provider
                lease. Property Atlas joins it all up. That&rsquo;s how a sourced
                house becomes an investor-ready, citizen-occupied home in 28 days.
              </p>
              <Link className="btn btn--gold" to="/property-atlas">
                See Property Atlas <ArrowRight size={16} />
              </Link>
            </div>
            <div className="atlas-strip__viz">
              <h4>The 360 chain</h4>
              <ul>
                <li><b>Impact</b> sources and underwrites the deal</li>
                <li><b>Rhema</b> refurbs to cohort spec &amp; runs ongoing maintenance</li>
                <li><b>Dawson HA</b> holds the registered-provider lease</li>
                <li><b>Elevate</b> operates and supports the citizen</li>
                <li><b>LA / NHS</b> commissions and pays via LHA + top-ups</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section section--primary">
        <div className="container center" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="eyebrow">Working with us</p>
          <h2 className="display" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Looking for a property partner that gets the brief?
          </h2>
          <p className="lead">
            We&rsquo;re actively expanding partnerships with local authorities,
            housing associations and charities working with people facing housing
            crisis. If you have an infrastructure that lets us focus on delivery,
            we want to talk.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--gold" to="/contact">Start a conversation <ArrowRight size={16} /></Link>
            <Link className="btn btn--ghost" to="/services">See our services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
