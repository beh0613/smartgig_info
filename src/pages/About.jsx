import React from 'react';
import styles from '../styles/About.module.css';
import landingpage from '../assets/landing.png';

export default function About() {
  const variables = [
    { name: "Passenger Behaviour", desc: "Monitors behavioral logs and profile anomalies.", icon: "👤" },
    { name: "Crime Index", desc: "Integrates geo-localized public security indexes.", icon: "🚨" },
    { name: "Road Accident History", desc: "Tracks historic accident blackspots and danger nodes.", icon: "⚠️" },
    { name: "Road Condition", desc: "Evaluates physical terrain stability and ongoing hazards.", icon: "🚧" },
    { name: "Weather Matrix", desc: "Analyzes live micro-climate fluctuations and visibility limits.", icon: "🌧️" },
    { name: "Lighting Matrix", desc: "Calculates solar position variables and street lamp mapping.", icon: "🌙" }
  ];

  const novelties = [
    { title: "Real-Time Multi-Source Risk Assessment", desc: "Blends spatial indicators concurrently on every map loop.", icon: "📡" },
    { title: "Personalized Driver Preferences", desc: "Adapts safety parameters to match custom personal comfort thresholds.", icon: "⚙️" },
    { title: "AI-Powered Passenger Risk Analysis", desc: "Employs contextual model reasoning to flag erratic trip updates.", icon: "🤖" },
    { title: "Location Aware Recommendations", desc: "Generates route variants prioritizing transit security margins.", icon: "📍" }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* SECTION 1: WHAT IS SMARTGIG & HERO ANIMATION */}
      <section className={styles.sectionBlue}>
        <div className={styles.containerSplit}>
          <div className={styles.heroText}>
            <h5 className={styles.metaLabel}>System Core Definition</h5>
            <h2 className={styles.sectionHeading}>What is SmartGig?</h2>
            <p className={styles.mainDescription}>
              <strong>SmartGig</strong> is an intelligent <em>Location Aware Trust Model for Gig Application Recommendations</em>. 
              Engineered with an emphasis on female-focused ride-hailing security, the platform aggregates complex environmental 
              and situational matrices to output a definitive safety index before job acceptance.
            </p>
          </div>
          {/* REPLACE STYLES IN BACKGROUND LAYERS FILE LATER IF ASSIGNING PNG ASSETS */}
          <div className={styles.graphicColumn}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupGraphic}>
                
                {/* 2. PLACE THE IMPORTED VARIABLE NAME HERE IN THE SRC */}
                <img 
                  src={landingpage} 
                  alt="SmartGig App Mockup Dashboard" 
                  className={styles.mockupImage} 
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM STATEMENT & OBJECTIVES */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            <div className={styles.gridCard3D}>
              <div className={styles.glowingBorderRed}></div>
              <h3 className={styles.cardTitlePrimary}>⚠️ Problem Statement</h3>
              <ul className={styles.list}>
                <li><strong>Static Trust Configurations:</strong> Existing applications neglect changing localized indicators.</li>
                <li><strong>Heightened Risk Profiles:</strong> Female gig workers encounter vulnerable situations when driving unmonitored routes.</li>
                <li><strong>Absence of Real-Time Warning:</strong> Traditional systems offer route times but fail to flag active security conditions.</li>
              </ul>
            </div>
            <div className={styles.gridCard3D}>
              <div className={styles.glowingBorderGreen}></div>
              <h3 className={styles.cardTitleAccent}>🎯 Project Objectives</h3>
              <ul className={styles.list}>
                <li>To architect a dynamic trust engine processing environmental spatial variables.</li>
                <li>To formulate threat calculation algorithms utilizing multi-source weighting matrices.</li>
                <li>To validate system accuracy through an interactive frontend evaluation prototype.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VARIABLES */}
      <section className={styles.sectionGrey}>
        <div className={styles.container}>
          <h5 className={styles.metaLabelCentred}>System Operations</h5>
          <h2 className={styles.sectionHeadingCentred}>Dynamic Safety Indicators</h2>
          <p className={styles.subtitleCentred}>Evaluating trip safety parameters across 6 operational variables:</p>
          
          <div className={styles.indicatorsGrid}>
            {variables.map((v, i) => (
              <div key={i} className={styles.indicatorCard3D}>
                <div className={styles.indicatorHeader}>
                  <span className={styles.indicatorIcon}>{v.icon}</span>
                  <span className={styles.badgeIndex}>0{i + 1}</span>
                </div>
                <h4>{v.name}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NOVELTY */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <h5 className={styles.metaLabelCentred}>Innovative Vectors</h5>
          <h2 className={styles.sectionHeadingCentred}>System Novelty</h2>
          <div className={styles.noveltyGrid}>
            {novelties.map((item, idx) => (
              <div key={idx} className={styles.noveltyCard3D}>
                <div className={styles.noveltyIconBox}>{item.icon}</div>
                <div className={styles.noveltyTextContent}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMERCIALIZABILITY */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <h5 className={styles.metaLabel}>UN SDG Ecosystem Alignments</h5>
          <h2 className={styles.sectionHeadingLight}>Commercializability Potential</h2>
          
          <div className={styles.commercialGrid}>
            <div className={styles.commBlock3D}>
              <h4>👥 Target End-Users</h4>
              <p>Tailored directly for gig platform operators, delivery drivers, on-demand courier networks, and modern enterprise ride-hailing firms.</p>
            </div>
            <div className={styles.commBlock3D}>
              <h4>💰 Revenue Streams</h4>
              <p>Premium tiered spatial maps, external software dashboard licenses, and B2B cloud database plug-in modular integrations.</p>
            </div>
            <div className={styles.commBlock3D}>
              <h4>📈 Market Potential</h4>
              <p>Capitalizes on the increasing regional focus on female driver security and workspace safety updates across emerging Asian channels.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}