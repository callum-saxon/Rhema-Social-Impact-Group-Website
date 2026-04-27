import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restore scroll position to the top whenever the route path changes.
 * Without this, react-router preserves scroll across navigations, which
 * makes the new page open mid-scroll.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
