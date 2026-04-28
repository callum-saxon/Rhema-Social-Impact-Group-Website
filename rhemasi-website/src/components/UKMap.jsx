import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

/**
 * UK regional homelessness map.
 *
 * Layout:
 *   - One large SVG (viewBox 920 x 620). The UK silhouette sits in the centre.
 *     Region dots are placed on the silhouette at their geographic positions.
 *     Region labels (name + number + trend arrow) sit in the side gutters,
 *     connected to their dot by a leader line.
 *   - A roomy detail card sits BELOW the map. When a region is hovered or
 *     pinned, the card shows the detail; otherwise it shows the UK total +
 *     instructions.
 */

const REGIONS = [
  // LEFT-side labels (western half)
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government, 2024', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', dot: [475, 110], label: [180, 90],  side: 'left' },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI DfC, 2024',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              dot: [340, 320], label: [180, 175], side: 'left' },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [455, 245], label: [180, 250], side: 'left' },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales, 2024',          url: 'https://www.gov.wales/homelessness-statistics',                       dot: [430, 365], label: [180, 335], side: 'left' },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [490, 360], label: [180, 415], side: 'left' },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [445, 480], label: [180, 500], side: 'left' },

  // RIGHT-side labels (eastern half)
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [530, 200], label: [740, 130], side: 'right' },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                    source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [545, 250], label: [740, 200], side: 'right' },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',  source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [545, 340], label: [740, 280], side: 'right' },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',       source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [595, 370], label: [740, 360], side: 'right' },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [580, 425], label: [740, 440], side: 'right' },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', dot: [560, 480], label: [740, 520], side: 'right' },
];

// Recognisable stylised UK silhouette (viewBox 920 x 620). Scotland north,
// East coast down to Norfolk bulge, Kent SE corner, Cornwall tip,
// Bristol channel, Wales peninsula, NW England, west Scotland to top.
const GB_PATH = "M 478 30 C 460 30 446 40 450 55 L 458 80 C 452 92 460 105 467 112 L 472 130 C 466 145 474 158 480 170 L 488 188 C 484 200 492 210 502 218 L 510 240 C 514 252 518 268 522 280 L 530 298 C 540 315 548 332 552 350 L 552 370 C 550 385 552 400 558 410 L 568 408 C 575 408 578 418 572 425 L 562 432 C 558 442 568 442 575 440 L 578 450 C 568 460 552 466 532 466 L 510 470 L 488 470 C 472 470 458 466 448 462 L 428 470 C 414 472 402 472 396 466 C 390 460 396 452 408 452 L 425 450 C 442 446 458 438 470 428 L 470 420 C 466 410 454 405 442 402 L 430 408 C 422 408 418 402 422 393 C 428 382 436 376 444 372 L 456 365 C 452 352 448 340 452 330 L 434 325 C 422 322 412 316 412 305 C 410 290 414 275 422 265 L 432 252 C 438 240 446 230 454 224 L 466 215 L 458 200 C 446 192 432 200 420 195 C 412 190 412 180 418 175 C 426 170 436 167 446 170 L 460 172 L 470 158 C 462 142 458 130 462 118 L 470 102 C 466 90 466 75 472 65 C 474 55 484 38 478 30 Z";
// Northern Ireland (small island west of GB)
const NI_PATH = "M 340 290 C 318 290 305 305 308 325 C 312 348 332 360 358 358 C 380 354 392 338 388 318 C 384 300 364 290 340 290 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const region = REGIONS.find(r => r.id === active);

  // build leader-line points: from the label edge to a point near the dot
  function leaderPoints(r) {
    const [dx, dy] = r.dot;
    const [lx, ly] = r.label;
    const isLeft = r.side === 'left';
    // start at the inner edge of the label area
    const labelInnerX = isLeft ? lx + 90 : lx - 30;
    // bend point just shy of the dot
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
              <stop offset="0%" stopColor="#E2EAF6" />
              <stop offset="100%" stopColor="#F1F4FA" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="920" height="620" fill="url(#uk-sea-grad)" />
          <path className="uk-map__country" d={GB_PATH} fill="url(#uk-land-grad)" />
          <path className="uk-map__country" d={NI_PATH} fill="url(#uk-land-grad)" />

          {/* Leader lines (rendered first so they sit under everything) */}
          {REGIONS.map(r => (
            <polyline
              key={`ll-${r.id}`}
              points={leaderPoints(r)}
              className={`uk-map__leader-line ${active === r.id ? 'is-active' : ''}`}
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
                <circle cx={dx} cy={dy} r="16" className="uk-map__halo" />
                <circle cx={dx} cy={dy} r="7"  className="uk-map__dot" />
              </g>
            );
          })}

          {/* Labels in side gutters with name, number, trend arrow */}
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

      {/* Wide detail card BELOW the map */}
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
                Hover or click any region label or dot above to see the
                local-authority detail. London accounts for over half of all
                English temporary-accommodation households; Scotland, Wales and
                the South East carry the next-largest concentrations.
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
