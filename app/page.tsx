'use client';

import { useState, useEffect } from 'react';
import ScrollSection from './components/scrollSection';
import LoadingPage from './components/loadingPage/loadingPage';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasLoaded = localStorage.getItem('hasLoaded');

    if (hasLoaded) {
      setLoadingComplete(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

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
