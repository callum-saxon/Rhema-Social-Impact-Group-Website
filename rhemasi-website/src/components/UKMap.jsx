import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const REGIONS = [
  { id: 'scotland',   name: 'Scotland',           num: 15860,  pretty: '15,860', trend: 'up',   detail: 'Scottish Government data shows homelessness applications up year-on-year, with concentrated pressure in Glasgow, Edinburgh and Dundee.', source: 'Scottish Government, 2024',  url: 'https://www.gov.scot/publications/homelessness-in-scotland-2023-24/',                              dx: 175, dy: 75,  lx: 18,  ly: 60  },
  { id: 'ni',         name: 'Northern Ireland',   num: 3500,   pretty: '3,500',  trend: 'up',   detail: 'NI Housing Executive remains the largest single landlord; presentation rates have risen since 2022.',                                       source: 'NI DfC, 2024',                url: 'https://www.communities-ni.gov.uk/topics/homelessness',                                              dx: 95,  dy: 175, lx: 18,  ly: 160 },
  { id: 'north-east', name: 'North East',         num: 1970,   pretty: '1,970',  trend: 'up',   detail: 'The lowest count in England, but rising. Newcastle and Middlesbrough carry the bulk of the demand.',                                       source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 215, dy: 165, lx: 305, ly: 130 },
  { id: 'north-west', name: 'North West',         num: 6780,   pretty: '6,780',  trend: 'down', detail: 'Manchester, Liverpool and Salford lead the regional caseload. Slight reduction year-on-year.',                                              source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 175, dy: 200, lx: 18,  ly: 215 },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: 4810,   pretty: '4,810',  trend: 'up',   detail: 'Leeds and Sheffield account for over half the caseload. Hull continues to see acute pressure.',                                            source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 220, dy: 215, lx: 305, ly: 195 },
  { id: 'wales',      name: 'Wales',              num: 11140,  pretty: '11,140', trend: 'down', detail: 'Welsh Government homelessness reform is in flight. Cardiff, Swansea and Newport carry the largest caseload.',                              source: 'StatsWales, 2024',            url: 'https://www.gov.wales/homelessness-statistics',                                                       dx: 145, dy: 285, lx: 18,  ly: 280 },
  { id: 'west-mids',  name: 'West Midlands',      num: 7640,   pretty: '7,640',  trend: 'down', detail: 'Birmingham accounts for the majority of West Midlands placements; Coventry and Wolverhampton next.',                                       source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 195, dy: 270, lx: 18,  ly: 335 },
  { id: 'east-mids',  name: 'East Midlands',      num: 2450,   pretty: '2,450',  trend: 'up',   detail: 'Nottingham, Derby and Leicester lead the regional figures. Rural districts seeing rising rough-sleeping numbers.',                         source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 230, dy: 270, lx: 305, ly: 260 },
  { id: 'east',       name: 'East of England',    num: 6420,   pretty: '6,420',  trend: 'up',   detail: 'Pressure concentrated in Luton, Peterborough and the M11 corridor. Norfolk and Suffolk see seasonal spikes.',                              source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 265, dy: 290, lx: 305, ly: 320 },
  { id: 'london',     name: 'London',             num: 63580,  pretty: '63,580', trend: 'up',   detail: 'London accounts for the majority of all temporary-accommodation households in England, with families often placed outside their borough.', source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 250, dy: 320, lx: 305, ly: 380 },
  { id: 'south-east', name: 'South East',         num: 11420,  pretty: '11,420', trend: 'up',   detail: 'High private rents drive overflow from London. Brighton, Reading, Milton Keynes and the south coast carry the load.',                      source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 245, dy: 350, lx: 305, ly: 425 },
  { id: 'south-west', name: 'South West',         num: 5180,   pretty: '5,180',  trend: 'down', detail: 'Bristol and Plymouth lead the regional figures; rural Cornwall and Devon experience seasonal pressure tied to tourism economy.',           source: 'gov.uk live tables',          url: 'https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness',                    dx: 170, dy: 365, lx: 18,  ly: 410 },
];

