import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Technology from './pages/Technology';
import UseCases from './pages/UseCases';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

import styles from './styles/App.module.css';

import uumDriverLogo from './assets/logo.jpg';
import sdg5Badge from './assets/sdg5.png';
import sdg11Badge from './assets/sdg11.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={styles.wrapper}>

        {/* NAVBAR */}
        <nav className={styles.navbar}>
          <div className={styles.navBrandContainer} onClick={closeMenu}>
            <div className={styles.logoHologramRing}>
              <img
                src={uumDriverLogo}
                alt="UUM DRIVER Smart Gigs Logo"
                className={styles.brandLogoImg}
              />
            </div>

            <div className={styles.textIdentityBlock}>
              <div className={styles.pidBadgeRow}>
                <span className={styles.pidBadgeText}>
                  PID: IT-106
                </span>

                <span className={styles.uumLabelText}>
                  UUM DRIVER
                </span>
              </div>

              <div className={styles.logoText}>
                SMARTGIG
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`${styles.hamburgerToggle} ${
              menuOpen ? styles.hamburgerActive : ''
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAV LINKS */}
          <div
            className={`${styles.navLinks} ${
              menuOpen ? styles.navLinksMobileActive : ''
            }`}
          >
            <Link to="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" className={styles.navLink} onClick={closeMenu}>
              About
            </Link>

            <Link
              to="/how-it-works"
              className={styles.navLink}
              onClick={closeMenu}
            >
              How It Works
            </Link>

            <Link
              to="/technology"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Technology
            </Link>

            <Link
              to="/use-cases"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Use Cases
            </Link>

            <Link
              to="/faq"
              className={styles.navLink}
              onClick={closeMenu}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`${styles.navLink} ${styles.navButton}`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className={styles.mainContent}>
          <Routes>
            {/* Default Home Page */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirect unknown URLs to Home */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerCol}>
              <div className={styles.footerLogoContainer}>
                <div className={styles.footerLogoMiniFrame}>
                  <img
                    src={uumDriverLogo}
                    alt="Mini Logo"
                    className={styles.miniFooterImg}
                  />
                </div>

                <div className={styles.footerLogoText}>
                  SMARTGIG
                </div>
              </div>

              <div className={styles.goalBadges}>
                <img
                  src={sdg5Badge}
                  alt="SDG 5"
                  className={styles.sdgFooterGraphic}
                />

                <img
                  src={sdg11Badge}
                  alt="SDG 11"
                  className={styles.sdgFooterGraphic}
                />
              </div>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>
                Contributors
              </h4>

              <span className={styles.label}>
                Student Developer:
              </span>

              <p className={styles.value}>
                Beh Kah Meng
              </p>

              <span className={styles.label}>
                Project Supervisor:
              </span>

              <p className={styles.value}>
                Associate Prof. Dr. Azizi Bin Ab Aziz
              </p>

              <span className={styles.label}>
                Institution:
              </span>

              <p className={styles.value}>
                Universiti Utara Malaysia (UUM)
              </p>
            </div>
          </div>

          <div className={styles.copyright}>
            © {new Date().getFullYear()} SMARTGIG — Academic Evaluation Platform.
            All Rights Reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}