import React, { useState } from 'react';
import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const [activeStep, setActiveTabStep] = useState(0);
  
  // Local state to track which sub-video is playing inside Step 8
  const [step8VideoMode, setStep8VideoMode] = useState("default"); // "default" or "personalized"

  // --- MATCHED WITH YOUR EXACT LOCAL VIDEOS DIRECTORY FILENAMES ---
  const videoAssets = {
    1: "/videos/1.mp4",
    2: "/videos/2.mp4",
    3: "/videos/3.mp4",
    4: "/videos/4.mp4",
    5: "/videos/5.mp4",
    6: "/videos/6.mp4",
    7: "/videos/7.mp4",
    
    // Step 8 Dual-Weight Portrait Video Mappings
    "8_default": "/videos/8_1.mp4",
    "8_personalized": "/videos/8_2.mp4",
    
    9: "/videos/9.mp4" 
  };

  const steps = [
    {
      id: 1,
      badge: "Step 01",
      title: "Create an Account",
      desc: "Fill in your basic personal details like name, email, phone number, and choose a secure password to get started.",
      highlights: ["Personal details form", "Choose account password", "Basic setup completed"]
    },
    {
      id: 2,
      badge: "Step 02",
      title: "Verify Identity",
      desc: "Upload a photo of your government Identity Card (IC) and driving license to verify your identity and keep the platform safe.",
      highlights: ["IC front & back upload", "Driving license check", "Security verification"]
    },
    {
      id: 3,
      badge: "Step 03",
      title: "Submit Vehicle Info",
      desc: "Provide your car details including the model, plate number, year, and upload your official vehicle registration form and active road tax token.",
      highlights: ["Car model & plate input", "Vehicle registration form", "Road tax documentation"]
    },
    {
      id: 4,
      badge: "Step 04",
      title: "Login with Gmail",
      desc: "Once your registration profile gets audited and approved, log into the active driver portal using your secure student Gmail account.",
      highlights: ["Google Single Sign-On", "Project ID assignment", "Secure profile access"]
    },
    {
      id: 5,
      badge: "Step 05",
      title: "Driver Dashboard",
      desc: "View your active driver profile summary, track your total wallet earnings revenue balance, and select your preferred calculation mode.",
      highlights: ["Total wallet tracking", "View profile settings", "Toggle default vs personal mode"]
    },
    {
      id: 6,
      badge: "Step 06",
      title: "Personalize Safety Weights",
      desc: "Adjust intuitive threshold sliders to manually change the importance of different risk factors based on your own comfort levels.",
      highlights: ["Custom slider percentages", "Adjust risk factors", "Save custom preferences"]
    },
    {
      id: 7,
      badge: "Step 07",
      title: "Main Page & Fetch Jobs",
      desc: "Tap the main 'GO ONLINE' button on the live map canvas to open the queue tracks, broadcast coordinates, and wait for customer ride dispatches.",
      highlights: ["Tap Go Online button", "Live location pinpointing", "Receive real-time request pings"]
    },
    {
      id: 8,
      badge: "Step 08",
      title: "View Safety Analysis",
      desc: "Click on any incoming ride request to immediately view a complete radar graph analysis. Switch between Default and Personalized weight configurations to check your updated risk scores.",
      highlights: ["Passenger behavior scan", "Environmental condition checks", "Dynamic dual-weight recalculations"]
    },
    {
      id: 9,
      badge: "Step 09",
      title: "Logout of Session",
      desc: "Safely disconnect from the active driver network and terminate your session state by tapping the logout action in the navigation deck menu.",
      highlights: ["Clear geolocation hooks", "Destroy active auth session", "Return to login screen"]
    }
  ];

  const currentStep = steps[activeStep];
  
  // Resolve current active video path string dynamically
  const currentVideoSrc = currentStep.id === 8 
    ? videoAssets[`8_${step8VideoMode}`]
    : videoAssets[currentStep.id];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.lightCyberGridBG}></div>

      <div className={styles.wideSection}>
        <div className={styles.titleContainer}>
          <span className={styles.metaLabelCentred}>User Guide Overview</span>
          <h2 className={styles.cyberTitle}>How SmartGig Works</h2>
          <p className={styles.cyberSubtitle}>Follow our simple step-by-step process timeline to set up your account, personalize your parameters, and preview ride request safety reports.</p>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.interactiveWorkflowShell}>
          
          {/* LEFT SIDE: TIMELINE TREE TREE */}
          <div className={styles.timelineSelectionColumn}>
            <div className={styles.verticalTimelineTreeLine}></div>
            
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                className={`${styles.timelineButtonCard} ${activeStep === idx ? styles.cardActiveState : ''}`}
                onClick={() => setActiveTabStep(idx)}
              >
                <div className={`${styles.timelineBubbleNode} ${activeStep === idx ? styles.bubbleNodeActive : ''}`}>
                  <span className={styles.nodeNumberInner}>{step.id < 10 ? `0${step.id}` : step.id}</span>
                </div>

                <div className={styles.cardHeaderIndicatorRow}>
                  <span className={styles.stepPhaseCounter}>{step.badge}</span>
                </div>
                <h3 className={styles.cardHeaderTitleText}>{step.title}</h3>
                <p className={styles.cardHeaderBriefText}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: MONITOR VIDEO MONITOR (PORTRAIT SMARTPHONE RENDER DEPTH) */}
          <div className={styles.terminalDisplayColumn}>
            <div className={styles.stickyTerminalFrame}>
              <div className={styles.neonCornerTL}></div>
              <div className={styles.neonCornerBR}></div>
              
              <div className={styles.terminalHeaderHeader}>
                <div className={styles.terminalDotCircleRow}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.terminalHeaderText}>
                  SMARTGIG_MEDIA_MONITOR // STEP_{currentStep.id < 10 ? `0${currentStep.id}` : currentStep.id}
                </span>
              </div>

              <div className={styles.terminalBodyContent}>
                
                {/* --- SUB-VIDEO SELECTOR FOR STEP 8 --- */}
                {currentStep.id === 8 && (
                  <div className={styles.videoModeToggleBar}>
                    <button 
                      className={`${styles.toggleModeBtn} ${step8VideoMode === 'default' ? styles.toggleModeBtnActive : ''}`}
                      onClick={() => setStep8VideoMode("default")}
                    >
                      📊 Default Weightage
                    </button>
                    <button 
                      className={`${styles.toggleModeBtn} ${step8VideoMode === 'personalized' ? styles.toggleModeBtnActive : ''}`}
                      onClick={() => setStep8VideoMode("personalized")}
                    >
                      ⚙️ Personalized Weightage
                    </button>
                  </div>
                )}

                <div className={styles.videoPlayerContainer}>
                  <video 
                    key={`${currentStep.id}_${step8VideoMode}`} // Forces player re-render on video switch
                    className={styles.terminalVideoNode}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={currentVideoSrc} type="video/mp4" />
                    Your device browser lacks native MP4 playback codecs.
                  </video>
                  <div className={styles.videoOverlayGlow}></div>
                </div>

                <span className={styles.displayBadgeBadge}>
                  {currentStep.id === 8 ? `Step 08 — ${step8VideoMode.toUpperCase()} MODE` : currentStep.badge}
                </span>
                <h3 className={styles.displayHeadingTitleText}>{currentStep.title}</h3>
                
                <div className={styles.technicalNodesTerminalBlock}>
                  <span className={styles.nodesSectionTitleText}>Key Features Checked:</span>
                  <div className={styles.nodesGridMatrix}>
                    {currentStep.highlights.map((token, tIdx) => (
                      <div key={tIdx} className={styles.tokenTagChipItem}>
                        <span className={styles.tokenBulletSymbol}>✓</span>
                        <span className={styles.tokenCodeText}>{token}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}