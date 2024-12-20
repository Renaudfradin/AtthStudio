import React from 'react';
import './top.css';
import Link from 'next/link';
import localFont from 'next/font/local';
import { TfiLineDouble } from 'react-icons/tfi';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export default function top() {
  return (
    <div className="main_top">
      <Link
        className={`${monumentExtendedd.className}`}
        href="/"
        prefetch={true}
      >
        Annie Tran
      </Link>
      <Link
        className={`${monumentExtendedd.className}`}
        href="/about"
        prefetch={true}
      >
        <TfiLineDouble className="iconAbout" />
      </Link>
    </div>
  );
}
