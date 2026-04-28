import { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

/**
 * Stylised UK regional homelessness map.
 *
 * Inspired by the leader-line label style — every region is annotated
 * with its temp-accommodation figure and a trend arrow. Hovering or
 * focusing a region highlights its dot and label.
 *
 * Figures: gov.uk live homelessness tables (England), StatsWales,
 * Scottish Government, NI Department for Communities. Regional shares
 * approximated to round figures consistent with the most recent national
 * totals at the time of authoring.
 */

const REGIONS = [
  // {id, name, num, trend ('up'|'down'), dot {x,y}, label {x,y, anchor}}
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   dot: { x: 175, y: 90  }, label: { x: 22,  y: 70,  anchor: 'start' } },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   dot: { x: 95,  y: 175 }, label: { x: 22,  y: 165, anchor: 'start' } },
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   dot: { x: 215, y: 165 }, label: { x: 305, y: 130, anchor: 'start' } },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', dot: { x: 175, y: 195 }, label: { x: 22,  y: 220, anchor: 'start' } },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   dot: { x: 220, y: 215 }, label: { x: 305, y: 195, anchor: 'start' } },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', dot: { x: 155, y: 285 }, label: { x: 22,  y: 280, anchor: 'start' } },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', dot: { x: 195, y: 270 }, label: { x: 22,  y: 335, anchor: 'start' } },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   dot: { x: 230, y: 270 }, label: { x: 305, y: 260, anchor: 'start' } },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   dot: { x: 265, y: 290 }, label: { x: 305, y: 320, anchor: 'start' } },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   dot: { x: 250, y: 320 }, label: { x: 305, y: 380, anchor: 'start' } },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   dot: { x: 245, y: 350 }, label: { x: 305, y: 425, anchor: 'start' } },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', dot: { x: 175, y: 365 }, label: { x: 22,  y: 410, anchor: 'start' } },
];

export default function UKMap() {
  const [active, setActive] = useState(null);

  return (
    <div className="uk-map">
      <div className="uk-map__heading">
        <p className="eyebrow" style={{ marginBottom: 8 }}>UK total &middot; ~122,000</p>
        <p className="uk-map__sub">
          households living in temporary accommodation across the UK
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 470"
        role="img"
        aria-label="UK regional homelessness map"
        className="uk-map__svg"
      >
        {/* Scotland (top, larger landmass) */}
        <path
          className={`uk-map__country ${active === 'scotland' ? 'is-active' : ''}`}
          data-id="scotland"
          d="
            M 165 30
            C 145 35, 130 50, 130 75
            C 125 90, 145 95, 155 105
            L 145 115
            C 135 120, 130 135, 140 145
            L 165 140
            L 195 145
            C 215 140, 225 120, 215 100
            L 220 80
            C 220 60, 200 35, 175 30
            Z
          "
        />
        {/* Northern Ireland (separate small island, west) */}
        <path
          className={`uk-map__country ${active === 'ni' ? 'is-active' : ''}`}
          data-id="ni"
          d="
            M 80 165
            C 70 168, 65 180, 75 188
            C 80 195, 95 195, 105 185
            C 115 175, 110 165, 95 162
            Z
          "
        />
        {/* England + Wales main body */}
        <path
          className={`uk-map__country ${active && (active === 'wales' || active === 'london' || active.includes('east') || active.includes('west') || active === 'yorkshire' || active === 'north-east' || active === 'north-west' || active === 'south-east' || active === 'south-west' || active === 'east-mids' || active === 'east') ? 'is-active' : ''}`}
          d="
            M 175 145
            C 160 150, 150 160, 150 175
            C 152 185, 168 192, 180 188
            L 195 195
            C 215 190, 230 200, 235 215
            L 248 230
            L 240 250
            L 220 255
            C 200 250, 180 255, 175 270
            L 145 280
            C 130 285, 130 300, 145 305
            L 165 305
            C 175 320, 175 340, 165 360
            C 160 380, 175 395, 195 395
            C 215 400, 235 395, 245 380
            L 265 380
            L 275 360
            L 270 335
            L 290 320
            L 295 295
            L 280 275
            L 270 250
            L 260 225
            L 240 210
            L 215 190
            L 200 170
            Z
          "
        />

        {/* Region dots */}
        {REGIONS.map(r => (
          <g
            key={r.id}
            className={`uk-map__pin ${active === r.id ? 'is-active' : ''}`}
            onMouseEnter={() => setActive(r.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(r.id)}
            onBlur={() => setActive(null)}
            tabIndex={0}
            role="button"
            aria-label={`${r.name}: ${r.num} households`}
          >
            <circle cx={r.dot.x} cy={r.dot.y} r="11" className="uk-map__halo" />
            <circle cx={r.dot.x} cy={r.dot.y} r="5"  className="uk-map__dot" />
          </g>
        ))}

        {/* Leader lines + labels */}
        {REGIONS.map(r => {
          // bend line: from dot horizontally then to label
          const isLeft = r.label.x < r.dot.x;
          const elbow = isLeft ? r.dot.x - 30 : r.dot.x + 30;
          return (
            <g
              key={`l-${r.id}`}
              className={`uk-map__leader ${active === r.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
            >
              <polyline
                points={`${r.dot.x},${r.dot.y} ${elbow},${r.dot.y} ${isLeft ? r.label.x + 92 : r.label.x},${r.label.y - 6}`}
                className="uk-map__leader-line"
              />
              <text
                x={r.label.x}
                y={r.label.y - 12}
                className="uk-map__label-name"
                textAnchor={r.label.anchor}
              >
                {r.name}
              </text>
              <text
                x={r.label.x}
                y={r.label.y + 8}
                className="uk-map__label-num"
                textAnchor={r.label.anchor}
              >
                {r.num}
              </text>
              {/* Trend arrow rendered as a small chevron inline with the number */}
              <g
                transform={`translate(${r.label.anchor === 'start' ? r.label.x + 60 : r.label.x - 70}, ${r.label.y + 1})`}
                className={`uk-map__trend uk-map__trend--${r.trend}`}
              >
                {r.trend === 'up' ? (
                  <path d="M 0 6 L 4 0 L 8 6 Z" />
                ) : (
                  <path d="M 0 0 L 4 6 L 8 0 Z" />
                )}
              </g>
            </g>
          );
        })}
      </svg>

      <p className="uk-map__caption muted">
        Households in temporary accommodation by UK region. Sources:{' '}
        <a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-homelessness" target="_blank" rel="noreferrer">gov.uk</a>,{' '}
        <a href="https://www.gov.scot/publications/homelessness-in-scotland-2023-24/" target="_blank" rel="noreferrer">Scottish Government</a>,{' '}
        <a href="https://www.gov.wales/homelessness-statistics" target="_blank" rel="noreferrer">StatsWales</a>,{' '}
        <a href="https://www.communities-ni.gov.uk/topics/homelessness" target="_blank" rel="noreferrer">NI DfC</a>.
      </p>
    </div>
  );
}
