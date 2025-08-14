import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext';

export function useRoutePulseLoader(durationMs = 600) {
  const { setShow } = useLoader();
  const location = useLocation();
  const first = useRef(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return; // skip initial render
    }

    setShow(true);
    timer.current = window.setTimeout(() => setShow(false), durationMs);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [location.pathname, location.search, location.hash, durationMs, setShow]);
}
