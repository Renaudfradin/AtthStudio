'use client';

import { useState, useEffect } from 'react';
import ScrollSection from './components/scrollSection';
import LoadingPage from './components/loadingPage/loadingPage';
import localFont from 'next/font/local';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function Home() {
  // const [loadingComplete, setLoadingComplete] = useState<boolean | null>(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const hasLoaded = !!window.localStorage.getItem('hasLoaded');
  //     setLoadingComplete(hasLoaded);
  //   }
  // }, []);

  // const handleLoadingComplete = () => {
  //   setLoadingComplete(true);
  //   if (typeof window !== 'undefined') {
  //     window.localStorage.setItem('hasLoaded', 'true');
  //   }
  // };

  // if (loadingComplete === null) {
  //   return null;
  // }

  // return (
  //   <>
  //     {!loadingComplete && <LoadingPage onComplete={handleLoadingComplete} />}
  //     {loadingComplete && (
  //       <div className="hero">
  //         <ScrollSection />
  //       </div>
  //     )}
  //   </>
  // );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="loading-dots mb-4">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className={`${monumentExtended.className}`}>Loading...</h1>
        <p className={`${monumentExtended.className}`}>Version 2 arrive bientôt</p>
      </div>
    </div>
  );
}
