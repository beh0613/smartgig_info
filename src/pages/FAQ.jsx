import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '../styles/FAQ.module.css';

// Initialize your configuration tokens
const supabaseUrl = 'https://ktpoodufzfbxmtuafdsy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cG9vZHVmemZieG10dWFmZHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODIyMjAsImV4cCI6MjA5Njc1ODIyMH0.lTqEnDXzNuILZqFNfR598cdelsnaRm2k_MNDkYPTRXs';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  // Input fields state tracking variables
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [developerReplyText, setDeveloperReplyText] = useState("");

  // --- FETCH QUESTIONS FROM SUPABASE ---
  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from('user_faqs')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (!error && data) setFaqs(data);
  };

  useEffect(() => {
    fetchQuestions();

    // --- SECURE SHORTCUT LISTENER (Ctrl + Shift + D) ---
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        if (isDeveloperMode) {
          setIsDeveloperMode(false);
        } else {
          setShowAuthModal(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDeveloperMode]);

  // --- AUTHENTICATION RESOLVER (PLAIN TEXT OVERRIDE) ---
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");

    // Queries the table directly using the raw text entered by the user
    const { data, error } = await supabase
      .from('admin_credentials')
      .select('id')
      .eq('secret_key_hash', passwordInput.trim()) 
      .maybeSingle();

    if (data) {
      setIsDeveloperMode(true);
      setShowAuthModal(false);
      setPasswordInput("");
    } else {
      setAuthError("Invalid decryption key credentials.");
    }
  };

  // --- USER TRANSMISSION HANDLER ---
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    const { error } = await supabase
      .from('user_faqs')
      .insert([{ question_text: userQuestion.trim(), is_custom: true }]);

    if (!error) {
      setUserQuestion("");
      fetchQuestions();
    }
  };

  // --- DEVELOPER REPLY TRANSITION HANDLER ---
  const handleDeveloperReplySubmit = async (id) => {
    if (!developerReplyText.trim()) return;

    const { error } = await supabase
      .from('user_faqs')
      .update({ 
        answer_text: developerReplyText.trim(),
        answered_at: new Date().toISOString()
      })
      .eq('id', id);

    if (!error) {
      setDeveloperReplyText("");
      setActiveReplyId(null);
      fetchQuestions();
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.lightCyberGridBG}></div>

      {isDeveloperMode && (
        <div className={styles.developerActiveBanner}>
          <span>⚠️ TERMINAL LEVEL ACCESS ACCREDITED — DEVELOPER DASHBOARD ACTIVE</span>
          <button onClick={() => setIsDeveloperMode(false)} className={styles.logoutBtn}>Lock Portal</button>
        </div>
      )}

      <div className={styles.wideSection}>
        <div className={styles.titleContainer}>
          <span className={styles.metaLabelCentred}>Support System Architecture</span>
          <h2 className={styles.cyberTitle}>Frequently Asked Questions</h2>
          <p className={styles.cyberSubtitle}>Academic overview logs, evaluation records, and live database telemetry syncs.</p>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.faqList}>
          {faqs.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.faqCard3D} ${item.is_custom && !item.answer_text ? styles.pendingCard : ''}`}
            >
              <div className={styles.neonCornerTL}></div>
              <div className={styles.neonCornerBR}></div>

              <div className={styles.faqHeaderRow}>
                <h3 className={styles.faqQuestion}>❓ {item.question_text}</h3>
                {item.is_custom && (
                  <span className={item.answer_text ? styles.badgeResolved : styles.badgePending}>
                    {item.answer_text ? "Answered by Dev" : "Pending Dev Review"}
                  </span>
                )}
              </div>

              {item.answer_text ? (
                <p className={styles.faqAnswer}>{item.answer_text}</p>
              ) : (
                <p className={styles.noAnswerNotice}>⏳ Awaiting secure terminal response transmission package...</p>
              )}

              {isDeveloperMode && !item.answer_text && (
                <div className={styles.developerControlArea}>
                  {activeReplyId === item.id ? (
                    <div className={styles.replyForm}>
                      <textarea
                        className={styles.devTextArea}
                        placeholder="Write technical response..."
                        value={developerReplyText}
                        onChange={(e) => setDeveloperReplyText(e.target.value)}
                        rows={3}
                      />
                      <div className={styles.replyActionRow}>
                        <button className={styles.submitReplyBtn} onClick={() => handleDeveloperReplySubmit(item.id)}>
                          Commit to DB
                        </button>
                        <button className={styles.cancelReplyBtn} onClick={() => setActiveReplyId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <button className={styles.initiateReplyBtn} onClick={() => { setActiveReplyId(item.id); setDeveloperReplyText(""); }}>
                      🖋️ Resolve Pending Token Matrix
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!isDeveloperMode && (
          <div className={styles.submissionBox3D}>
            <div className={styles.formHeader}>
              <span className={styles.formMeta}>Secure Transmissions</span>
              <h3 className={styles.formTitle}>Can't find your answer?</h3>
              <p className={styles.formSubtitle}>Submit a query directly to the development pipeline.</p>
            </div>
            
            <form onSubmit={handleUserSubmit} className={styles.userForm}>
              <textarea
                className={styles.userTextArea}
                placeholder="Type system engineering inquiries here..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                rows={4}
                required
              />
              <button type="submit" className={styles.sendQuestionBtn}>
                Transmit Parameter Call
              </button>
            </form>
          </div>
        )}
      </div>

      {showAuthModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.neonCornerTL}></div>
            <div className={styles.neonCornerBR}></div>
            <h3 className={styles.modalTitle}>🔐 System Authentication</h3>
            <p className={styles.modalDescription}>Enter plain-text developer verification key.</p>
            <form onSubmit={handleAuthSubmit}>
              <input
                type="password"
                className={styles.modalInput}
                placeholder="Password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
                autoFocus
              />
              {authError && <p className={styles.authError}>{authError}</p>}
              <div className={styles.modalActionRow}>
                <button type="submit" className={styles.modalSubmitBtn}>Verify Auth</button>
                <button type="button" className={styles.modalCancelBtn} onClick={() => { setShowAuthModal(false); setPasswordInput(""); setAuthError(""); }}>Abort</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}