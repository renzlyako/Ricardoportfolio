import { useState } from 'react'
import { X } from 'lucide-react'
import styles from './Footer.module.css'

const PRIVACY_CONTENT = {
  title: 'Privacy Policy',
  lastUpdated: 'June 2026',
  sections: [
    { heading: 'Information We Collect', body: `When you use the contact form on this website, we collect your name, email address, and any information you voluntarily provide in your message. We do not collect any sensitive personal information beyond what you choose to share.` },
    { heading: 'How We Use Your Information', body: `The information you provide is used solely to respond to your inquiry and communicate with you about potential services. Your contact details will never be sold, rented, or shared with third parties for marketing purposes.` },
    { heading: 'Email Communications', body: `By submitting the contact form, you consent to receiving a reply from Airick Roque regarding your inquiry. You may opt out of further communications at any time by simply replying to any email with "Unsubscribe" in the subject line.` },
    { heading: 'Data Storage & Security', body: `Your messages are processed through EmailJS, a secure third-party email delivery service. We do not store your personal information on our servers beyond what is necessary to respond to your inquiry.` },
    { heading: 'Cookies', body: `This website does not use tracking cookies or analytics tools that collect personally identifiable information. Basic browser session data may be used for site functionality only.` },
    { heading: 'Third-Party Links', body: `This site may contain links to social media profiles (Facebook, Instagram, TikTok). We are not responsible for the privacy practices of those external platforms and encourage you to review their individual privacy policies.` },
    { heading: 'Contact', body: `If you have any questions about this Privacy Policy, please reach out via the contact form on this website or email directly at the address provided in the Contact section.` },
  ],
}

const TERMS_CONTENT = {
  title: 'Terms & Conditions',
  lastUpdated: 'June 2026',
  sections: [
    { heading: 'Acceptance of Terms', body: `By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.` },
    { heading: 'Services Description', body: `This website serves as a professional portfolio for Airick Roque, offering virtual assistant, insurance, real estate marketing, product affiliates, event hosting, and web systems development services. The information presented is for general informational purposes.` },
    { heading: 'No Guarantee of Results', body: `While every effort is made to deliver high-quality services, results may vary based on individual circumstances. Testimonials and case studies presented on this site reflect individual experiences and are not guarantees of future results.` },
    { heading: 'Intellectual Property', body: `All content on this website — including text, images, design, and branding — is the property of Airick Roque. Unauthorized reproduction or use of any content without written permission is strictly prohibited.` },
    { heading: 'Service Agreements', body: `Any formal service engagement between you and Airick Roque will be governed by a separate written agreement. Submitting the contact form does not constitute a binding contract or guarantee of service availability.` },
    { heading: 'Limitation of Liability', body: `Airick Roque shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or the services described herein, to the fullest extent permitted by applicable law.` },
    { heading: 'Changes to Terms', body: `These Terms and Conditions may be updated from time to time. Continued use of this website following any changes constitutes your acceptance of the revised terms. The last updated date will always be shown at the top of this document.` },
    { heading: 'Governing Law', body: `These terms are governed by the laws of the Republic of the Philippines. Any disputes arising from these terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of the Philippines.` },
  ],
}

function Modal({ content, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{content.title}</h2>
            <p className={styles.modalDate}>Last updated: {content.lastUpdated}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <div className={styles.modalBody}>
          {content.sections.map((sec, i) => (
            <div key={i} className={styles.modalSection}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.sectionNum}>{i + 1}</span>
                {sec.heading}
              </h3>
              <p className={styles.sectionBody}>{sec.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.modalFooter}>
          <p className={styles.modalFooterText}>
            Questions? Reach out via the contact form on this website.
          </p>
          <button className={styles.modalCloseBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <span className={styles.logoAccent}>Meet</span>Airick
          </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Airick Roque · Financial Advisor Assistant · All Rights Reserved
          </p>
          <div className={styles.links}>
            <button
              className={styles.link}
              onClick={() => setActiveModal('privacy')}
            >
              Privacy
            </button>
            <button
              className={styles.link}
              onClick={() => setActiveModal('terms')}
            >
              Terms
            </button>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {activeModal === 'privacy' && (
        <Modal content={PRIVACY_CONTENT} onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'terms' && (
        <Modal content={TERMS_CONTENT} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}