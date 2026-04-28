import { useState } from 'react';

const NAVY = '#163864';
const PEACH = '#E8A87C';

/**
 * BadgeSVG — circular brandmark used as the fallback when no logo image
 * file is available. Modeled on the Rhema crest: peach ring, navy fill,
 * three white figures with a peach botanical accent above.
 */
function BadgeSVG({ size = 72 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Rhema Social Impact"
    >
      <defs>
        <radialGradient id="rh-glow" cx="50%" cy="38%" r="60%">
          <stop offset="0%"  stopColor="#21528E" />
          <stop offset="100%" stopColor={NAVY} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill={PEACH} />
      <circle cx="100" cy="100" r="80" fill="url(#rh-glow)" />
      <g transform="translate(100, 60)" fill={PEACH}>
        <ellipse cx="-10" cy="-6" rx="9"  ry="5" transform="rotate(-25 -10 -6)" />
        <ellipse cx="10"  cy="-6" rx="9"  ry="5" transform="rotate(25 10 -6)" />
        <ellipse cx="0"   cy="-12" rx="6" ry="9" />
      </g>
      <g fill="#FFFFFF">
        <ellipse cx="100" cy="100" rx="13" ry="14" />
        <path d="M 100 116 C 84 116, 76 130, 75 148 C 74 158, 76 166, 78 168 L 122 168 C 124 166, 126 158, 125 148 C 124 130, 116 116, 100 116 Z" />
        <ellipse cx="68" cy="118" rx="9" ry="10" opacity="0.92" />
        <path d="M 68 130 C 56 130, 51 142, 50 156 C 49 164, 51 168, 52 168 L 84 168 C 85 168, 87 164, 86 156 C 85 142, 80 130, 68 130 Z" opacity="0.92" />
        <ellipse cx="132" cy="118" rx="9" ry="10" opacity="0.92" />
        <path d="M 132 130 C 120 130, 115 142, 114 156 C 113 164, 115 168, 116 168 L 148 168 C 149 168, 151 164, 150 156 C 149 142, 144 130, 132 130 Z" opacity="0.92" />
      </g>
    </svg>
  );
}

/**
 * LogoBadge — the badge alone. If /logo.png is present in /public it's used
 * (pixel-perfect to the brand asset); otherwise the SVG fallback renders.
 */
export function LogoBadge({ size = 72, src = '/logo.png' }) {
  const [imgOk, setImgOk] = useState(true);
  if (imgOk) {
    return (
      <img
        src={src}
        alt="Rhema Social Impact"
        width={size}
        height={size}
        className="rh-logo-badge-img"
        onError={() => setImgOk(false)}
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
    );
  }
  return <BadgeSVG size={size} />;
}

export function LogoMark({ size = 48 }) {
  return <LogoBadge size={size} />;
}

/**
 * LogoFigures — kept for backwards compatibility with About.jsx where it
 * was used as a large hero graphic. Renders the badge.
 */
export function LogoFigures({ size = 200 }) {
  return <LogoBadge size={size} />;
}

/**
 * LogoFull — header / footer lockup: badge to the left, "Rhema" wordmark
 * with "social impact group" tagline (peach dot above the "i" in "impact")
 * to the right.
 */
export function LogoFull({ size = 56, mono = false }) {
  const colour = mono ? 'currentColor' : `var(--primary, ${NAVY})`;
  const accent = mono ? 'currentColor' : `var(--gold, ${PEACH})`;

  return (
    <span className="rh-logo-full" style={{ '--logo-h': `${size}px` }}>
      <span className="rh-logo-full__mark">
        <LogoBadge size={size} />
      </span>
      <span className="rh-logo-full__text" style={{ color: colour }}>
        <span className="rh-logo-full__brand">Rhema</span>
        <span className="rh-logo-full__tag">
          social{' '}
          <span className="rh-logo-full__i">
            {'ı'}
            <span className="rh-logo-full__dot" style={{ background: accent }} aria-hidden="true" />
          </span>
          mpact group
        </span>
      </span>
    </span>
  );
}
