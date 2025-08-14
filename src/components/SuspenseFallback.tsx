import { useEffect } from 'react';
import { useLoader } from '../context/LoaderContext';

export default function SuspenseFallback() {
  const { setShow } = useLoader();

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [setShow]);

  // The actual overlay is rendered by <AppLoader /> globally.
  return null;
}
