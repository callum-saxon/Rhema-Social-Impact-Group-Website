/**
 * Rhema Social Impact — logo components.
 *
 * <LogoMark />     The compact figure cluster — used in headers and footers.
 *                  Three navy stylised figures with the peach tie-in dot accent.
 *
 * <LogoFigures />  The full graphic mark — three rounded human figures.
 *                  Used inline in hero / brand panels. Larger version of the
 *                  same mark, sized for display.
 *
 * Colours come from the CSS variables --primary (navy) and --gold (peach),
 * which are defined in src/index.css. Hex fallbacks are provided for SVGs
 * that may render outside a CSS context.
 */

const NAVY = '#1A3A6B';
const PEACH = '#E5A57B';

/**
 * Compact figure cluster — used at small sizes (header / footer).
 * Square viewBox so it sits cleanly next to the wordmark text.
 */
export function LogoMark({ size = 44 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      width={size}
      height={size}
      role="img"
      aria-label="Rhema Social Impact"
      style={{ overflow: 'visible' }}
    >
      {/* central figure (largest) */}
      <g fill={`var(--primary, ${NAVY})`}>
        <circle cx="30" cy="18" r="6.5" />
        <path d="
          M 30 26
          C 22 26, 18 33, 17.5 43
          C 17.2 49, 18.5 54, 20 56
          L 40 56
          C 41.5 54, 42.8 49, 42.5 43
          C 42 33, 38 26, 30 26
          Z
        " />
      </g>

      {/* left figure */}
      <g fill={`var(--primary, ${NAVY})`} opacity="0.9">
        <circle cx="11" cy="25" r="5" />
        <path d="
          M 11 32
          C 5 32, 2 38, 1.5 46
          C 1.3 51, 2 55, 3.5 56
          L 18.5 56
          C 19 55, 19.5 51, 19 46
          C 18.5 38, 17 32, 11 32
          Z
        " />
      </g>

      {/* right figure */}
      <g fill={`var(--primary, ${NAVY})`} opacity="0.9">
        <circle cx="49" cy="25" r="5" />
        <path d="
          M 49 32
          C 43 32, 41.5 38, 41 46
          C 40.5 51, 41 55, 41.5 56
          L 56.5 56
          C 58 55, 58.7 51, 58.5 46
          C 58 38, 55 32, 49 32
          Z
        " />
      </g>

      {/* peach tie-in dot accent */}
      <circle cx="48" cy="6" r="4.5" fill={`var(--gold, ${PEACH})`} />
    </svg>
  );
}

/**
 * The figurative mark — three rounded human figures with the shared peach
 * tie-in dot. Recreated as inline SVG so it scales cleanly, inherits theme
 * colours and avoids an extra HTTP request.
 */
export function LogoFigures({ size = 200, ground = 'transparent' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 200"
      width={size}
      height={(size * 200) / 240}
      role="img"
      aria-label="Rhema — three figures, one community"
    >
      <rect x="0" y="0" width="240" height="200" fill={ground} rx="20" />

      {/* central figure (largest) */}
      <g fill={`var(--primary, ${NAVY})`}>
        <circle cx="120" cy="62" r="22" />
        <path d="
          M 120 88
          C 96 88, 84 108, 82 134
          C 81 152, 86 168, 92 1