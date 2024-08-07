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
          <Image src={slider} className="" alt="Image all project" priority/>
        </div>
        <div className='content'>
          {items.map(({ title, slug, release }) => (
            <div>
              <Link className={`${monumentExtended.className} title_list`} href={`project/${slug}`}>{title}</Link>
              <p>{release}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
