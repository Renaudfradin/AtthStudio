import React from 'react';
import './top.css';
import Link from 'next/link';
import localFont from 'next/font/local';

const monumentExtendedd = localFont({
  src: '../MonumentExtended-Regular.otf',
});

export default function top() {
  return (
    <div className="main_top">
      <Link className={`${monumentExtendedd.className}`} href="/">
        Annie Tran
      </Link>
    </div>
  );
}
