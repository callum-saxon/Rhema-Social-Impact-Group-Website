/**
 * Rhema Social Impact — logo components.
 *
 * <LogoFigures />  Three rounded navy figures — the figurative mark on its own.
 *
 * <LogoMark />     Square favicon-style tile (figures inverted on navy).
 *
 * <LogoFull />     Complete brand lockup — figures + "Rhema" wordmark +
 *                  "social impact group" tagline with the peach dot above
 *                  the "i" in "impact". Use anywhere the full logo is wanted.
 */

const NAVY = '#163864';
const PEACH = '#E8A87C';

/**
 * Three navy figures grouped together. Used standalone or inside <LogoFull>.
 * The viewBox is sized so the figures sit on a baseline and the tallest
 * figure spans the full height — making vertical alignment with text easy.
 */
export function LogoFigures({ size = 64 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 100"
      width={(size * 140) / 100}
      height={size}
      role="img"
      aria-label="Rhema Social Impact"
      style={{ overflow: 'visible' }}
    >
      <g fill={`var(--primary, ${NAVY})`}>
        {/* central figure — tallest of the three */}
        <ellipse cx="70" cy="20" rx="13" ry="14" />
        <path d="
          M 70 36
          C 55 36, 47 50, 46 68
          C 45 82, 48 94, 52 100
          L 88 100
          C 92 94, 95 82, 94 68
          C 93 50, 85 36, 70 36
          Z
        " />

        {/* left figure */}
        <ellipse cx="22" cy="38" rx="10" ry="11" />
        <path d="
          M 22 51
          C 11 51, 5 63, 4 77
          C 3 88, 5 96, 9 100
          L 35 100
          C 39 96, 41 88, 40 77
          C 39 63, 33 51, 22 51
          Z
        " />

        {/* right figure */}
        <ellipse cx="118" cy="38" rx="10" ry="11" />
        <path d="
          M 118 51
          C 107 51, 101 63, 100 77
          C 99 88, 101 96, 105 100
          L 131 100
          C 135 96, 137 88, 136 77
          C 135 63, 129 51, 118 51
          Z
        " />
      </g>
    </svg>
  );
}

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
        <ellipse cx="32" cy="22" rx="7" ry="7.5" />
        <path d="
          M 32 30
          C 23 30, 19 39, 18.5 49
          C 18.2 55, 19.5 60, 21 62
          L 43 62
          C 44.5 60, 45.8 55, 45.5 49
          C 45 39, 41 30, 32 30
          Z
        " />
      </g>
      <circle cx="55" cy="9" r="5" fill={`var(--gold, ${PEACH})`} />
    </svg>
  );
}

/**
 * Full brand lockup — figures + wordmark + tagline.
 * The dot above the "i" in "impact" is rendered in peach. The natural
 * glyph dot is suppressed by using "ı" (dotless i, U+0131) and drawing a
 * peach circle on top.
 */
export function LogoFull({ size = 56, mono = false }) {
  const colour = mono ? 'currentColor' : `var(--primary, ${NAVY})`;
  const a