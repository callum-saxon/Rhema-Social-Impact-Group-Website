import CountUp from './CountUp.jsx';

const HEADLINES = [
  {
    to: 227000,
    format: (n) => `${Math.round(n / 1000)}k`,
    label: 'people in the worst forms of homelessness in the UK',
    source: 'Crisis',
    sourceUrl: 'https://www.crisis.org.uk/ending-homelessness/homelessness-knowledge-hub/',
  },
  {
    to: 121680,
    label: 'dependent children housed in temporary accommodation',
    source: 'gov.uk',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
  },
  {
    to: 1300000,
    format: (n) => `${(n / 1000000).toFixed(1)}m`,
    label: 'households on social housing waiting lists in England',
    source: 'Shelter / gov.uk',
    sourceUrl: 'https://england.shelter.org.uk/professional_resources/policy_and_research/policy_library',
  },
  {
    to: 430,
    suffix: '%',
    label: 'rise in council spend on B&Bs for homeless people in 5 years',
    source: 'LGA',
    sourceUrl: 'https://www.local.gov.uk/about/news/lga-430-increase-bb-spend-people-who-are-homeless-reveals-urgency-more-social-housing',
  },
];

export default function HeadlineStats() {
  return (
    <section className="headline-stats">
      <div className="container">
        <h2 className="headline-stats__title reveal">
          The numbers behind the housing crisis.
        </h2>
        <div className="headline-stats__row">
          {HEADLINES.map((h, i) => (
            <article
              key={h.label}
              className="headline-stat reveal"
              data-delay={i * 120}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="headline-stat__panel">
                <span className="headline-stat__num">
                  <CountUp to={h.to} suffix={h.suffix} format={h.format} />
                </span>
              </div>
              <p className="headline-stat__label">{h.label}</p>
              <p className="headline-stat__src">
                Source:{' '}
                <a href={h.sourceUrl} target="_blank" rel="noreferrer">{h.source}</a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
