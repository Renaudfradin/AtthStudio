import React from 'react';
import './footer.css';
import Link from 'next/link';
import localFont from 'next/font/local';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

interface FooterProps {
  project_min: string;
  project_max: string;
  progress: string;
}

export default function footer({
  project_min,
  project_max,
  progress,
}: FooterProps) {
  return (
    <div className="main_progress">
      <div className="progress_bar">
        <div className="h-1 w-full color_not_progress">
          <div className="h-1 color_progress" style={{ width: progress }}></div>
        </div>
        <div className="content_progress">
          <p className={`${monumentExtendedd.className}`}>{project_min}</p>
          <p className={`${monumentExtendedd.className}`}>{project_max}</p>
        </div>
      </div>
      <Link className={`${monumentExtendedd.className}`} href="allproject">
        ALL PROJECT
      </Link>
    </div>
  );
}
