import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

const REGIONS = [
  // LEFT-side labels
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', dot: [510, 105], label: [180, 95],  side: 'left' },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI Department for Communities',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              dot: [335, 322], label: [180, 175], side: 'left' },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [475, 250], label: [180, 250], side: 'left' },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales',          url: 'https://www.gov.wales/homelessness-statistics',                       dot: [420, 345], label: [180, 335], side: 'left' },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [495, 365], label: [180, 415], side: 'left' },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [465, 455], label: [180, 500], side: 'left' },

  // RIGHT-side labels
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [535, 215], label: [740, 130], side: 'right' },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                    source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [560, 255], label: [740, 200], side: 'right' },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',  source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [540, 320], label: [740, 280], side: 'right' },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',       source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [580, 350], label: [740, 360], side: 'right' },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [580, 410], label: [740, 440], side: 'right' },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [565, 445], label: [740, 520], side: 'right' },
];

// UK silhouette — drawn with smooth bezier curves to give a recognisable
// outline (Scotland, NE coast bulge, Norfolk bulge, Kent SE corner, Cornwall
// tip, Bristol Channel cut, Wales peninsula, NW England, west Scotland).
const GB_PATH = "M 480 35 C 510 32, 545 33, 548 55 C 555 80, 545 110, 540 140 C 540 170, 545 195, 552 218 C 562 245, 575 268, 588 290 C 595 308, 588 320, 600 335 C 615 355, 615 380, 605 395 C 615 415, 620 440, 605 458 C 580 466, 540 470, 500 472 C 460 475, 420 478, 400 480 C 385 478, 385 465, 405 462 C 435 455, 460 440, 472 418 C 470 405, 450 408, 432 410 C 410 405, 390 395, 388 372 C 388 340, 395 305, 412 285 C 435 275, 462 268, 478 252 C 484 228, 482 205, 472 188 C 458 175, 442 158, 430 138 C 420 125, 420 110, 432 100 C 442 80, 452 55, 470 38 Z";
const NI_PATH = "M 320 290 C 295 295, 285 315, 295 335 C 305 355, 330 365, 355 360 C 380 355, 388 335, 380 315 C 372 295, 345 285, 320 290 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const region = REGIONS.find(r => r.id === active);

  function leaderPoints(r) {
    const [dx, dy] = r.dot;
    const [lx, ly] = r.label;
    const isLeft = r.side === 'left';
    const labelInnerX = isLeft ? lx + 90 : lx - 30;
    const bendX = isLeft ? dx - 24 : dx + 24;
    return `${labelInnerX},${ly} ${bendX},${ly} ${dx},${dy}`;
  }

  return (
    <div className="uk-map">
      <div className="uk-map__svg-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 920 620"
          role="img"
          aria-label="UK regional homelessness map"
          className="uk-map__svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="uk-sea-grad" cx="50%" cy="50%" r="60%">
              <stop offset="0%"  stopColor="#F1F4FA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="uk-land-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"  stopColor="#E2EAF6" />
              <stop offset="100%" stopColor="#F1F4FA" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="920" height="620" fill="url(#uk-sea-grad)" />
          <path className="uk-map__country" d={GB_PATH} fill="url(#uk-land-grad)" />
          <path className="uk-map__country" d={NI_PATH} fill="url(#uk-land-grad)" />

          {/* Leader lines */}
          {REGIONS.map(r => (
            <polyline
              key={`ll-${r.id}`}
              points={leaderPoints(r)}
              className={`uk-map__leader-line ${active === r.id ? 'is-active' : ''} ${pinned === r.id ? 'is-pinned' : ''}`}
            />
          ))}

          {/* Region dots */}
          {REGIONS.map(r => {
            const [dx, dy] = r.dot;
            const isActive = active === r.id;
            const isPinned = pinned === r.id;
            return (
              <g
                key={r.id}
                className={`uk-map__pin ${isActive ? 'is-active' : ''} ${isPinned ? 'is-pinned' : ''}`}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(r.id)}
                onBlur={() => setHover(null)}
                onClick={() => setPinned(p => p === r.id ? null : r.id)}
                tabIndex={0}
                role="button"
                aria-label={`${r.name}: ${r.num} households`}
              >
                {isPinned && (
                  <circle cx={dx} cy={dy} r="8" className="uk-map__ripple" />
                )}
                <circle cx={dx} cy={dy} r="18" className="uk-map__halo" />
                <circle cx={dx} cy={dy} r="8"  className="uk-map__dot" />
              </g>
            );
          })}

          {/* Labels */}
          {REGIONS.map(r => {
            const [lx, ly] = r.label;
            const isLeft = r.side === 'left';
            const anchor = isLeft ? 'end' : 'start';
            const labelEdge = isLeft ? lx + 90 : lx;
            const arrowX = isLeft ? labelEdge + 8 : lx - 22;
            const arrowD = r.trend === 'up' ? 'M 0 8 L 6 0 L 12 8 Z' : 'M 0 0 L 6 8 L 12 0 Z';
            return (
              <g
                key={`lbl-${r.id}`}
                className={`uk-map__label ${active === r.id ? 'is-active' : ''}`}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setPinned(p => p === r.id ? null : r.id)}
                tabIndex={0}
                role="button"
              >
                <text x={labelEdge} y={ly - 12} textAnchor={anchor} className="uk-map__label-name">{r.name}</text>
                <text x={labelEdge} y={ly + 18} textAnchor={anchor} className="uk-map__label-num">{r.num}</text>
                <g transform={`translate(${arrowX}, ${ly + 8})`} className={`uk-map__trend uk-map__trend--${r.trend}`}>
                  <path d={arrowD} />
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      <article className={`uk-map__detail ${region ? 'is-visible' : ''}`} aria-live="polite">
        {region ? (
          <div className="uk-map__detail-grid">
            <div>
              <p className="uk-map__detail-eyebrow">{pinned ? 'Pinned region' : 'Hovering'}</p>
              <h3 className="uk-map__detail-name">{region.name}</h3>
              <p className="uk-map__detail-num">
                {region.num}
                <span className={`uk-map__detail-trend uk-map__detail-trend--${region.trend}`}>
                  {region.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {region.trend === 'up' ? 'rising' : 'falling'}
                </span>
              </p>
              <p className="uk-map__detail-sub">households in temporary accommodation</p>
            </div>
            <div>
              <p className="uk-map__detail-text">{region.detail}</p>
              <a className="uk-map__detail-src" href={region.url} target="_blank" rel="noreferrer">
                {region.source} <ArrowUpRight size={14} />
              </a>
              {pinned && (
                <button className="uk-map__detail-clear" onClick={() => setPinned(null)} type="button">
                  Clear selection
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="uk-map__detail-grid">
            <div>
              <p className="uk-map__detail-eyebrow">UK total</p>
              <h3 className="uk-map__detail-name">All UK regions</h3>
              <p className="uk-map__detail-num">~122,000</p>
              <p className="uk-map__detail-sub">households in temporary accommodation</p>
            </div>
            <div>
              <p className="uk-map__detail-text">
                Hover or click any region label or dot above to see local detail.
                London accounts for over half of all English temporary-accommodation
                households; Scotland, Wales and the South East carry the
                next-largest concentrations.
              </p>
              <p className="uk-map__detail-sub muted" style={{ marginTop: 12 }}>
                Sources:{' '}
                <a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" target="_blank" rel="noreferrer">gov.uk</a>,{' '}
                <a href="https://www.gov.scot/publications/homelessness-in-scotland-2023-24/" target="_blank" rel="noreferrer">Scottish Government</a>,{' '}
                <a href="https://www.gov.wales/homelessness-statistics" target="_blank" rel="noreferrer">StatsWales</a>,{' '}
                <a href="https://www.communities-ni.gov.uk/topics/homelessness" target="_blank" rel="noreferrer">NI DfC</a>.
              </p>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
