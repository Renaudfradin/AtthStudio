'use client';

import { useState, useEffect } from 'react';
import ScrollSection from './components/scrollSection';
import LoadingPage from './components/loadingPage/loadingPage';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState<boolean | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasLoaded = !!window.localStorage.getItem('hasLoaded');
      setLoadingComplete(hasLoaded);

      const images = document.querySelectorAll('img');
      let loadedImagesCount = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedImagesCount += 1;
        } else {
          img.onload = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === images.length) {
              setImagesLoaded(true);
            }
          };
        }
      });

      if (loadedImagesCount === images.length) {
        setImagesLoaded(true);
      }
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
          <ScrollSection imagesLoaded={imagesLoaded}/>
        </div>
      )}
    </>
  );
}
