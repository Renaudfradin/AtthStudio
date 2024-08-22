"use client"

import { useState, useEffect } from 'react';
import ScrollSection from './components/scrollSection';
import LoadingPage from './components/loadingPage/loadingPage';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true); // Marquer le chargement comme complet après 21 secondes
    }, 21000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete && <LoadingPage />}
      {loadingComplete && (
        <div className="hero">
          <ScrollSection />
        </div>
      )}
    </>
  );
}
