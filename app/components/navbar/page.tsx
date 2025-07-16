'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import './navbar.css';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link href="/" className="logo-link">
            <span className="logo-line1">Atth -</span>
            <span className="logo-line2">Studio</span>
          </Link>
        </div>
      </div>

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

      {menuOpen && (
        <div className="navbar__mobile-menu" ref={menuRef}>
          <div className="navbar__subtitle">
            I’m product designer specializing of UX design
            <br />
            based in France
          </div>
          <div className="navbar__links-group">
            <Link
              href="https://instagram.com"
              className="navbar__link"
              rel="noopener noreferrer"
            >
              Instagram <span className="navbar__arrow">↗</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="navbar__link"
              rel="noopener noreferrer"
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
      )}

      <div className="navbar__right">
        <div className="navbar__links-group">
          <Link
            href="https://instagram.com"
            className="navbar__link"
            rel="noopener noreferrer"
          >
            Instagram <span className="navbar__arrow">↗</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="navbar__link"
            rel="noopener noreferrer"
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
