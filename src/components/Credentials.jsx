import { useState } from 'react'
import { X } from 'lucide-react'
import cert1 from '../assets/image4.jpg'
import cert2 from '../assets/image5.jpg'
import cert3 from '../assets/image6.jpg'
import { useInView } from '../hooks/useInView.js'
import styles from './Credentials.module.css'

const tools = [
  { name: 'Notion',           icon: 'ti-layout',        color: '#393e41', bg: '#f0f0f0' },
  { name: 'Asana',            icon: 'ti-circle-check',  color: '#e94f37', bg: '#fce8e5' },
  { name: 'Slack',            icon: 'ti-message-2',     color: '#4a154b', bg: '#f0e8f5' },
  { name: 'HubSpot',          icon: 'ti-chart-bar',     color: '#ff7a59', bg: '#fff3e0' },
  { name: 'Google Workspace', icon: 'ti-brand-google',  color: '#34a853', bg: '#e8f5e9' },
  { name: 'Zoom',             icon: 'ti-video',         color: '#2D8CFF', bg: '#e3f2fd' },
  { name: 'Trello',           icon: 'ti-brand-trello',  color: '#0052CC', bg: '#e8effe' },
  { name: 'Zapier',           icon: 'ti-bolt',          color: '#FF4A00', bg: '#fff0eb' },
]

const certs = [
  { img: cert1, label: 'Certified Real Estate VA', position: 'center top'  },
  { img: cert2, label: 'Virtual Assistant Pro',    position: 'center 15%' },
  { img: cert3, label: 'Insurance Commission',     position: 'center 10%' },
]

export default function Credentials() {
  const [ref, visible] = useInView()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="credentials" ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Credentials &amp; Tools</p>
          <h2 className={styles.heading}>Certified, Skilled &amp; Ready to Work</h2>
        </div>

        {/* ── Tools ── */}
        <div className={styles.divRow}>
          <span className={styles.divLine} />
          <span className={styles.divLabel}>Tools I Use</span>
          <span className={styles.divLine} />
        </div>

        <div className={styles.toolsGrid}>
          {tools.map(({ name, icon, color, bg }, i) => (
            <div
              key={name}
              className={styles.toolBadge}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
              }}
            >
              <div className={styles.toolIcon} style={{ background: bg }}>
                <i className={`ti ${icon}`} aria-hidden="true" style={{ color, fontSize: 18 }} />
              </div>
              <span className={styles.toolName}>{name}</span>
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className={styles.divRow} style={{ marginTop: 48 }}>
          <span className={styles.divLine} />
          <span className={styles.divLabel}>Certifications</span>
          <span className={styles.divLine} />
        </div>

        <div className={styles.certsGrid}>
          {certs.map(({ img, label, position }, i) => (
            <div
              key={label}
              className={styles.certCard}
              onClick={() => setLightbox({ img, label })}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s,
                             transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
            >
              <div className={styles.certImgWrap}>
                <img
                  src={img}
                  alt={label}
                  className={styles.certImg}
                  style={{ objectPosition: position }}
                />
                <div className={styles.certOverlay}>
                  <div className={styles.certOverlayContent}>
                    <i className="ti ti-zoom-in" aria-hidden="true" style={{ fontSize: 28, color: '#fff' }} />
                    <span className={styles.certViewText}>View Full Image</span>
                  </div>
                  <span className={styles.certBadge}>Certified</span>
                </div>
              </div>
              <div className={styles.certFooter}>
                <i className="ti ti-award" aria-hidden="true" style={{ fontSize: 18, color: '#e94f37' }} />
                <span className={styles.certLabel}>{label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <img
              src={lightbox.img}
              alt={lightbox.label}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxFooter}>
              <i className="ti ti-award" aria-hidden="true" style={{ fontSize: 16, color: '#e94f37' }} />
              <span className={styles.lightboxLabel}>{lightbox.label}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}