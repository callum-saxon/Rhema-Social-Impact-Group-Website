import { useState } from 'react';

/**
 * Simplified UK map showing regional homelessness pressure.
 * Each region is a clickable polygon with a hover tooltip showing the
 * statistic. Source data drawn from gov.uk live homelessness tables and
 * Shelter / Crisis published figures.
 *
 * The shapes are deliberately stylised — this is an indicator, not a
 * geographic atlas. It loads instantly because it is inline SVG with no
 * external dependencies.
 */

const REGIONS = [
  {
    id: 'london',
    name: 'London',
    households: '63,580',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 220, cy: 320,
  },
  {
    id: 'south-east',
    name: 'South East',
    households: '11,420',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 235, cy: 360,
  },
  {
    id: 'north-west',
    name: 'North West',
    households: '6,780',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 150, cy: 200,
  },
  {
    id: 'yorkshire',
    name: 'Yorkshire & Humber',
    households: '4,810',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 195, cy: 215,
  },
  {
    id: 'east-mids',
    name: 'East Midlands',
    households: '2,450',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 200, cy: 270,
  },
  {
    id: 'west-mids',
    name: 'West Midlands',
    households: '7,640',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 165, cy: 270,
  },
  {
    id: 'south-west',
    name: 'South West',
    households: '5,180',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 145, cy: 380,
  },
  {
    id: 'east',
    name: 'East of England',
    households: '6,420',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 245, cy: 305,
  },
  {
    id: 'north-east',
    name: 'North East',
    households: '1,970',
    note: 'households in temporary accommodation',
    source: 'gov.uk live tables, Q1 2024',
    sourceUrl: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',
    cx: 180, cy: 155,
  },
  {
    id: 'wales',
    name: 'Wales',
    households: '11,140',
    note: 'individuals in temporary accommodation',
    source: 'StatsWales, 2024',
    sourceUrl: 'https://www.gov.wales/homelessness-statistics',
    cx: 110, cy: 280,
  },
  {
    id: 'scotland',
    name: 'Scotland',
    households: '15,860',
    note: 'households in temporary accommodation',
    source: 'Scottish Government, 2024',
    sourceUrl: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/',
    cx: 145, cy: 95,
  },
];

export default function UKMap() {
  const [active, setActive] = useState(null);
  const region = REGIONS.find(r => r.id === active);

  return (
    <div className="uk-map">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 500"
        role="img"
        aria-label="Homelessness pressure across UK regions"
      >
        {/* highly stylised UK silhouette — single path, four nations */}
        <path
          className="uk-map__land"
          d="
            M 145 50
            C 130 55, 115 70, 110 90
            C 105 105, 110 120, 125 130
            C 115 135, 105 145, 110 165
            C 115 180, 130 185, 145 180
            C 150 195, 165 205, 175 200
            L 195 220
            L 200 240
            L 175 260
            L 130 270
            C 110 275, 95 290, 90 310
            C 90 325, 100 340, 115 345
            L 130 360
            C 120 380, 130 400, 150 405
            C 165 415, 185 415, 195 400
            L 215 395
            C 230 405, 245 405, 255 395
            C 270 380, 270 360, 255 350
            L 245 330
            L 260 305
            L 250 280
            C 245 260, 230 250, 215 250
            L 215 230
            C 225 215, 225 200, 215 195
            L 220 175
            L 215 155
            L 195 135
            L 170 130
            C 165 115, 160 100, 155 80
            Z
          "
        />

        {/* Region dots */}
        {REGIONS.map(r => {
          const max = 63580;
          const value = parseInt(r.households.replace(/[^\d]/g, ''), 10);
          const radius = 8 + Math.sqrt(value / max) * 18;
          const isActive = active === r.id;
          return (
            <g
              key={r.id}
              className={`uk-map__pin ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(r.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={`${r.name}: ${r.households} ${r.note}`}
            >
              <circle cx={r.cx} cy={r.cy} r={radius + 6} className="uk-map__halo" />
              <circle cx={r.cx} cy={r.cy} r={radius} className="uk-map__dot" />
            </g>
          );
        })}
      </svg>

      <div className={`uk-map__readout ${region ? 'is-visible' : ''}`} aria-live="polite">
        {region ? (
          <>
            <p className="uk-map__readout-name">{region.name}</p>
            <p className="uk-map__readout-num">{region.households}</p>
            <p className="uk-map__readout-note">{region.note}</p>
            <p className="uk-map__readout-src">
              Source:{' '}
              <a href={region.sourceUrl} target="_blank" rel="noreferrer">
                {region.source}
              </a>
            </p>
          </>
        ) : (
          <>
            <p className="uk-map__readout-name muted">Hover or focus a region</p>
            <p className="uk-map__readout-note muted">
              Pressure of households living in temporary accommodation across UK regions.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
