import React from 'react';
import Top from '@/app/components/top/top';
import Image from 'next/image';
import Link from 'next/link';
import '../project.css';

export const metadata = {
  title: 'Brand Design',
  description: 'Portfolio Annie Tran ATTH Studio Brand Design',
};

export default function Project() {    
  return (
    <div className="main">
     <Top />
      <div className="section">
        <Image
          className='imgTopProject'
          width={320}
          height={867}
          priority
          src="/asset/img/branddesign/topProjetItsComming.svg"
          alt='imgTopProject'
        ></Image>
        <p className='titleDesignMobileid'>002-Pl@nt.net</p>
        <h3 className='titleDesignMobile'>Refonte UX design</h3>
        <Image
          className='imgTopProjectMobile'
          width={365}
          height={489}
          src="/asset/img/branddesign/topProjectMobile.svg"
          alt='projectImgMobile'
        ></Image>
        <p className='btnAplication'>Brand Design</p>
        <Link
          href={'https://www.behance.net/annietran8'}
          target="_blank"
          className='behancelink'
        >Behance</Link>
      </div>
    </div>
  )
}
