/**
 * Reusable stat card for the impact / problem sections.
 *
 * Props:
 *   icon      — a lucide-react icon component
 *   number    — the stat figure (e.g. "227,000")
 *   label     — short label / context line
 *   source    — short source name (e.g. "Crisis, 2021")
 *   sourceUrl — link to the source page
 */
export default function StatCard({ icon: Icon, number, label, source, sourceUrl, accent = false }) {
  return (
    <article className={`stat-card ${accent ? 'stat-card--accent' : ''}`}>
      <div className="stat-card__icon">
        {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
      </div>
      <p className="stat-card__num">{number}</p>
      <p className="stat-card__label">{label}</p>
      {source && (
        <p className="stat-card__src">
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noreferrer">{source}</a>
          ) : (
            source
          )}
        </p>
      )}
    </article>
  );
}
