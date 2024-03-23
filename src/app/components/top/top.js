import Image from 'next/image';
import React from 'react';
import Navbar from '../navbar/navbar.js';
import logo3 from '@/app/assets/img/logo3.svg';
import lineTop from '@/app/assets/img/linetop.svg';

export default function top() {
	return (
    <div className="top">
        <Image
          src={logo3}
          alt="logo ATTH Studio"
        >
        </Image>
        <Navbar />
        <p>2024</p>
		</div>
	)
}
