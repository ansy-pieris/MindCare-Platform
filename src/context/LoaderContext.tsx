import React, { createContext, useContext, useMemo, useState } from 'react';

type LoaderCtx = {
  show: boolean;
  setShow: (v: boolean) => void;
};

const Ctx = createContext<LoaderCtx | null>(null);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const value = useMemo(() => ({ show, setShow }), [show]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLoader must be used within LoaderProvider');
  return ctx;
}
