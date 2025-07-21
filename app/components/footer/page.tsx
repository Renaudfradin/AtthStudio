import Link from 'next/link';
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__col footer__col--left">
          <nav className="footer__menu" aria-label="Menu">
            <div className="footer__title">Menu</div>
            <ul className="footer__list">
              <li>
                <Link href="/article" className="footer__link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/archive" className="footer__link">
                  Random Life
                </Link>
              </li>
              <li>
                <Link href="/process" className="footer__link">
                  Process
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer__annie">Designe by Annie</div>
        </div>
        <div className="footer__col footer__col--right">
          <Link href="/contact" className="footer__link">
            Contact
          </Link>
          <Link href="/legal" className="footer__link">
            Mention Légale
          </Link>
          <Link href="/book" className="footer__link">
            Mon book
          </Link>
          <a href="tel:+33123456789" className="footer__call-btn">
            Appel téléphonique gratuit !
          </a>
        </div>
      </div>
      {/* <div className="footer__bg-text">Atth-Studio</div> */}
    </footer>
  );
}
