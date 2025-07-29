import Link from 'next/link';
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <>
      {/* Section Who I am */}
      <section className="who-i-am">
        <div className="who-i-am__container">
          <div className="who-i-am__content">
            <div className="who-i-am__left">
              <h2 className="who-i-am__title">Who, I am ?</h2>
              <h3 className="who-i-am__name">Annie Tran</h3>
            </div>
            <div className="who-i-am__intro">
              <p>
                Hello, I&apos;m Annie Tran, Welcome, Stay as long as you wish,
                <br />
                Find your dream
              </p>
            </div>
            <div className="who-i-am__contact">
              <a
                href="mailto:annietth.pro@gmail.com"
                className="who-i-am__email"
              >
                annietth.pro@gmail.com
              </a>
            </div>
            <div className="who-i-am__description">
              <p>
                I enjoy : tomatoes ramen, tarot cards, music pop, matcha latte,
                feedback, running, aura kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <Link
              href="https://www.behance.net/annietran8"
              className="footer__link"
            >
              Mon book
            </Link>
            <a href="tel:+33123456789" className="footer__call-btn">
              Appel téléphonique gratuit !
            </a>
          </div>
        </div>
        {/* <div className="footer__bg-text">Atth-Studio</div> */}
      </footer>
    </>
  );
}
