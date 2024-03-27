'use client'

import React, { useState } from 'react';
import { items } from './data';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 burgerMenuIcon"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-7 bg-700 burgerMenuSpan"></span>
            <span className="block h-0.5 w-7 bg-700 burgerMenuSpan"></span>
            <span className="block h-0.5 w-7 bg-700 burgerMenuSpan"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-700 iconBurgerMenu"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {items.map(({ url, label, id }) => (
                <li className="my-8 uppercase" key={id}>
                  <Link href={url}>{label}</Link>
                </li>
                ))}
            </ul>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {items.map(({ url, label, id }) => (
            <li key={id}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
