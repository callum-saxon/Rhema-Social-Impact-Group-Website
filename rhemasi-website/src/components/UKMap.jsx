import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

const REGIONS = [
  // LEFT-side labels
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government, 2024', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', dot: [482, 105], label: [180, 90],  side: 'left' },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI DfC, 2024',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              dot: [335, 320], label: [180, 175], side: 'left' },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [462, 252], label: [180, 250], side: 'left' },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales, 2024',          url: 'https://www.gov.wales/homelessness-statistics',                       dot: [415, 355], label: [180, 335], side: 'left' },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [482, 365], label: [180, 415], side: 'left' },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [445, 445], label: [180, 500], side: 'left' },

  // RIGHT-side labels
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [510, 215], label: [740, 130], side: 'right' },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                    source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [532, 252], label: [740, 200], side: 'right' },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',  source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [532, 320], label: [740, 280], side: 'right' },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',       source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [575, 350], label: [740, 360], side: 'right' },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [580, 405], label: [740, 440], side: 'right' },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [555, 432], label: [740, 520], side: 'right' },
];

// More accurate UK silhouette — Scotland's NW bulge, NE coast bulge, Norfolk
// bulge, Kent SE corner, Cornwall tip, Bristol Channel cut, Wales peninsula,
// Liverpool Bay indent, Solway, Mull of Kintyre, then back round to the top.
const GB_PATH = "M 462 38 L 478 36 L 496 38 C 504 42 504 52 502 62 L 502 90 L 504 118 L 506 145 L 510 170 L 514 195 L 520 218 L 528 245 L 538 270 L 550 290 L 568 312 L 588 332 L 595 355 L 590 378 L 580 388 L 590 400 L 605 408 L 615 425 C 612 434 600 438 595 438 L 570 440 L 540 442 L 510 446 L 478 450 L 450 458 L 420 466 L 398 470 L 388 470 C 378 466 380 458 388 458 L 410 458 L 432 452 L 452 444 L 470 432 L 475 418 C 470 410 460 408 452 412 L 432 412 L 410 408 L 395 398 L 388 380 L 386 358 L 390 338 L 396 320 L 405 305 L 418 295 L 432 288 L 448 280 L 462 270 L 468 256 L 468 235 L 462 215 L 452 195 L 442 175 L 435 155 C 428 142 428 130 432 122 L 430 100 L 432 80 L 436 62 L 442 48 L 452 40 L 462 38 Z";
const NI_PATH = "M 340 285 C 318 287 305 302 308 322 C 312 345 332 358 358 356 C 380 352 392 336 388 316 C 384 298 364 283 340 285 Z";

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
              <stop offset="0%"  stopColor="#F1F4FA" stopOpacity="0.9" />
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
                  <circle cx={dx} cy={dy} r="7" className="uk-map__ripple" />
                )}
                <circle cx={dx} cy={dy} r="16" className="uk-map__halo" />
                <circle cx={dx} cy={dy} r="7"  className="uk-map__dot" />
              </g>
            );
          })}

          {/* Labels */}
          {REGIONS.map(r => {
            const [lx, ly] = r.label;
            const isLeft = r.side === 'left';
            const anchor = isLeft ? 'end' : 'start';
            const labelEdge = isLeft ? lx + 90 : lx;
            const arrowX = isLeft ? labelEdge + 6 : lx - 18;
            const arrowD = r.trend === 'up' ? 'M 0 7 L 5 0 L 10 7 Z' : 'M 0 0 L 5 7 L 10 0 Z';
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
                <text x={labelEdge} y={ly - 10} textAnchor={anchor} className="uk-map__label-name">{r.name}</text>
                <text x={labelEdge} y={ly + 14} textAnchor={anchor} className="uk-map__label-num">{r.num}</text>
                <g transform={`translate(${arrowX}, ${ly + 6})`} className={`uk-map__trend uk-map__trend--${r.trend}`}>
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
