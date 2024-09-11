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
import kumiio from '@/app/assets/img/kumiio.svg';
import xeahnort from '@/app/assets/img/xeahnort.svg';
import salamander from '@/app/assets/img/salamander.svg';
import marcovasco from '@/app/assets/img/marcovasco.svg';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

gsap.registerPlugin(ScrollTrigger);

export default function scrollSection({ imagesLoaded } : { imagesLoaded: boolean }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-400vw',
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
      <div ref={sectionRef} className={`scroll-section-inner ${!imagesLoaded ? 'hidden' : ''}`}>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="kumiio">
              Kūmiio
            </Link>
            <Image src={kumiio} alt="Logo Kūmiio" priority></Image>
          </div>
          <Footer project_min="01" project_max="05" progress="20%" />
        </div>
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
          <Footer project_min="02" project_max="05" progress="40%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="xeahnort">
              XEAHNORT
            </Link>
            <Image src={xeahnort} alt="Logo Xeahnort" priority></Image>
          </div>
          <Footer project_min="03" project_max="05" progress="60%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="supermood">
              Supermood
            </Link>
            <Image src={supermood} alt="Logo Supermood" priority></Image>
          </div>
          <Footer project_min="04" project_max="05" progress="80%" />
        </div>
        <div className="scroll-section">
          <div className="content-section">
            <Link className={`${monumentExtended.className}`} href="marcovasco">
              MARCO VASCO
            </Link>
            <Image src={marcovasco} alt="Logo Marcovasco" priority></Image>
          </div>
          <Footer project_min="05" project_max="05" progress="100%" />
        </div>
      </div>
      <div className="allproject">
        <Link className={`${monumentExtended.className} `} href="allproject">
          ALL PROJECT
        </Link>
      </div>
    </div>
  );
}
