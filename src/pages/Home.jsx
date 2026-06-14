import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import welcome from '../assets/welcome.jpeg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <header className={styles.heroSection}>
      <div className={styles.lightCyberGridBG}></div>
      
      <div className={styles.heroLayoutShell}>
        
        {/* LEFT COLUMN: INTRODUCTORY CONTENT TEXT BLOCK */}
        <div className={styles.heroLeftContent}>
          <h5 className={styles.heroSubtitle}>
            PID: IT-106 (BSc. IT) • Location-Aware Trust Model for Ride-Hailing Gigs
          </h5>
          
          <h1 className={styles.heroTitle}>SmartGig</h1>
          <p className={styles.heroTagline}>Smart Campus Transport Safety Platform</p>
          
          <p className={styles.heroDescription}>
            A mobile application designed for UUM campus drivers. Look up real-time safety metrics, personalize your risk tolerance weights using sliders, and analyze spatial trip factors before accepting dispatch requests.
          </p>
          
          <div className={styles.heroButtons}>
            <button 
              className={styles.primaryButton} 
              onClick={() => navigate('/About')}
            >
              🚀 Get Started
            </button>
            
            <button 
              className={styles.secondaryButton} 
              onClick={() => navigate('/contact')}
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D ANCHORED PORTRAIT PHONE WRAPPER */}
        <div className={styles.heroRightMockup}>
          <div className={styles.phoneDeviceChassis}>
            <div className={styles.phoneScreenGlass}>
              {/* Renders your customized welcome.jpeg screenshot inside the screen frame */}
              <img 
                src={welcome} 
                alt="SmartGig Mobile Application Interface View" 
                className={styles.phoneRenderImage}
              />
              <div className={styles.screenInnerReflectionOverlay}></div>
            </div>
            {/* Minimal speaker bezel node mimicry */}
            <div className={styles.phoneDynamicIslandBezel}></div>
          </div>
        </div>

      </div>
    </header>
  );
}