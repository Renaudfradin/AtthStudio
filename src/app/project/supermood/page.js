import React from 'react';
import Top from '@/app/components/top/top';
import Link from 'next/link';
import '../project.css';

export const metadata = {
  title: 'Supermood',
  description: 'Portfolio Annie Tran ATTH Studio Supermood',
};

export default function Project() {    
  return (
    <div className="main">
      <Top />
        <div className="section">
          <Link
            href={'https://www.behance.net/annietran8'}
            target="_blank"
            className='behancelink'
          >Behance</Link>
        </div>
    </div>
  )
}
