import React from 'react';
import localFont from 'next/font/local';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function page() {
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
