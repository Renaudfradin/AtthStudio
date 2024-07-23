'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import localFont from 'next/font/local';
import Image from 'next/image';

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function scrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-400vw',
        ease: 'none',
        duration: 10,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      },
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/yuka"
              >
                Yūka
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/yuka.svg"
                alt="Logo Yuka"
              ></Image>
            </div>
          </div>
          <div className="scroll-section">
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/salamender"
              >
                Salamender
              </Link>
              <Image
                width={1190}
                height={790}
                priority
                src="/asset/img/salamander.svg"
                alt="Logo Salamander"
              ></Image>
            </div>
          </div>
          <div className="scroll-section">
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/xeahnort"
              >
                XEAHNORT
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/xeahnort.svg"
                alt="Logo Xeahnort"
              ></Image>
            </div>
          </div>
          <div className="scroll-section">
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/foresthill"
              >
                FOREST HILL
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/foresthill.svg"
                alt="Logo Forest Hill"
              ></Image>
            </div>
          </div>
          <div className="scroll-section">
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/marcovasco"
              >
                MARCO VASCO
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/marcovasco.svg"
                alt="Logo Marcovasco"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
