import Image from 'next/image';
import React from 'react';
import Navbar from '@/app/components/navbar/navbar.js';

export default function top() {
	return (
    <div className="top">
      <Image
        width={100}
        height={500}
        priority
        src="/asset/logo3.svg"
        alt="logo ATTH Studio"
      >
      </Image>
      <Navbar />
      <p>2024</p>
		</div>
	)
}
