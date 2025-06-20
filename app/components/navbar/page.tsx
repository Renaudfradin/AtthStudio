import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        {' '}
        <h1>ATTHSTUDIO</h1>
      </Link>
      <p>I’m product designer specializing of UX design based in France</p>
      <br />
      <Link href="/">Instagram</Link>
      <br />
      <Link href="/">Linkdin</Link>
      <br />
      <Link href="/article">Check my blog</Link>
      <br />
      <Link href="/archive">Check my random life</Link>
      <br />
      <Link href="/">Go back to the home</Link>
      <br />
    </div>
  );
}
