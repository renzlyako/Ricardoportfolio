import cert1 from '../assets/image4.jpg'
import cert2 from '../assets/image5.jpg'
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
  { img: cert1, label: 'Certified Real Estate VA'  },
  { img: cert2, label: 'Virtual Assistant Pro'     },
]

export default function Credentials() {
  const [ref, visible] = useInView()

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
          {certs.map(({ img, label }, i) => (
            <div
              key={label}
              className={styles.certCard}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s,
                             transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
            >
              <div className={styles.certImgWrap}>
                <img src={img} alt={label} className={styles.certImg} />
                <div className={styles.certOverlay}>
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
    </section>
  )
}