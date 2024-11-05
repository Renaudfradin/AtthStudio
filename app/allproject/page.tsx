import React from 'react';
import Top from '../components/top/top';
import { items } from './data.js';
import './allproject.css';
import Image from 'next/image';
import localFont from 'next/font/local';
import slider from '@/app/assets/img/allproject/slider.svg';
import Link from 'next/link';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function page() {
  return (
    <div>
      <Top />
      <div className="content_allproject">
        <div className="top_allproject">
          <div>
            <h2 className={`${monumentExtended.className} title1`}>
              ALL PROJECT PICK ONE OF THEM
            </h2>
            <h2 className={`${monumentExtended.className} title2`}>
              Don’t be shy
            </h2>
          </div>
          <Image src={slider} className="" alt="Image all project" priority />
        </div>
        <div>
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
    </div>
  );
}
