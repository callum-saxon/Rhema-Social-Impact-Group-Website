/**
 * Headline-stats band — four enormous numbers in peach panels against
 * the navy background. Used to put the scale of the problem in the
 * reader's face before they reach the more granular sourced stats.
 */

const HEADLINES = [
  {
    big: '227k',
    label: 'people in the worst forms of homelessness in the UK',
    source: 'Crisis, 2021',
    sourceUrl: 'https://www.crisis.org.uk/ending-homelessness/homelessness-knowledge-hub/',
  },
  {
    big: '121,680',
    label: 'dependent children housed in temporary accommodation',
    source: 'gov.uk',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
  },
  {
    big: '1.3m',
    label: 'households on social housing waiting lists in England',
    source: 'Shelter / gov.uk',
    sourceUrl: 'https://england.shelter.org.uk/professional_resources/policy_and_research/policy_library/over_a_million_households_on_social_housing_waiting_list_at_a_time_when_only_a_handful_of_social_homes_being_built',
  },
  {
    big: '430%',
    label: 'rise in council spend on B&Bs for homeless people in 5 years',
    source: 'LGA',
    sourceUrl: 'https://www.local.gov.uk/about/news/lga-430-increase-bb-spend-people-who-are-homeless-reveals-urgency-more-social-housing',
  },
];

export default function HeadlineStats() {
  return (
    <section className="headline-stats">
      <div className="container">
        <h2 className="headline-stats__title">
          The numbers behind the housing crisis.
        </h2>
        <div className="headline-stats__row">
          {HEADLINES.map((h, i) => (
            <article
              key={h.big}
              className="headline-stat fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="headline-stat__panel">
                <span className="headline-stat__num">{h.big}</span>
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
