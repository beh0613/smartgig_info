import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

// IMPORT THE INITIALIZED SUPABASE CLIENT INSTANCE
import { supabase } from '../supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  // track if submission was successful ('idle', 'success', or 'error')
  const [submitStatus, setSubmitStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('demo_requests') 
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Toggle status to successful display layout
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', organization: '', message: '' });

    } catch (error) {
      console.error("Database entry insertion error log:", error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPageBg}>
      <div className={styles.contactContainer}>
        
        {/* LEFT COLUMN: DEVELOPER INFORMATION */}
        <div className={styles.infoSide}>
          <h2 className={styles.contactHeading}>Connect & Collaborate</h2>
          <p className={styles.contactSubtext}>
            Have questions regarding the SmartGig trust logic parameters, or interested in evaluating our datasets? Reach out directly via the academic platform channels.
          </p>
          
          <div className={styles.personalDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>✉️</span>
              <div>
                <label className={styles.detailLabel}>Gmail Address</label>
                <a href="mailto:codebeh613@gmail.com" className={styles.detailLink}>codebeh613@gmail.com</a>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🔗</span>
              <div>
                <label className={styles.detailLabel}>LinkedIn Profile</label>
                <a href="https://www.linkedin.com/in/behkahmeng" target="_blank" rel="noreferrer" className={styles.detailLink}>linkedin.com/in/behkahmeng</a>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🏛️</span>
              <div>
                <label className={styles.detailLabel}>Institution Location</label>
                <p className={styles.detailValue}>Universiti Utara Malaysia (UUM)</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CONNECTIONS FORM / SUCCESS CARD */}
        <div className={styles.formCard}>
          {submitStatus === 'success' ? (
            /* --- INLINE SUCCESS WINDOW BLOCK --- */
            <div className={styles.successMessageBlock}>
              <div className={styles.successCheckmarkIcon}>🎉</div>
              <h3>Demo Requested Successfully!</h3>
              <p>Your details have been securely written to our Supabase cloud tables. The platform evaluation nodes will respond shortly.</p>
              <button 
                className={styles.resetButton} 
                onClick={() => setSubmitStatus('idle')}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* --- THE ACTIVE INPUT FORM SUBSECTION --- */
            <form className={styles.form} onSubmit={handleSubmit}>
              {submitStatus === 'error' && (
                <div className={styles.errorMessageBlock}>
                  ⚠️ Database Connection Timeout. Please check your config parameters.
                </div>
              )}

              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className={styles.input} 
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Gmail Address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className={styles.input} 
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className={styles.input} 
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="organization"
                  placeholder="Organization / University" 
                  value={formData.organization} 
                  onChange={handleChange} 
                  required 
                  className={styles.input} 
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea 
                  name="message"
                  placeholder="Message details..." 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className={styles.textarea}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.formButton} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing Connection...' : 'Request Demo'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}