// Simplified-but-recognisable UK silhouette paths.
// England/Scotland/Wales share one outer outline; Northern Ireland is a
// separate path. Coordinates roughly match the dot positions above.
const GB_PATH = "M 215 30 C 200 32 188 42 192 56 L 198 78 C 192 88 198 100 207 105 L 213 122 C 207 130 198 130 192 138 L 195 152 C 200 158 207 158 215 160 L 217 175 C 222 184 232 188 240 195 L 252 215 C 258 226 268 235 275 248 L 283 263 C 288 275 287 290 278 300 L 268 312 C 264 322 270 332 280 336 L 280 348 C 272 360 258 365 244 366 L 220 370 C 200 374 180 372 165 365 L 145 358 C 138 358 132 362 130 368 C 130 370 134 374 140 374 L 155 374 C 165 372 175 374 178 366 L 173 358 L 162 350 L 168 342 L 178 336 L 178 322 C 172 314 162 312 154 308 L 142 295 C 138 282 144 268 152 258 L 158 240 C 168 230 178 222 178 208 L 170 192 C 165 180 168 168 173 158 L 168 142 C 162 132 165 120 168 110 L 162 92 C 158 78 162 65 168 55 L 175 40 C 184 32 200 28 215 30 Z";
const NI_PATH = "M 88 168 C 76 170 68 180 70 192 C 73 207 86 215 100 215 C 115 213 124 200 122 188 C 120 176 110 167 95 166 Z";

export default function UKMap() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned || hover;
  const activeRegion = REGIONS.find(r => r.id === active);

  return (
    <div className="uk-map">
      <div className="uk-map__layout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380 460"
          role="img"
          aria-label="UK regional homelessness map"
          className="uk-map__svg"
        >
          {/* Sea-tint background ring */}
          <circle cx="180" cy="230" r="218" className="uk-map__sea" />

          {/* Country shapes */}
          <path className="uk-map__country" d={GB_PATH} />
          <path className="uk-map__country" d={NI_PATH} />

          {/* Subtle internal dotted national borders (Scotland / Wales / England) */}
          <path
            className="uk-map__border"
            d="M 168 142 C 175 142 195 142 215 142"
          />
          <path
            className="uk-map__border"
            d="M 152 258 C 165 268 180 270 195 268"
          />

          {/* Region pins */}
          {REGIONS.map(r => (
            <g
              key={r.id}
              className={`uk-map__pin ${active === r.id ? 'is-active' : ''} ${pinned === r.id ? 'is-pinned' : ''}`}
              onMouseEnter={() => setHover(r.id)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(r.id)}
              onBlur={() => setHover(null)}
              onClick={() => setPinned(p => p === r.id ? null : r.id)}
              tabIndex={0}
              role="button"
              aria-label={`${r.name}: ${r.pretty} households. Click to pin details.`}
            >
              <circle cx={r.dx} cy={r.dy} r="13" className="uk-map__halo" />
              <circle cx={r.dx} cy={r.dy} r="6"  className="uk-map__dot" />
            </g>
          ))}

          {/* Leader-line labels */}
          {REGIONS.map(r => {
            const isLeft = r.lx < r.dx;
            const elbow = isLeft ? r.dx - 28 : r.dx + 28;
            const linePts = `${r.dx},${r.dy} ${elbow},${r.dy} ${isLeft ? r.lx + 80 : r.lx},${r.ly - 4}`;
            const arrowX = isLeft ? r.lx + 56 : r.lx - 18;
            const arrowD = r.trend === 'up' ? 'M 0 6 L 5 0 L 10 6 Z' : 'M 0 0 L 5 6 L 10 0 Z';
            return (
              <g
                key={`l-${r.id}`}
                className={`uk-map__leader ${active === r.id ? 'is-active' : ''}`}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setPinned(p => p === r.id ? null : r.id)}
              >
                <polyline points={linePts} className="uk-map__leader-line" />
                <text x={r.lx} y={r.ly - 12} className="uk-map__label-name" textAnchor="start">{r.name}</text>
                <text x={r.lx} y={r.ly + 8} className="uk-map__label-num" textAnchor="start">{r.pretty}</text>
                <g transform={`translate(${arrowX}, ${r.ly + 2})`} className={`uk-map__trend uk-map__trend--${r.trend}`}>
                  <path d={arrowD} />
                </g>
              </g>
            );
          })}
        </svg>

        <aside className={`uk-map__panel ${activeRegion ? 'is-visible' : ''}`} aria-live="polite">
          {activeRegion ? (
            <>
              <p className="uk-map__panel-eyebrow">{pinned ? 'Pinned region' : 'Hovering'}</p>
              <h3 className="uk-map__panel-name">{activeRegion.name}</h3>
              <p className="uk-map__panel-num">{activeRegion.pretty}</p>
              <p className="uk-map__panel-sub">households in temporary accommodation &middot; trend {activeRegion.trend}</p>
              <p className="uk-map__panel-detail">{activeRegion.detail}</p>
              <a className="uk-map__panel-src" href={activeRegion.url} target="_blank" rel="noreferrer">
                {activeRegion.source} <ArrowUpRight size={14} />
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
                Hover any region for a quick read. Click to pin a region and see the
                local-authority detail. Trend arrows show whether the region&rsquo;s
                figure is rising or falling year-on-year.
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
