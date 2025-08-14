import React from 'react';
import Loader from './Loader';
import { useLoader } from '../context/LoaderContext';

export default function AppLoader() {
  const { show } = useLoader();
  return <Loader show={show} />;
}
