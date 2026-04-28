import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

const REGIONS = [
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government, 2024', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', cx: 220, cy: 95  },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI DfC, 2024',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              cx: 95,  cy: 195 },
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.',     source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 240, cy: 175 },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 200, cy: 215 },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                        source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 245, cy: 220 },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales, 2024',          url: 'https://www.gov.wales/homelessness-statistics',                       cx: 190, cy: 295 },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 235, cy: 280 },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',   source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 270, cy: 275 },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 305, cy: 295 },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 295, cy: 325 },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 285, cy: 360 },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 195, cy: 380 },
];

// Simplified-but-recognisable UK silhouette. Coordinates approximate.
const GB_PATH = "M 215 35 C 200 36 188 44 192 60 L 198 82 C 192 92 198 105 207 110 L 213 128 C 207 134 198 134 192 142 L 196 158 C 200 164 207 164 215 165 L 218 180 C 224 192 234 197 244 204 L 258 222 C 264 232 274 240 280 254 L 290 270 C 295 285 293 302 282 312 L 270 322 C 268 334 278 342 290 344 L 295 355 C 285 366 268 372 252 374 L 222 378 C 200 382 178 380 162 372 L 142 366 C 134 366 128 370 128 376 C 130 380 138 382 145 380 L 162 378 C 175 378 188 380 196 372 L 188 360 L 175 352 L 182 343 L 192 336 L 192 322 C 184 312 172 310 162 305 L 148 290 C 144 278 152 266 160 256 L 168 240 C 178 230 188 222 188 208 L 178 192 C 173 180 178 168 184 158 L 178 142 C 172 132 176 120 178 110 L 172 92 C 168 78 172 65 178 55 L 184 40 C 192 34 204 30 215 35 Z";
const NI_PATH = "M 88 184 C 76 186 68 196 70 208 C 73 222 86 230 100 230 C 115 228 124 215 122 203 C 120 192 110 182 95 182 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const region = REGIONS.find(r => r.id === active);

  return (
    <div className="uk-map">
      <div className="uk-map__layout">
        {/* LEFT — info panel */}
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
                  {region.trend === 'up' ? 'rising' : 'falling'}
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
                Hover any dot on the map for a quick read. Click a dot to pin a
                region and see the local-authority detail. Trend arrows show
                year-on-year direction.
              </p>
            </>
          )}

          <ul className="uk-map__quicklist">
            {REGIONS.slice().sort((a, b) => parseInt(b.num.replace(/[^0-9]/g, ''), 10) - parseInt(a.num.replace(/[^0-9]/g, ''), 10)).slice(0, 5).map(r => (
              <li key={r.id}>
                <button
                  type="button"
                  className={`uk-map__quickitem ${active === r.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setPinned(p => p === r.id ? null : r.id)}
                >
                  <span className="uk-map__quick-name">{r.name}</span>
                  <span className="uk-map__quick-num">{r.num}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT — map */}
        <div className="uk-map__svg-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 460"
            role="img"
            aria-label="UK regional homelessness map"
            className="uk-map__svg"
          >
            <defs>
              <radialGradient id="uk-sea-grad" cx="50%" cy="50%" r="60%">
                <stop offset="0%"  stopColor="#F1F4FA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="uk-land-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#E2EAF6" />
                <stop offset="100%" stopColor="#F1F4FA" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="380" height="460" fill="url(#uk-sea-grad)" />
            <path className="uk-map__country" d={GB_PATH} />
            <path className="uk-map__country" d={NI_PATH} />

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
                  aria-label={`${r.name}: ${r.num} households. Click to pin.`}
                >
                  <circle cx={r.cx} cy={r.cy} r="14" className="uk-map__halo" />
                  <circle cx={r.cx} cy={r.cy} r="7"  className="uk-map__dot" />
                </g>
              );
            })}
          </svg>
          <p className="uk-map__caption muted">
            Sources:{' '}
            <a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" target="_blank" rel="noreferrer">gov.uk</a>,{' '}
            <a href="https://www.gov.scot/publications/homelessness-in-scotland-2023-24/" target="_blank" rel="noreferrer">Scottish Government</a>,{' '}
            <a href="https://www.gov.wales/homelessness-statistics" target="_blank" rel="noreferrer">StatsWales</a>,{' '}
            <a href="https://www.communities-ni.gov.uk/topics/homelessness" target="_blank" rel="noreferrer">NI DfC</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
