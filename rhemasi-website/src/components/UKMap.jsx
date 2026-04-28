import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

const REGIONS = [
  { id: 'scotland',   name: 'Scotland',           num: '15,860', sortKey: 15860, trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government, 2024', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', cx: 380, cy: 95  },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  sortKey: 3500,  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI DfC, 2024',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              cx: 240, cy: 235 },
  { id: 'north-east', name: 'North East',         num: '1,970',  sortKey: 1970,  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.',     source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 420, cy: 175 },
  { id: 'north-west', name: 'North West',         num: '6,780',  sortKey: 6780,  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 365, cy: 215 },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  sortKey: 4810,  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                        source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 425, cy: 225 },
  { id: 'wales',      name: 'Wales',              num: '11,140', sortKey: 11140, trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales, 2024',          url: 'https://www.gov.wales/homelessness-statistics',                       cx: 325, cy: 290 },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  sortKey: 7640,  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 395, cy: 285 },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  sortKey: 2450,  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',   source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 440, cy: 275 },
  { id: 'east',       name: 'East of England',    num: '6,420',  sortKey: 6420,  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 480, cy: 295 },
  { id: 'london',     name: 'London',             num: '63,580', sortKey: 63580, trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 460, cy: 340 },
  { id: 'south-east', name: 'South East',         num: '11,420', sortKey: 11420, trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 445, cy: 380 },
  { id: 'south-west', name: 'South West',         num: '5,180',  sortKey: 5180,  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 360, cy: 385 },
];

// More-recognisable stylised UK silhouette, sized for a 700x480 viewBox.
const GB_PATH = "M 388 30 C 372 32 358 40 360 55 L 365 75 C 360 88 365 100 372 108 L 378 125 C 372 138 380 150 384 165 L 388 180 C 384 190 392 198 402 205 L 412 222 C 418 235 422 248 428 262 L 438 280 C 446 295 452 308 454 325 L 454 340 C 452 350 450 360 454 370 L 462 368 C 468 368 470 376 464 384 L 456 392 C 454 402 462 402 468 400 L 469 410 C 459 418 444 422 425 422 L 408 425 L 392 425 C 378 425 365 423 354 419 L 338 425 C 326 426 316 426 312 422 C 308 418 312 412 320 412 L 336 410 C 350 405 364 398 374 388 L 374 382 C 370 372 360 368 350 365 L 340 370 C 334 370 330 365 334 358 C 338 350 344 345 350 340 L 360 332 C 357 322 354 312 358 302 L 344 298 C 334 295 326 290 325 282 C 323 270 326 258 334 250 L 344 240 C 350 230 358 220 366 215 L 378 208 L 370 196 C 360 188 350 195 340 190 C 333 186 333 178 338 173 C 344 168 352 165 360 168 L 374 170 L 382 158 C 376 145 372 134 376 125 L 382 110 C 380 100 380 88 384 78 C 386 68 392 50 388 30 Z";
const NI_PATH = "M 240 215 C 222 215 212 228 214 245 C 218 262 234 270 252 268 C 270 264 280 250 276 234 C 272 220 258 215 240 215 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const region = REGIONS.find(r => r.id === active);
  const sortedAll = [...REGIONS].sort((a, b) => b.sortKey - a.sortKey);

  return (
    <div className="uk-map">
      {/* Region chips — clickable list of all 12 regions */}
      <div className="uk-map__chips">
        {sortedAll.map(r => (
          <button
            key={r.id}
            type="button"
            className={`uk-map__chip ${active === r.id ? 'is-active' : ''} ${pinned === r.id ? 'is-pinned' : ''}`}
            onMouseEnter={() => setHover(r.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setPinned(p => p === r.id ? null : r.id)}
            aria-label={`${r.name} ${r.num}`}
          >
            <span className="uk-map__chip-trend">
              {r.trend === 'up' ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
            </span>
            <span className="uk-map__chip-name">{r.name}</span>
            <span className="uk-map__chip-num">{r.num}</span>
          </button>
        ))}
      </div>

      {/* Map + detail panel side-by-side */}
      <div className="uk-map__layout">
        <div className="uk-map__svg-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 480"
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

            <rect x="0" y="0" width="700" height="480" fill="url(#uk-sea-grad)" />
            <path className="uk-map__country" d={GB_PATH} fill="url(#uk-land-grad)" />
            <path className="uk-map__country" d={NI_PATH} fill="url(#uk-land-grad)" />

            {/* Region pins */}
            {REGIONS.map(r => {
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
                  <circle cx={r.cx} cy={r.cy} r="16" className="uk-map__halo" />
                  <circle cx={r.cx} cy={r.cy} r="7"  className="uk-map__dot" />
                </g>
              );
            })}
          </svg>
        </div>

        <aside className={`uk-map__panel ${region ? 'is-visible' : ''}`} aria-live="polite">
          {region ? (
            <>
              <p className="uk-map__panel-eyebrow">{pinned ? 'Pinned region' : 'Hovering'}</p>
              <h3 className="uk-map__panel-name">{region.name}</h3>
              <p className="uk-map__panel-num">{region.num}</p>
              <p className="uk-map__panel-sub">
                households in temporary accommodation &middot;{' '}
                <span className={`uk-map__panel-trend uk-map__panel-trend--${region.trend}`}>
                  {region.trend === 'up' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  &nbsp;{region.trend === 'up' ? 'rising' : 'falling'}
                </span>
              </p>
              <p className="uk-map__panel-detail">{region.detail}</p>
              <a className="uk-map__panel-src" href={region.url} target="_blank" rel="noreferrer">
                {region.source} <ArrowUpRight size={14} />
              </a>
              {pinned && (
                <button className="uk-map__panel-clear" onClick={() => setPinned(null)} type="button">
                  Clear selection
                </button>
              )}
            </>
          ) : (
            <>
              <p className="uk-map__panel-eyebrow">UK total</p>
              <p className="uk-map__panel-num">~122,000</p>
              <p className="uk-map__panel-sub">households living in temporary accommodation</p>
              <p className="uk-map__panel-detail">
                Hover or click any region in the chips above &mdash; or any dot on
                the map &mdash; to see the local-authority detail. Trend arrows
                show year-on-year direction.
              </p>
            </>
          )}
        </aside>
      </div>

      <p className="uk-map__caption muted">
        Sources:{' '}
        <a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" target="_blank" rel="noreferrer">gov.uk</a>,{' '}
        <a href="https://www.gov.scot/publications/homelessness-in-scotland-2023-24/" target="_blank" rel="noreferrer">Scottish Government</a>,{' '}
        <a href="https://www.gov.wales/homelessness-statistics" target="_blank" rel="noreferrer">StatsWales</a>,{' '}
        <a href="https://www.communities-ni.gov.uk/topics/homelessness" target="_blank" rel="noreferrer">NI DfC</a>.
      </p>
    </div>
  );
}
