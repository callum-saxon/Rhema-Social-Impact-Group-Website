/**
 * Rhema Social Impact — logo components.
 *
 * <LogoFigures />  The figurative mark on its own — three navy figures.
 *                  Used as the icon next to the wordmark in the header.
 *
 * <LogoMark />     Compact square version used at very small sizes (favicon-style).
 *
 * <LogoFull />     The complete brand mark (figures + "Rhema" wordmark +
 *                  "social impact group" tagline with the peach dot above the
 *                  "i" in "impact"). Use in hero / brand panels.
 *
 * Colours come from the CSS custom properties --primary (navy) and --gold
 * (peach). Hex fallbacks are provided for SVGs that may render outside a
 * CSS context (e.g. a downloaded standalone file).
 */

const NAVY = '#163864';
const PEACH = '#E8A87C';

/**
 * Figurative mark — three rounded human figures. Used in the header
 * alongside the HTML-rendered wordmark.
 */
export function LogoFigures({ size = 56 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 110"
      width={(size * 130) / 110}
      height={size}
      role="img"
      aria-label="Rhema Social Impact"
      style={{ overflow: 'visible' }}
    >
      <g fill={`var(--primary, ${NAVY})`}>
        {/* central figure — tallest of the three */}
        <ellipse cx="65" cy="22" rx="13" ry="14" />
        <path d="
          M 65 38
          C 50 38, 42 52, 41 70
          C 40 84, 43 96, 47 105
          C 48 107, 50 108, 52 108
          L 78 108
          C 80 108, 82 107, 83 105
          C 87 96, 90 84, 89 70
          C 88 52, 80 38, 65 38
          Z
        " />

        {/* left figure — slightly shorter, head set lower */}
        <ellipse cx="22" cy="40" rx="10" ry="11" />
        <path d="
          M 22 53
          C 11 53, 5 65, 4 79
          C 3 90, 5 100, 9 107
          C 10 108, 11 108, 12 108
          L 32 108
          C 33 108, 34 108, 35 107
          C 39 100, 41 90, 40 79
          C 39 65, 33 53, 22 53
          Z
        " />

        {/* right figure — mirror of left */}
        <ellipse cx="108" cy="40" rx="10" ry="11" />
        <path d="
          M 108 53
          C 97 53, 91 65, 90 79
          C 89 90, 91 100, 95 107
          C 96 108, 97 108, 98 108
          L 118 108
          C 119 108, 120 108, 121 107
          C 125 100, 127 90, 126 79
          C 125 65, 119 53, 108 53
          Z
        " />
      </g>
    </svg>
  );
}

/**
 * Square compact mark — used for favicon, social og images and any
 * very compact context where a single recognisable icon is needed.
 */
export function LogoMark({ size = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="Rhema"
    >
      <rect x="0" y="0" width="64" height="64" rx="14" fill={`var(--primary, ${NAVY})`} />
      <g fill="#FFFFFF">
        {/* figures, scaled and centred inside the tile */}
        <ellipse cx="32" cy="22" rx="7" ry="7.5" />
        <path d="
          M 32 30
          C 23 30, 19 39, 18.5 49
          C 18.2 55, 19.5 60, 21 62
          L 43 62
          C 44.5 60, 45.8 55, 45.5 49
          C 45 39, 41 30, 32 30
          Z
        " opacity="0.95" />
      </g>
      {/* peach accent dot (top right) */}
      <circle cx="55" cy="9" r="5" fill={`var(--gold, ${PEACH})`} />
    </svg>
  );
}

/**
 * Full brand lockup — figures + "Rhema" wordmark + "social impact group"
 * tagline. The dot of the "i" in "impact" is rendered in the peach accent.
 *
 * The wordmark is HTML text (rather than SVG <text>) so it picks up the
 * site's loaded webfont reliably. The dotless "ı" (U+0131) is used so the
 * peach dot we draw on top isn't doubled with a glyph dot.
 */
export function LogoFull({ size = 56, mono = false }) {
  const colour = mono ? 'currentColor' : `var(--primary, ${NAVY})`;
  const accent = mono ? 'currentColor' : `var(--gold, ${PEACH})`;

  return (
    <span className="rh-logo-full" style={{ '--logo-h': `${size}px` }}>
      <LogoFigures size={size} />
      <span className="rh-logo-full__text" style={{ color: colour }}>
        <span className="rh-logo-full__brand">Rhema</span>
        <span className="rh-logo-full__tag">
          social{' '}
          <span className="rh-logo-full__i">
            ı
            <span className="rh-logo-full__dot" style={{ background: accent }} aria-hidden="true" />
          </span>
          mpact group
        </span>
      </span>
    </span>
  );
}
