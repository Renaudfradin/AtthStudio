'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import localFont from 'next/font/local';
import Image from 'next/image';
import Top from './top/top';
import Footer from './footer/footer';
import supermood from '@/app/assets/img/supermood.svg';
import xeahnort from '@/app/assets/img/xeahnort.png';
import salamander from '@/app/assets/img/salamander.svg';
import marcovasco from '@/app/assets/img/marcovasco.png';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

gsap.registerPlugin(ScrollTrigger);

export default function scrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        duration: 40,
        delay: 0.1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '1400 50',
          scrub: 4,
          markers: false,
          pin: true,
          // onUpdate: (self) => console.log('progress:', self.progress * 100),
          // onToggle: (self) => console.log('toggled. active?', self.isActive),
        },
      },
    );
    ScrollTrigger.refresh();

    return () => {
      pin.revert();
    };
  }, []);

  return (
    <div ref={triggerRef}>
      <Top />
      <div ref={sectionRef} className={`scroll-section-inner`}>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="salamender">
              Salamender
            </Link>
            <Image
              src={salamander}
              alt="Logo Salamander"
              className="imgSalamender"
              priority
            ></Image>
          </div>
          <Footer project_min="01" project_max="04" progress="25%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="xeahnort">
              XEAHNORT
            </Link>
            <Image src={xeahnort} alt="Logo Xeahnort" priority></Image>
          </div>
          <Footer project_min="02" project_max="04" progress="50%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link
              className={`${monumentExtended.className} supermood`}
              href="supermood"
            >
              Supermood
            </Link>
            <Image src={supermood} alt="Logo Supermood" priority></Image>
          </div>
          <Footer project_min="03" project_max="04" progress="75%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="marcovasco">
              MARCO VASCO
            </Link>
            <Image src={marcovasco} alt="Logo Marcovasco" priority></Image>
          </div>
          <Footer project_min="04" project_max="04" progress="100%" />
        </div>
      </div>
      <div className="allproject">
        <div>
          <p className={`${monumentExtended.className} `}>ALL PROJECT</p>
          <p className={`${monumentExtended.className} `}>(soon)</p>
        </div>
      </div>
    </div>
  );
}
