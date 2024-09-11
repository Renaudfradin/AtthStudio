'use client';

import { useState, useEffect } from 'react';
import ScrollSection from './components/scrollSection';
import LoadingPage from './components/loadingPage/loadingPage';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasLoaded = !!window.localStorage.getItem('hasLoaded');
      setLoadingComplete(hasLoaded);

    }
  }, []);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('hasLoaded', 'true');
    }
  };

  if (loadingComplete === null) {
    return null;
  }

  return (
    <>
      {!loadingComplete && <LoadingPage onComplete={handleLoadingComplete} />}
      {loadingComplete && (
        <div className="hero">
          <ScrollSection />
        </div>
      )}
    </>
  );
}
