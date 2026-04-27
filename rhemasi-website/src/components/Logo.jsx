/**
 * Rhema Social Impact — logo components.
 *
 * <LogoMark />     The compact square mark — used in headers and footers.
 *                  Forest green tile, white "R", gold dot accent.
 *
 * <LogoFigures />  The full graphic mark — three stylised figures with the
 *                  shared gold tie-in dot. Used inline in hero / brand panels.
 *                  Matches the supplied Rhema brandmark.
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
      {/* tile */}
      <rect x="0" y="0" width="56" height="56" rx="10" fill="var(--primary, #1D4E3F)" />
      {/* R */}
      <text
        x="28"
        y="40"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="34"
        fontWeight="600"
        fill="var(--on-primary, #EFE8DA)"
      >
        R
      </text>
      {/* gold tie-in dot */}
      <circle cx="55" cy="5" r="6" fill="var(--gold, #C9A84C)" />
      <circle cx="55" cy="5" r="6" fill="none" stroke="var(--surface, #EFE8DA)" strokeWidth="2" />
    </svg>
  );
}

/**
 * The figurative mark — three rounded human figures with shared gold dot.
 * Recreated from the supplied logo file as inline SVG so it scales cleanly,
 * inherits theme colours and avoids an extra HTTP request.
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
      <g fill="var(--primary, #1D4E3F)">
        <circle cx="120" cy="62" r="22" />
        <path d="
          M 120 88
          C 96 88, 84 108, 82 134
          C 81 152, 86 168, 92 178
          L 148 178
          C 154 168, 159 152, 158 134
          C 156 108, 144 88, 120 88
          Z
        " />
      </g>

      {/* left figure */}
      <g fill="var(--primary, #1D4E3F)" opacity="0.92">
        <circle cx="58" cy="86" r="17" />
        <path d="
          M 58 106
          C 40 106, 30 122, 28 144
          C 27 158, 30 170, 35 178
          L 81 178
          C 86 170, 89 158, 88 144
          C 86 122, 76 106, 58 106
          Z
        " />
      </g>

      {/* right figure */}
      <g fill="var(--primary, #1D4E3F)" opacity="0.92">
        <circle cx="182" cy="86" r="17" />
        <path d="
          M 182 106
          C 164 106, 154 122, 152 144
          C 151 158, 154 170, 159 178
          L 205 178
          C 210 170, 213 158, 212 144
          C 210 122, 200 106, 182 106
          Z
        " />
      </g>

      {/* gold tie-in dot */}
      <circle cx="156" cy="40" r="8" fill="var(--gold, #C9A84C)" />
    </svg>
  );
}
