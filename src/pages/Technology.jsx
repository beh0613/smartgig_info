import React, { useState } from 'react';
import styles from '../styles/Technology.module.css';

// --- TECHNOLOGY PHOTOS/GRAPHICS IMPORTERS ---
import googleMapsImg from '../assets/location.png';
import tomtomImg from '../assets/motorway.png';
import openWeatherImg from '../assets/sun.png';
import geminiImg from '../assets/gemini.jpg';
import gcpImg from '../assets/cloud.jpg';
import supabaseImg from '../assets/supabase.jpg';

export default function Technology() {
  const [isMathSpread, setIsMathSpread] = useState(false);

  const techs = [
    { name: "Google Maps API", usage: "Provides core spatial data mapping, coordinate geofencing, and location tracking assets.", category: "Mapping", image: googleMapsImg },
    { name: "TomTom API", usage: "Parses historical routing traffic, delays, and dynamic highway accident metrics.", category: "Traffic", image: tomtomImg },
    { name: "OpenWeather API", usage: "Fetches live climate indicators, extreme weather alerts, and visibility states.", category: "Environment", image: openWeatherImg },
    { name: "Gemini AI", usage: "Handles real-time context tokenization and predictive risk weight reasoning.", category: "Intelligence", image: geminiImg },
    { name: "Google Cloud Platform", usage: "Hosts the backend engine executing serverless Python services to calculate weights concurrently.", category: "Backend Node", image: gcpImg },
    { name: "Supabase", usage: "Handles secure backend architecture, cloud data matrices, and driver profile lookups.", category: "Database", image: supabaseImg }
  ];

  const mathModels = [
    { id: "PB", title: "1. Passenger Behavioral", formula: "PB = (BehaviorScore + RatingRisk + AICommentRisk) / 100" },
    { id: "CR", title: "2. Crime Risk", formula: "CR = CrimeIndex / 100" },
    { id: "RAD", title: "3. Road Accident History", formula: "RAD = ((0.5 × TomTom) + (0.3 × Historical) + (0.2 × News)) / 100" },
    { id: "RC", title: "4. Road Condition", formula: "RC = ((0.7 × Infrastructure) + (0.3 × News)) / 100" },
    { id: "WR", title: "5. Weather Matrix", formula: "WR = WeatherScore / 100" },
    { id: "LG", title: "6. Lighting Matrix", formula: "LR = f(SunAltitude) -> [0 if Alt > 0 | 25 if -6 < Alt <= 0 | 60 if Alt <= -6]" }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.lightCyberGridBG}></div>

      {/* SECTION 1: STACK INTEGRATION (3D HOVER + INTRUDING CARD STAGGER ANIMATION) */}
      <section className={styles.wideSection}>
        <div className={styles.titleContainer}>
          <span className={styles.metaLabelCentred}>System Infrastructure</span>
          <h2 className={styles.cyberTitle}>Multi-Source Integration Stack</h2>
          <div className={styles.titleLine}></div>
        </div>
        
        <div className={styles.gridContainerTech}>
          {techs.map((tech, idx) => (
            <div 
              key={idx} 
              className={styles.techCard3D}
              style={{ '--card-index': idx }} // Supplies item index weight variable to trigger pure CSS staggered delay
            >
              <div className={styles.techCardHeader}>
                {/* 3D Floating Animated Brand Icon Container Frame */}
                <div className={styles.imageWrapper3D}>
                  <img src={tech.image} alt={tech.name} className={styles.techPhoto3D} />
                  <div className={styles.imageShadowIndicator}></div>
                </div>
                <span className={styles.categoryBadge}>{tech.category}</span>
              </div>
              <h3 className={styles.nodeText}>{tech.name}</h3>
              <p className={styles.descText}>{tech.usage}</p>
              <div className={styles.cardGlowPulse}></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COMPUTATIONAL MODELS WITH FULL SPREAD SYSTEM */}
      <section className={styles.sectionGrey}>
        <div className={styles.wideSection}>
          <div className={styles.titleContainer}>
            <span className={styles.metaLabelCentred}>Algorithmic Architecture</span>
            <h2 className={styles.cyberTitle}>Computational Mathematical Models</h2>
            <div className={styles.titleLine}></div>
          </div>

          <div className={styles.stackVisualStage}>
            <div 
              className={`${styles.interactiveDeckWrapper} ${isMathSpread ? styles.deckSpreadActive : ''}`}
              onClick={() => setIsMathSpread(!isMathSpread)}
            >
              
              {/* FRONT COVER DECK CHIP */}
              {!isMathSpread && (
                <div className={styles.placeholderFrontCard}>
                  <div className={styles.neonCornerTL}></div>
                  <div className={styles.neonCornerBR}></div>
                  <div className={styles.placeholderHeader}>
                    <div className={styles.clickActionRing}>
                      <span className={styles.clickPulseWave}></span>
                      <span className={styles.clickFingerIcon}>👆</span>
                    </div>
                    <h4 className={styles.mathNodeTitle}>Let's click to view...</h4>
                  </div>
                  <div className={styles.placeholderDisplayBox}>
                    <span className={styles.placeholderDisplayGradientText}>
                      Click to expand calculation pipeline layout system
                    </span>
                  </div>
                </div>
              )}

              {/* INDIVIDUAL MODEL CARDS */}
              {mathModels.map((model, idx) => {
                const stackTransform = `translateX(${idx * -12}px) translateY(${idx * -8}px) rotate(${idx * -2}deg)`;

                return (
                  <div 
                    key={idx} 
                    className={`${styles.layeredMathCard} ${isMathSpread ? styles.gridPositioning : ''}`}
                    style={{
                      transform: isMathSpread ? "" : stackTransform,
                      zIndex: isMathSpread ? 1 : 10 + idx
                    }}
                  >
                    <div className={styles.neonCornerTL}></div>
                    <div className={styles.neonCornerBR}></div>
                    
                    <div className={styles.mathHeader}>
                      <span className={styles.formulaId}>{model.id}</span>
                      <h4 className={styles.mathNodeTitle}>{model.title}</h4>
                    </div>

                    <div className={styles.formulaDisplay}>
                      <code className={styles.glowCode}>{model.formula}</code>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: OUTSIDE TOTAL COMPILATION ROW */}
          <div className={styles.finalCompilationBlockOutside}>
            <h3 className={styles.compilationTitle}>
              <span className={styles.trophyIcon}>🏆</span> FINAL SAFETY RISK SCORE COMPILATION
            </h3>
            
            <div className={styles.matchedFormulaTerminal}>
              <div className={styles.formulaRowTop}>
                <code>RiskScore = (w₁×PB) + (w₂×CR) + (w₃×RAD) + (w₄×RC) + (w₅×WR) + (w₆×LG)</code>
              </div>
              <div className={styles.terminalInnerDivider}></div>
              <div className={styles.formulaRowBottom}>
                <code>FinalScore = RiskScore × 100</code>
              </div>
            </div>
            
            <p className={styles.compilationFootnote}>
              *Note: The platform treats parameters equally with standard uniform baseline assignments where w₁₋₆ = 0.167.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}