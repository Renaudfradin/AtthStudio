import Image from 'next/image';
import React from 'react';
import Navbar from '@/app/components/navbar/navbar.js';
import './top.css';

export default function top() {
  return (
    <div className="topMain">
      <div className="top">
        <Image
          width={100}
          height={100}
          priority
          src="/asset/logo3.svg"
          alt="logo ATTH Studio Navbar"
        />
        <div className="horizontalBar" />
        <p>2024</p>
      </div>
      <Navbar />
    </div>
  );
}
