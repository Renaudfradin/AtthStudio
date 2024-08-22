'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import localFont from 'next/font/local';
import Image from 'next/image';
import Top from './top/top';
import Footer from './footer/footer';

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
          end: '1900 top',
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
            <Top />
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/kumiio"
              >
                Kūmiio
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/Kūmiio.png"
                alt="Logo Kūmiio"
              ></Image>
            </div>
            <Footer project_min="01" project_max="05" progress="20%" />
          </div>
          <div className="scroll-section">
            <Top />
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
            <Footer project_min="01" project_max="05" progress="40%" />
          </div>
          <div className="scroll-section">
            <Top />
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
                src="/asset/img/xeahnort.png"
                alt="Logo Xeahnort"
              ></Image>
            </div>
            <Footer project_min="01" project_max="05" progress="60%" />
          </div>
          <div className="scroll-section">
            <Top />
            <div className="content-section">
              <Link
                className={`${monumentExtended.className}`}
                href="project/supermood"
              >
                Supermood
              </Link>
              <Image
                width={930}
                height={510}
                priority
                src="/asset/img/foresthill.svg"
                alt="Logo Supermood"
              ></Image>
            </div>
            <Footer project_min="01" project_max="05" progress="80%" />
          </div>
          <div className="scroll-section">
            <Top />
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
            <Footer project_min="01" project_max="05" progress="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
