import React, { useState } from 'react';
import styles from '../styles/UseCases.module.css';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: "REG",
      tabLabel: "Registration",
      sector: "Driver Onboarding",
      title: "Driver Sign Up Portal",
      tagline: "A simple and secure sign-up process for campus drivers",
      bullets: [
        "Collects basic driver details such as name, age, gender, and student email.",
        "Securely stores photos of your Identity Card (IC) and active driving license.",
        "Logs your car model, year, color, plate number, and road tax documents.",
        "Sends a secure activation link directly to your Gmail inbox."
      ],
      rightFeatures: [
        { title: "Profile Creation", desc: "Easy forms to type in your phone number and house address." },
        { title: "Document Uploads", desc: "Snap clear photos of your license, vehicle form, and road tax." },
        { title: "Instant Notification", desc: "Shows an on-screen confirmation alert as soon as you submit." }
      ]
    },
    {
      id: "DASH",
      tabLabel: "Dashboard",
      sector: "Main Menu",
      title: "Driver Account Home",
      tagline: "Your central hub to check your profile, money, and vehicle stats",
      bullets: [
        "Displays your profile picture, email address, and name.",
        "Tracks your live wallet balance showing exactly how much revenue you have made.",
        "Gives you quick toggles to change between default and personal settings.",
        "Shows a quick shortcut summary link to look over your registered vehicle info."
      ],
      rightFeatures: [
        { title: "Earnings Tracker", desc: "Displays your total revenue balance prominently at the top." },
        { title: "Mode Toggles", desc: "Quickly switch between Default settings and your Personalized rules." },
        { title: "Profile Summary", desc: "Shows your registered car details (like Axia, Myvi) on your screen." }
      ]
    },
    {
      id: "PERS",
      tabLabel: "Personalization",
      sector: "Safety Configuration",
      title: "Custom Safety Sliders",
      tagline: "Set up risk preferences to match your personal comfort levels",
      bullets: [
        "Lets you manually select which safety indicators matter most to you.",
        "Includes smooth sliders to adjust percentages for each specific risk factor.",
        "Tracks adjustments in real time to ensure total weightage adds up to 100%.",
        "Saves your custom weight choices directly to your profile with a single tap."
      ],
      rightFeatures: [
        { title: "Risk Factor Checkboxes", desc: "Pick indicators like Weather, Crime, or Lighting to calculate." },
        { title: "Interactive Sliders", desc: "Slide left or right to change weights for different path factors." },
        { title: "Save Preferences Button", desc: "Instantly locks in your personalized percentages with one click." }
      ]
    },
    {
      id: "MAIN",
      tabLabel: "Job Receiver",
      sector: "Map Navigation",
      title: "Live Map Grid Terminal",
      tagline: "Go online to broadcast your location and receive student ride requests",
      bullets: [
        "Features a large interactive university campus map tracking layout screen.",
        "Includes a prominent 'GO ONLINE' button to open and close your active shifts.",
        "Places blue pinpoint markers across local campus hotspots and buildings.",
        "Shows incoming student requests as pop-up badges directly over the map track."
      ],
      rightFeatures: [
        { title: "Go Online / Offline Switch", desc: "Tap to make yourself visible or hidden to students looking for rides." },
       
        { title: "Ride Request Pins", desc: "Interactive map pop-ups showing how far away a student pick-up is." }
      ]
    },
    {
      id: "ANAL",
      tabLabel: "Analysis",
      sector: "Pre-Trip Evaluation",
      title: "Interactive Safety Reports",
      tagline: "Check detailed risk alerts and adjusted fares before accepting jobs",
      bullets: [
        "Generates a multi-colored radar chart displaying 6 different risk vectors.",
        "Labels safety zones clearly using simple categories (Very Safe, Moderate Safe).",
        "Breaks down individual danger percentages (Crime Rate, Accident History).",
        "Calculates an optimized Safety-Adjusted Fare premium before you press Accept."
      ],
      rightFeatures: [
        { title: "Visual Radar Graph", desc: "A spider chart displaying lighting, weather, and road conditions." },
        { title: "Risk Level Badges", desc: "Color-coded rating dials showing the calculated path safety score." },
        { title: "Accept / Decline Locks", desc: "Gives you complete freedom to view charts and pick your rides safely." }
      ]
    }
  ];

  const activeModule = modules[activeTab];

  return (
    <div className={styles.pageContainer}>
      <span className={styles.topSectionBadge}>Core Features</span>
      <h2 className={styles.mainPageTitle}>How the App Works</h2>
      <p className={styles.mainPageSubtitle}>Explore the functional sections built for our campus platform</p>

      <div className={styles.useCaseWorkspace}>
        {/* --- HORIZONTAL NAVIGATION TABS --- */}
        <div className={styles.tabsHeaderBar}>
          {modules.map((mod, idx) => (
            <button
              key={mod.id}
              className={`${styles.tabTriggerButton} ${activeTab === idx ? styles.tabTriggerActive : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className={styles.tabIconDecoration}>📁</span>
              {mod.tabLabel}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC SPLIT DISPLAY CORE --- */}
        <div className={styles.splitContentBody}>
          
          {/* Left Text Block */}
          <div className={styles.contentLeftColumn}>
            <span className={styles.sectorCategoryBadge}>{activeModule.sector}</span>
            <h3 className={styles.sectorMainTitle}>{activeModule.title}</h3>
            <p className={styles.sectorTaglineDesc}>{activeModule.tagline}</p>

            <ul className={styles.bulletPointsList}>
              {activeModule.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className={styles.bulletItemRow}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span className={styles.bulletTextContent}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Highlight Box Card */}
          <div className={styles.contentRightColumn}>
            <div className={styles.featureHighlightContainerCard}>
              <div className={styles.innerCardNeonLineTL}></div>
              <div className={styles.innerCardNeonLineBR}></div>

              <div className={styles.featuresStackLayoutList}>
                {activeModule.rightFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className={styles.featureListItemRow}>
                    <div className={styles.featureIconBlockAvatar}>
                      <span className={styles.innerAvatarIcon}>⚡</span>
                    </div>
                    <div className={styles.featureTextWrapperMeta}>
                      <h4 className={styles.featureBlockHeadingTitle}>{feat.title}</h4>
                      <p className={styles.featureBlockParagraphDesc}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}