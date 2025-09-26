'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import './navbar.css';

const criteriacf_bold = localFont({
  src: '../../assets/font/criteriacf-bold.otf',
});

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link href="/" className="logo-link">
            <span className={`${criteriacf_bold.className} logo-line1`}>
              Atth -
            </span>
            <span className={`${criteriacf_bold.className} logo-line2`}>
              Studio
            </span>
          </Link>
        </div>
        {/* <div className="navbar__subtitle">
          I’m product designer specializing of UX design
          <br />
          based in France
        </div> */}

        <button
          ref={hamburgerRef}
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu" ref={menuRef}>
          <div className="navbar__subtitle">
            I’m product designer specializing of UX design
            <br />
            based in France
          </div>
          <div className="navbar__group">
            <div className="navbar__links-group">
              <Link
                href="https://instagram.com"
                className="navbar__link"
                rel="noopener noreferrer"
                target="_blank"
                onClick={handleLinkClick}
              >
                Instagram <span className="navbar__arrow">↗</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/annietth/"
                className="navbar__link"
                rel="noopener noreferrer"
                target="_blank"
                onClick={handleLinkClick}
              >
                Linkdin <span className="navbar__arrow">↗</span>
              </Link>
            </div>
            <div className="navbar__links-group">
              {pathname === '/article' || pathname.startsWith('/article/') ? (
                <Link
                  href="/"
                  className="navbar__link"
                  onClick={handleLinkClick}
                >
                  Go back to the home <span className="navbar__arrow">↗</span>
                </Link>
              ) : (
                <Link
                  href="/article"
                  className="navbar__link"
                  onClick={handleLinkClick}
                >
                  Check my blog <span className="navbar__arrow">↗</span>
                </Link>
              )}
              {pathname === '/archive' || pathname.startsWith('/archive/') ? (
                <Link
                  href="/"
                  className="navbar__link"
                  onClick={handleLinkClick}
                >
                  Go back to the home <span className="navbar__arrow">↗</span>
                </Link>
              ) : (
                <Link
                  href="/archive"
                  className="navbar__link"
                  onClick={handleLinkClick}
                >
                  Check my random life <span className="navbar__arrow">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="navbar__right">
        <div className="navbar__links-group">
          <Link
            href="https://www.instagram.com/atth.studio"
            className="navbar__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram <span className="navbar__arrow">↗</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/annietth"
            className="navbar__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkdin <span className="navbar__arrow">↗</span>
          </Link>
        </div>
        <div className="navbar__links-group">
          {pathname === '/article' || pathname.startsWith('/article/') ? (
            <Link href="/" className="navbar__link">
              Go back to the home <span className="navbar__arrow">↗</span>
            </Link>
          ) : (
            <Link href="/article" className="navbar__link">
              Check my blog <span className="navbar__arrow">↗</span>
            </Link>
          )}
          {pathname === '/archive' || pathname.startsWith('/archive/') ? (
            <Link href="/" className="navbar__link">
              Go back to the home <span className="navbar__arrow">↗</span>
            </Link>
          ) : (
            <Link href="/archive" className="navbar__link">
              Check my random life <span className="navbar__arrow">↗</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
