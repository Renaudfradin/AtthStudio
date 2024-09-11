import React from 'react';
import Top from '../components/top/top';
import { items } from './data.js';
import '../allproject/allproject.css';
import Link from 'next/link';
import localFont from 'next/font/local';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function page() {
  return (
    <div>
      <Top />
      <div className="aboutMain">
        {items.map(({ id, title, slug, release }) =>
          release === true ? (
            <div key={id}>
              <Link
                className={`${monumentExtended.className} title_list`}
                href={`${slug}`}
              >
                {title}
              </Link>
            </div>
          ) : (
            <div key={id} className="comingSoonProject">
              <p className={`${monumentExtended.className} title_list_sooon`}>
                {title}
              </p>
              <p className={`${monumentExtended.className} title_list_sooon`}>
                Coming soon
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
