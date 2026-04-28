import { useState } from 'react';
import { ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react';

const REGIONS = [
  { id: 'scotland',   name: 'Scotland',           num: '15,860', sortKey: 15860, trend: 'up',   detail: 'Concentrated pressure in Glasgow, Edinburgh and Dundee. Year-on-year increase in homelessness applications.', source: 'Scottish Government, 2024', url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/', cx: 200, cy: 80  },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  sortKey: 3500,  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord. Presentation rates have risen since 2022.',                source: 'NI DfC, 2024',              url: 'https://www.communities-ni.gov.uk/topics/homelessness',              cx: 105, cy: 200 },
  { id: 'north-east', name: 'North East',         num: '1,970',  sortKey: 1970,  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle, Sunderland and Middlesbrough carry the bulk of the demand.',     source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 230, cy: 175 },
  { id: 'north-west', name: 'North West',         num: '6,780',  sortKey: 6780,  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 195, cy: 210 },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  sortKey: 4810,  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                        source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 240, cy: 220 },
  { id: 'wales',      name: 'Wales',              num: '11,140', sortKey: 11140, trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',          source: 'StatsWales, 2024',          url: 'https://www.gov.wales/homelessness-statistics',                       cx: 175, cy: 285 },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  sortKey: 7640,  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                  source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 220, cy: 280 },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  sortKey: 2450,  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',   source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 250, cy: 270 },
  { id: 'east',       name: 'East of England',    num: '6,420',  sortKey: 6420,  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',          source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 285, cy: 290 },
  { id: 'london',     name: 'London',             num: '63,580', sortKey: 63580, trend: 'up',   detail: 'London accounts for over half of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables', url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 280, cy: 330 },
  { id: 'south-east', name: 'South East',         num: '11,420', sortKey: 11420, trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.', source: 'gov.uk live tables',        url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 270, cy: 365 },
  { id: 'south-west', name: 'South West',         num: '5,180',  sortKey: 5180,  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism.',source: 'gov.uk live tables',       url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness', cx: 200, cy: 365 },
];

// More-accurate stylised Great Britain silhouette.
// Captures: rounded north Scotland, east coast down to Yorkshire,
// East Anglia bulge, Kent SE, south coast, Cornwall tip, Bristol channel,
// Wales peninsula, NW England, west Scotland coast back to top.
const GB_PATH = "M 220 30 C 208 32 198 38 200 50 L 205 65 C 200 75 205 85 210 90 L 215 105 C 210 115 218 125 220 138 L 225 150 C 222 158 230 165 238 170 L 244 188 C 248 200 252 210 258 222 L 266 238 C 274 252 280 264 282 280 L 282 294 C 280 304 278 312 282 320 L 290 318 C 295 318 296 326 290 332 L 282 340 C 280 350 290 350 295 348 L 296 356 C 286 364 270 368 252 368 L 232 372 L 215 372 C 200 372 188 370 175 366 L 158 372 C 148 374 138 374 132 370 C 128 366 130 360 138 360 L 154 358 C 168 354 182 348 192 338 L 192 332 C 188 324 178 320 168 318 L 158 322 C 152 322 148 318 152 312 C 156 305 162 300 168 296 L 178 290 C 175 280 172 270 175 260 L 162 256 C 152 254 145 248 144 240 C 142 230 144 218 152 210 L 162 200 C 168 190 176 180 184 175 L 196 168 L 188 158 C 178 152 168 158 158 152 C 152 148 152 142 156 138 C 162 132 170 128 178 130 L 192 132 L 198 122 C 192 110 188 100 192 92 L 198 80 C 196 70 196 60 200 50 C 202 42 210 32 220 30 Z";
// Northern Ireland
const NI_PATH = "M 100 175 C 84 175 75 188 75 200 C 75 215 88 224 105 224 C 122 224 132 215 130 200 C 128 185 116 175 100 175 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const region = REGIONS.find(r => r.id === active);
  const sortedAll = [...REGIONS].sort((a, b) => b.sortKey - a.sortKey);

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
                Hover or click any region in the list below — or any dot on the
                map — to see the local-authority detail. Trend arrows show
                year-on-year direction.
              </p>
            </>
          )}

          <ul className="uk-map__quicklist">
            {sortedAll.map(r => (
              <li key={r.id}>
                <button
                  type="button"
                  className={`uk-map__quickitem ${active === r.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setPinned(p => p === r.id ? null : r.id)}
                >
                  <span className="uk-map__quick-trend">
                    {r.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                  </span>
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
                  <circle cx={r.cx} cy={r.cy} r="6"  className="uk-map__dot" />
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
