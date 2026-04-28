import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, AlertCircle, Home as HomeIcon, Hospital,
  Hotel, Baby, Users, HandHeart, TrendingUp, Building2, ShieldCheck,
  HeartHandshake, BarChart3, Target, Sparkles,
} from 'lucide-react';

import StatCard from '../components/StatCard.jsx';
import UKMap from '../components/UKMap.jsx';

export default function Home() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="fade-up">
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

          <aside className="metrics fade-up" style={{ animationDelay: '120ms' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Our 2024–25 goal</p>
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

      {/* ---- THE SCALE OF THE NEED ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">The scale of the need</p>
            <h2 className="display">
              The UK has a chronic shortage of suitable homes.
            </h2>
            <hr className="gold-rule" />
            <p className="lead">
              The figures below describe the people Rhema and our partners exist
              to serve &mdash; families in B&amp;Bs, citizens stuck in hospital
              waiting for a safe place to live, children growing up in temporary
              rooms, adults waiting on supported-housing lists.
            </p>
          </header>

          <div className="stat-grid">
            <StatCard
              icon={Users}
              number="227,000"
              label="People in the worst forms of homelessness — rough sleeping, sheds, B&Bs"
              source="Crisis, 2021"
              sourceUrl="https://www.crisis.org.uk/ending-homelessness/homelessness-knowledge-hub/"
            />
            <StatCard
              icon={Hotel}
              number="96,060"
              label="Households living in temporary accommodation in England"
              source="gov.uk live tables"
              sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness"
            />
            <StatCard
              icon={Baby}
              number="121,680"
              label="Dependent children housed in temporary accommodation"
              source="gov.uk live tables"
              sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness"
              accent
            />
            <StatCard
              icon={HomeIcon}
              number="9,780"
              label="Households placed in B&B-style accommodation"
              source="gov.uk live tables"
              sourceUrl="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness"
            />
            <StatCard
              icon={AlertCircle}
              number="1,530"
              label="Families with dependent children in B&Bs — some living there for years"
              source="Shelter, 2022"
              sourceUrl="https://england.shelter.org.uk/media/press_releases"
            />
            <StatCard
              icon={TrendingUp}
              number="430%"
              label="Rise in council spend on B&Bs for homeless people over 5 years"
              source="Local Government Association"
              sourceUrl="https://www.local.gov.uk/about/news/lga-430-increase-bb-spend-people-who-are-homeless-reveals-urgency-more-social-housing"
              accent
            />
            <StatCard
              icon={Hospital}
              number="2,000+"
              label="Mental health patients delayed in hospital due to no community housing"
              source="NHS England Discharge Data"
              sourceUrl="https://www.england.nhs.uk/statistics/statistical-work-areas/discharge-delays-acute-data/"
            />
            <StatCard
              icon={HandHeart}
              number="1.3M+"
              label="Households on local-authority social housing waiting lists"
              source="Shelter / gov.uk"
              sourceUrl="https://england.shelter.org.uk/professional_resources/policy_and_research/policy_library/over_a_million_households_on_social_housing_waiting_list_at_a_time_when_only_a_handful_of_social_homes_being_built"
            />
          </div>
        </div>
      </section>

      {/* ---- REGIONAL BREAKDOWN ---- */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Where the pressure is</p>
            <h2 className="display">A national problem with regional hotspots.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              London accounts for over half of all temporary-accommodation
              households in England. Scotland, Wales and the West Midlands carry
              the next-largest concentrations. Hover any region for the latest
              figure and source.
            </p>
          </header>

          <UKMap />
        </div>
      </section>

      {/* ---- PROBLEM / SOLUTION ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Social impact investing</p>
            <h2 className="display">Capital with a social purpose.</h2>
            <hr className="gold-rule" />
            <p className="lead">
              We invite ethical investors to partner with us to deliver housing
              that the state alone cannot supply at the pace it&rsquo;s needed.
              Investors get a fixed return secured against tangible property;
              vulnerable people get a safe, decent, supported home.
            </p>
          </header>

          <div className="problem-solution">
            <article className="ps-card ps-card--problem fade-up">
              <div className="ps-card__icon"><AlertCircle size={22} /></div>
              <h3>The problem</h3>
              <p>
                The UK&rsquo;s social-housing pipeline cannot keep pace with need.
                Local authorities are forced to place families in expensive,
                unsuitable B&amp;B and hostel accommodation. NHS patients ready
                for discharge stay on wards because there&rsquo;s nowhere safe to
                go. Vulnerable adults sit on supported-living waiting lists for
                months. Public spend rises while outcomes worsen.
              </p>
            </article>

            <article className="ps-card ps-card--what fade-up" style={{ animationDelay: '120ms' }}>
              <div className="ps-card__icon"><Target size={22} /></div>
              <h3>What we do</h3>
              <p>
                Rhema acquires, refurbishes, maintains and manages property to
                a decent-homes-plus standard. We partner with registered
                providers, charities and care providers to deliver supported
                accommodation, family-assessment homes, step-down transitions
                and 16–18 semi-independent placements &mdash; backed by Property
                Atlas, our compliance and operations platform.
              </p>
            </article>

            <article className="ps-card ps-card--how fade-up" style={{ animationDelay: '240ms' }}>
              <div className="ps-card__icon"><Sparkles size={22} /></div>
              <h3>How it fixes it</h3>
              <p>
                Patient capital + operational delivery + a registered-provider
                partnership = supply at pace. Investors hold first charge on the
                property and receive a fixed return; the local authority gets a
                quicker, cheaper, safer placement; the citizen gets a home with
                wrap-around support. The state spends less; the impact is real.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---- INVESTOR CTA STRIP ---- */}
      <section className="section">
        <div className="container">
          <article className="invest-strip">
            <div className="invest-strip__copy">
              <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>
                For ethical investors
              </p>
              <h2>
                A property fund that changes lives <em>and</em> earns a fixed return.
              </h2>
              <p>
                Through our supported-homes property fund, an investor club
                with a social impact acquires a portfolio of properties that
                house vulnerable individuals and families. Investors receive
                first charge on each property and a fixed return on their
                investment. We deliver the operational side &mdash; refurb,
                maintenance, lease compliance and reporting &mdash; through our
                Property Atlas platform.
              </p>
              <Link className="btn btn--gold" to="/contact">
                Talk to us about the fund <ArrowRight size={16} />
              </Link>
            </div>

            <ul className="invest-strip__bullets">
              <li><ShieldCheck size={18} /> Investor first charge on each property</li>
              <li><BarChart3 size={18} /> Fixed return, transparent reporting</li>
              <li><HeartHandshake size={18} /> Wrap-around support delivered with our charity partners</li>
              <li><Building2 size={18} /> Decent-homes-plus standard on every refurb</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ---- WHAT WE DELIVER ---- */}
      <section className="section section--alt">
        <div className="container">
          <header className="section-head">
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
            <article className="service-tile">
              <div className="service-tile__icon"><HomeIcon size={20} /></div>
              <h3>Emergency &amp; temp accommodation</h3>
              <p>A positive alternative to B&amp;B and hotel placements, with a permanent housing pathway from day one.</p>
            </article>
            <article className="service-tile">
              <div className="service-tile__icon"><Users size={20} /></div>
              <h3>Family &amp; individual assessment homes</h3>
              <p>Safe, suitable settings for assessment placements with safeguarding partners and local authorities.</p>
            </article>
            <article className="service-tile">
              <div className="service-tile__icon"><HeartHandshake size={20} /></div>
              <h3>Supported &amp; semi-independent</h3>
              <p>Permanent supported tenancies, step-down transition homes, and 16–18 semi-independent placements for care leavers.</p>
            </article>
            <article className="service-tile">
              <div className="service-tile__icon"><Building2 size={20} /></div>
              <h3>Property sourcing &amp; refurb</h3>
              <p>Acquisition, refurb to decent-homes-plus standard, and ongoing planned + reactive maintenance.</p>
            </article>
            <article className="service-tile">
              <div className="service-tile__icon"><ShieldCheck size={20} /></div>
              <h3>Compliance &amp; reporting</h3>
              <p>Statutory inspection schedules, certificate management and an investor-portal handoff for owners.</p>
            </article>
            <article className="service-tile">
              <div className="service-tile__icon"><HandHeart size={20} /></div>
              <h3>Wrap-around support</h3>
              <p>Mental health, addiction and trauma support; employment and training; tenancy-sustainment work — delivered with our partners.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---- PROPERTY ATLAS — small section ---- */}
      <section className="section">
        <div className="container">
          <article className="atlas-mini">
            <div className="atlas-mini__copy">
              <p className="eyebrow">Sister platform</p>
              <h3>Powered by Property Atlas.</h3>
        