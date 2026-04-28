import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, AlertCircle, Home as HomeIcon, Hospital,
  Hotel, Baby, Users, HandHeart, TrendingUp, Building2, ShieldCheck,
  HeartHandshake, BarChart3, Target, Sparkles,
} from 'lucide-react';

import StatCard from '../components/StatCard.jsx';
import UKMap from '../components/UKMap.jsx';
import HeadlineStats from '../components/HeadlineStats.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="reveal">
            <p className="eyebrow">Life-changing housing solutions</p>
            <h1 className="display">
              A home is the start of <em>every</em> recovery.
            </h1>
            <p className="lead hero__lead">
              Rhema Social Impact Group provides supported housing for vulnerable
              people facing or experiencing homelessness, mental ill-health,
              learning disabilities and complex needs &mdash; partnering with local
              authorities, charities, NHS Trusts and ethical investors to turn
              empty properties into homes that fit the people who&rsquo;ll live there.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/services">
                What we do <ArrowRight size={16} />
              </Link>
              <Link className="btn btn--outline" to="/contact">
                Partner with us
              </Link>
            </div>
          </div>

          <aside className="metrics reveal" data-delay="120" style={{ transitionDelay: '120ms' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Our 2024-25 goal</p>
            <hr className="gold-rule" />
            <dl>
              <div><dt>Properties to deliver</dt><dd>1,000+</dd></div>
              <div><dt>People housed</dt><dd>3,000</dd></div>
              <div><dt>Housing partners</dt><dd>13+</dd></div>
              <div><dt>Decent homes standard</dt><dd>100%</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <HeadlineStats />

      <section className="section section--alt">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">The scale of the need</p>
            <h2 className="display">The UK has a chronic shortage of suitable homes.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              The figures below describe the people Rhema and our partners exist
              to serve &mdash; families in B&amp;Bs, people stuck in hospital
              waiting for a safe place to live, children growing up in temporary
              rooms, adults waiting for supported housing.
            </p>
          </header>

          <div className="stat-grid">
            <div className="reveal" data-delay="0"   style={{ transitionDelay: '0ms'   }}><StatCard icon={Users}      number="227,000" label="People in the worst forms of homelessness — rough sleeping, sheds, B&Bs" source="Crisis, 2021" sourceUrl="https://www.crisis.org.uk/ending-homelessness/homelessness-knowledge-hub/" /></div>
            <div className="reveal" data-delay="80"  style={{ transitionDelay: '80ms'  }}><StatCard icon={Hotel}      number="96,060"  label="Households living in temporary accommodation in England" source="gov.uk live tables" sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" /></div>
            <div className="reveal" data-delay="160" style={{ transitionDelay: '160ms' }}><StatCard icon={Baby}       number="121,680" label="Dependent children housed in temporary accommodation" source="gov.uk live tables" sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" accent /></div>
            <div className="reveal" data-delay="240" style={{ transitionDelay: '240ms' }}><StatCard icon={HomeIcon}   number="9,780"   label="Households placed in B&B-style accommodation" source="gov.uk live tables" sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" /></div>
            <div className="reveal" data-delay="0"   style={{ transitionDelay: '0ms'   }}><StatCard icon={AlertCircle} number="1,530"  label="Families with dependent children in B&Bs — some living there for years" source="Shelter, 2022" sourceUrl="https://england.shelter.org.uk/media/press_releases" /></div>
            <div className="reveal" data-delay="80"  style={{ transitionDelay: '80ms'  }}><StatCard icon={TrendingUp} number="430%"   label="Rise in council spend on B&Bs for homeless people over 5 years" source="Local Government Association" sourceUrl="https://www.local.gov.uk/about/news/lga-430-increase-bb-spend-people-who-are-homeless-reveals-urgency-more-social-housing" accent /></div>
            <div className="reveal" data-delay="160" style={{ transitionDelay: '160ms' }}><StatCard icon={Hospital}   number="2,000+" label="Mental health patients delayed in hospital due to no community housing" source="NHS England" sourceUrl="https://www.england.nhs.uk/statistics/statistical-work-areas/discharge-delays-acute-data/" /></div>
            <div className="reveal" data-delay="240" style={{ transitionDelay: '240ms' }}><StatCard icon={HandHeart}  number="1.3M+"  label="Households on local-authority social housing waiting lists" source="Shelter / gov.uk" sourceUrl="https://england.shelter.org.uk/professional_resources/policy_and_research/policy_library" /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">Where the pressure is</p>
            <h2 className="display">A national problem with regional hotspots.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              Hover any region for a quick read. Click to pin a region and see the
              local-authority detail. Trend arrows show year-on-year direction.
            </p>
          </header>
          <div className="reveal"><UKMap /></div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head reveal" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Social impact investing</p>
            <h2 className="display">Investment that changes lives.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              We&rsquo;re inviting ethical investors to help us provide housing
              the country urgently needs &mdash; faster than the state can deliver
              alone. Investors get a steady, predictable return secured against
              real property, and vulnerable people get a safe, decent home with
              the right support around them.
            </p>
          </header>

          <div className="problem-solution">
            <article className="ps-card ps-card--problem reveal">
              <div className="ps-card__icon"><AlertCircle size={22} /></div>
              <h3>The problem</h3>
              <p>
                The UK&rsquo;s social-housing pipeline cannot keep pace with need.
                Local authorities are forced to place families in expensive,
                unsuitable B&amp;B and hostel accommodation. NHS patients ready
                for discharge stay on wards because there&rsquo;s nowhere safe to
                go. Vulnerable adults sit on supported-living waiting lists for
                months. Public spending rises while real lives get harder.
              </p>
            </article>

            <article className="ps-card ps-card--what reveal" data-delay="120" style={{ transitionDelay: '120ms' }}>
              <div className="ps-card__icon"><Target size={22} /></div>
              <h3>What we do</h3>
              <p>
                Rhema buys, refurbishes, maintains and manages homes to a
                high standard. We work alongside housing associations,
                charities and care providers to deliver supported homes,
                family-assessment properties, step-down accommodation and
                semi-independent placements for young people leaving care.
                Everything is tracked through Property Atlas, our shared
                operations platform.
              </p>
            </article>

            <article className="ps-card ps-card--how reveal" data-delay="240" style={{ transitionDelay: '240ms' }}>
              <div className="ps-card__icon"><Sparkles size={22} /></div>
              <h3>How we make a difference</h3>
              <p>
                We bring together long-term investment, hands-on delivery,
                and a trusted housing-association partner &mdash; and the result
                is more homes, sooner. Investors get a secured stake and a
                steady return. Local authorities get quicker, more affordable
                placements. And the people moving in get a real home with the
                right support around them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="invest-strip reveal">
            <div className="invest-strip__copy">
              <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>For ethical investors</p>
              <h2>A fund that changes lives <em>and</em> earns a fair, predictable return.</h2>
              <p>
                Through our supported-homes fund, a small group of like-minded
                investors come together to acquire a portfolio of properties
                that house vulnerable individuals and families. Each investor
                has a secured stake in their property and a steady, predictable
                return on their investment.
              </p>
              <Link className="btn btn--gold" to="/contact">
                Talk to us about the fund <ArrowRight size={16} />
              </Link>
            </div>

            <ul className="invest-strip__bullets">
              <li><ShieldCheck size={18} /> Each property held in your name, secured</li>
              <li><BarChart3 size={18} /> Steady return, fully transparent reporting</li>
              <li><HeartHandshake size={18} /> Wrap-around support delivered with our charity partners</li>
              <li><Building2 size={18} /> Every home meets the decent-homes standard or better</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section-head reveal">
            <p className="eyebrow">What we deliver</p>
            <h2 className="display">A full housing-with-support pathway.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              From emergency placement through to a permanent supported tenancy
              &mdash; we provide the building, the standard, and the operational
              wrap that makes the placement work.
            </p>
          </header>

          <div className="services-grid">
            <article className="service-tile reveal">
              <div className="service-tile__icon"><HomeIcon size={20} /></div>
              <h3>Emergency &amp; temp accommodation</h3>
              <p>A positive alternative to B&amp;B and hotel placements, with a permanent housing pathway from day one.</p>
            </article>
            <article className="service-tile reveal" data-delay="80" style={{ transitionDelay: '80ms' }}>
              <div className="service-tile__icon"><Users size={20} /></div>
              <h3>Family &amp; individual assessment homes</h3>
              <p>Safe, suitable settings for assessment placements with safeguarding partners and local authorities.</p>
            </article>
            <article className="service-tile reveal" data-delay="160" style={{ transitionDelay: '160ms' }}>
              <div className="service-tile__icon"><HeartHandshake size={20} /></div>
              <h3>Supported &amp; semi-independent</h3>
              <p>Permanent supported tenancies, step-down transition homes, and 16-18 semi-independent placements for care leavers.</p>
            </article>
            <article className="service-tile reveal" data-delay="0" style={{ transitionDelay: '0ms' }}>
              <div className="service-tile__icon"><Building2 size={20} /></div>
              <h3>Property sourcing &amp; refurb</h3>
              <p>Buying, refurbishing and maintaining homes to a high standard.</p>
            </article>
            <article className="service-tile reveal" data-delay="80" style={{ transitionDelay: '80ms' }}>
              <div className="service-tile__icon"><ShieldCheck size={20} /></div>
              <h3>Compliance &amp; reporting</h3>
              <p>We track every inspection and certificate, and give owners a clear view of their property.</p>
            </article>
            <article className="service-tile reveal" data-delay="160" style={{ transitionDelay: '160ms' }}>
              <div className="service-tile__icon"><HandHeart size={20} /></div>
              <h3>Wrap-around support</h3>
              <p>Mental health, addiction and trauma support, employment and training, and help to keep tenancies going long-term.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="atlas-mini reveal">
            <div className="atlas-mini__copy">
              <p className="eyebrow">Sister platform</p>
              <h3>Powered by Property Atlas.</h3>
              <p>
                Atlas is the platform our sister organisation built to run
                supported housing at scale. Every property, every refurb, every
                gas / electric / fire certificate, every spend against budget
                &mdash; one source of truth for the investor, the operator and
                the commissioner.
              </p>
              <a className="btn btn--outline" href="https://atlas.impactig.co.uk" target="_blank" rel="noreferrer">
                Visit Property Atlas <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="atlas-mini__viz" aria-hidden="true">
              <div className="atlas-mini__rows">
                <div className="atlas-mini__row">
                  <span className="atlas-mini__dot atlas-mini__dot--ok" />
                  <span className="atlas-mini__name">14 Belgrave Cres &middot; gas cert</span>
                  <span className="atlas-mini__pill atlas-mini__pill--ok">In date</span>
                </div>
                <div className="atlas-mini__row">
                  <span className="atlas-mini__dot atlas-mini__dot--warn" />
                  <span className="atlas-mini__name">28 Lockwood Rd &middot; refurb</span>
                  <span className="atlas-mini__pill atlas-mini__pill--warn">Wk 4 of 6</span>
                </div>
                <div className="atlas-mini__row">
                  <span className="atlas-mini__dot atlas-mini__dot--ok" />
                  <span className="atlas-mini__name">7 Marlowe Way &middot; reactive job</span>
                  <span className="atlas-mini__pill atlas-mini__pill--ok">In SLA</span>
                </div>
                <div className="atlas-mini__row">
                  <span className="atlas-mini__dot atlas-mini__dot--ok" />
                  <span className="atlas-mini__name">21 Whitlock St &middot; spend</span>
                  <span className="atlas-mini__pill atlas-mini__pill--ok">-4% vs budget</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="cta-banner reveal">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h3>However we can help &mdash; let&rsquo;s talk.</h3>
              <p>
                Local authorities, NHS Trusts, charities, housing associations
                or ethical investors &mdash; if what we do fits what you need,
                we&rsquo;ll come back within one working day. No bots, no funnels,
                just a real conversation.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link className="btn btn--gold" to="/contact">Talk to us <ArrowRight size={16} /></Link>
              <Link className="btn btn--ghost" to="/services">See our services</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
