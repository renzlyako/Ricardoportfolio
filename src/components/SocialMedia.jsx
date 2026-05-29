import { useInView } from '../hooks/useInView.js'
import styles from './SocialMedia.module.css'

const platforms = [
  {
    name:      'Facebook',
    icon:      'ti-brand-facebook',
    iconColor: '#1877f2',
    iconBg:    'rgba(24,119,242,0.12)',
    followers: '13K',
    label:     'Followers',
    link:      'https://www.facebook.com/share/18KQsvRYzK/?mibextid=wwXIfr',
  },
  {
    name:      'Instagram',
    icon:      'ti-brand-instagram',
    iconColor: '#e1306c',
    iconBg:    'rgba(225,48,108,0.12)',
    followers: '1,694',
    label:     'Followers',
    link:      'https://www.instagram.com/riroque_ai?igsh=MWJvMWQxNnQzY2p4dw==',
  },
  {
    name:      'TikTok',
    icon:      'ti-brand-tiktok',
    iconColor: '#f6f7eb',
    iconBg:    'rgba(246,247,235,0.08)',
    followers: '5,032',
    label:     'Followers',
    link:      'https://www.tiktok.com/@tmairickroque?_r=1&_t=ZS-96kk4EGLbzY',
  },
]

export default function SocialMedia() {
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Social Media</p>
          <h2 className={styles.heading}>Follow the Journey</h2>
          <p className={styles.subtext}>
            Stay updated — behind the scenes, tips, and client wins
          </p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {platforms.map(({ name, icon, iconColor, iconBg, followers, label, link }, i) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s,
                             transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
              }}
            >
              <div className={styles.iconWrap} style={{ background: iconBg }}>
                <i className={`ti ${icon}`} aria-hidden="true" style={{ color: iconColor, fontSize: 28 }} />
              </div>
              <p className={styles.platformName}>{name}</p>
              <p className={styles.followerCount}>{followers}</p>
              <p className={styles.followerLabel}>{label}</p>
              <span className={styles.followBadge}>
                <i className="ti ti-arrow-right" aria-hidden="true" style={{ fontSize: 13 }} />
                Follow
              </span>
            </a>
          ))}
        </div>

        {/* CTA row */}
        <div className={styles.ctaRow}>
          <a
            href="https://www.facebook.com/share/18KQsvRYzK/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
            >
            <i className="ti ti-heart" aria-hidden="true" style={{ fontSize: 16 }} />
            Follow All Accounts
          </a>
          <a
            href="https://www.tiktok.com/@tmairickroque?_r=1&_t=ZS-96kk4EGLbzY"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaOutline}
          >
            <i className="ti ti-external-link" aria-hidden="true" style={{ fontSize: 16 }} />
            View Latest Posts
          </a>
        </div>

      </div>
    </section>
  )
}