import { useEffect, useRef, useState } from 'react';

/**
 * CountUp — animates a number from 0 to `to` once the element scrolls
 * into view. Honours prefers-reduced-motion.
 *
 * Props:
 *   to        — target number
 *   suffix    — optional string appended after the number (e.g. "k", "%", "+")
 *   prefix    — optional string before the number (e.g. "£", "~")
 *   duration  — animation duration in ms (default 1400)
 *   format    — function(value) -> string for custom formatting
 */
export default function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1400,
  format,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setValue(to);
      setHasAnimated(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const start = performance.now();
            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration);
              // eased
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, hasAnimated]);

  const display = format ? format(value) : value.toLocaleString('en-GB');

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
