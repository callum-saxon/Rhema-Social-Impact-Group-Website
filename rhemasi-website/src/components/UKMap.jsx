import { useState } from 'react';

const REGIONS = [
  { id: 'scotland',   name: 'Scotland',           num: '15,860', trend: 'up',   dx: 175, dy: 90,  lx: 22,  ly: 70,  side: 'left'  },
  { id: 'ni',         name: 'Northern Ireland',   num: '3,500',  trend: 'up',   dx: 95,  dy: 175, lx: 22,  ly: 165, side: 'left'  },
  { id: 'north-east', name: 'North East',         num: '1,970',  trend: 'up',   dx: 215, dy: 165, lx: 305, ly: 130, side: 'right' },
  { id: 'north-west', name: 'North West',         num: '6,780',  trend: 'down', dx: 175, dy: 195, lx: 22,  ly: 220, side: 'left'  },
  { id: 'yorkshire',  name: 'Yorkshire & Humber', num: '4,810',  trend: 'up',   dx: 220, dy: 215, lx: 305, ly: 195, side: 'right' },
  { id: 'wales',      name: 'Wales',              num: '11,140', trend: 'down', dx: 155, dy: 285, lx: 22,  ly: 280, side: 'left'  },
  { id: 'west-mids',  name: 'West Midlands',      num: '7,640',  trend: 'down', dx: 195, dy: 270, lx: 22,  ly: 335, side: 'left'  },
  { id: 'east-mids',  name: 'East Midlands',      num: '2,450',  trend: 'up',   dx: 230, dy: 270, lx: 305, ly: 260, side: 'right' },
  { id: 'east',       name: 'East of England',    num: '6,420',  trend: 'up',   dx: 265, dy: 290, lx: 305, ly: 320, side: 'right' },
  { id: 'london',     name: 'London',             num: '63,580', trend: 'up',   dx: 250, dy: 320, lx: 305, ly: 380, side: 'right' },
  { id: 'south-east', name: 'South East',         num: '11,420', trend: 'up',   dx: 245, dy: 350, lx: 305, ly: 425, side: 'right' },
  { id: 'south-west', name: 'South West',         num: '5,180',  trend: 'down', dx: 175, dy: 365, lx: 22,  ly: 410, side: 'left'  },
];

export default function UKMap() {
  const [active, setActive] = useState(null);

  return (
    <div className="uk-map">
      <div className="uk-map__heading">
        <p className="eyebrow" style={{ marginBottom: 8 }}>UK total &middot; ~122,000</p>
        <p className="uk-map__sub">households living in temporary accommodation across the UK</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 470"
        role="img"
        aria-label="UK regional homelessness map"
        className="uk-map__svg"
      >
        <path
          className="uk-map__country"
          d="M 165 30 C 145 35, 130 50, 130 75 C 125 90, 145 95, 155 105 L 145 115 C 135 120, 130 135, 140 145 L 165 140 L 195 145 C 215 140, 225 120, 215 100 L 220 80 C 220 60, 200 35, 175 30 Z"
        />
        <path
          className="uk-map__country"
          d="M 80 165 C 70 168, 65 180, 75 188 C 80 195, 95 195, 105 185 C 115 175, 110 165, 95 162 Z"
        />
        <path
          className="uk-map__country"
          d="M 175 145 C 160 150, 150 160, 150 175 C 152 185, 168 192, 180 188 L 195 195 C 215 190, 230 200, 235 215 L 248 230 L 240 250 L 220 255 C 200 250, 180 255, 175 270 L 145 280 C 130 285, 130 300, 145 305 L 165 305 C 175 320, 175 340, 165 360 C 160 380, 175 395, 195 395 C 215 400, 235 395, 245 380 L 265 380 L 275 360 L 270 335 L 290 320 L 295 295 L 280 275 L 270 250 L 260 225 L 240 210 L 215 190 L 200 170 Z"
        />

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
            <circle cx={r.dx} cy={r.dy} r="11" className="uk-map__halo" />
            <circle cx={r.dx} cy={r.dy} r="5" className="uk-map__dot" />
          </g>
        ))}

        {REGIONS.map(r => {
          const isLeft = r.side === 'left';
          const elbow = isLeft ? r.dx - 30 : r.dx + 30;
          const linePts = `${r.dx},${r.dy} ${elbow},${r.dy} ${isLeft ? r.lx + 92 : r.lx},${r.ly - 6}`;
          const arrowX = isLeft ? r.lx + 60 : r.lx - 70;
          const arrowD = r.trend === 'up' ? 'M 0 6 L 4 0 L 8 6 Z' : 'M 0 0 L 4 6 L 8 0 Z';
          return (
            <g
              key={`l-${r.id}`}
              className={`uk-map__leader ${active === r.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
            >
              <polyline points={linePts} className="uk-map__leader-line" />
              <text x={r.lx} y={r.ly - 12} className="uk-map__label-name" textAnchor="start">{r.name}</text>
              <text x={r.lx} y={r.ly + 8} className="uk-map__label-num" textAnchor="start">{r.num}</text>
              <g transform={`translate(${arrowX}, ${r.ly + 1})`} className={`uk-map__trend uk-map__trend--${r.trend}`}>
                <path d={arrowD} />
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
