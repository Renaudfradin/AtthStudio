'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

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
            <h2>project 1</h2>
            <Link href="project/yuka">yuka</Link>
          </div>

          <div className="scroll-section">
            <h2>project 2</h2>
            <Link href="project/salamender">salamender</Link>
          </div>

          <div className="scroll-section">
            <h2>project 3</h2>
            <Link href="project/xeahnort">xeahnort</Link>
          </div>

          <div className="scroll-section">
            <h2>project 4</h2>
            <Link href="project/foresthill">foresthill</Link>
          </div>

          <div className="scroll-section">
            <h2>project 5</h2>
            <Link href="project/marcovasco">marcovasco</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
