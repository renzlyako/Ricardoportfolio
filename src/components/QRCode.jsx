import { useInView } from '../hooks/useInView.js'
import styles from './QRCode.module.css'
import qrImage from '../assets/qr-code.svg'

export default function QRCode() {
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* Left — text */}
        <div
          className={styles.left}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className={styles.eyebrow}>Quick Access</p>
          <h2 className={styles.heading}>
            Interested in My<br />Services?
          </h2>
          <p className={styles.subtext}>
            Scan the QR code to view the complete list of services I offer.
            If anything catches your eye, just fill up the contact form below
            and let's get started!
          </p>

          <div className={styles.features}>
            {[
              { icon: 'ti-list-check', label: 'Browse all available services'      },
              { icon: 'ti-file-text',  label: 'View detailed service descriptions' },
              { icon: 'ti-forms',      label: 'Fill up the form to get started'    },
              { icon: 'ti-clock',      label: 'Available anytime, anywhere'        },
            ].map(({ icon, label }) => (
              <div key={label} className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <i className={`ti ${icon}`} aria-hidden="true" style={{ fontSize: 16 }} />
                </div>
                <span className={styles.featureLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — QR card */}
        <div
          className={styles.right}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(30px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          <div className={styles.qrCard}>

            {/* Card header */}
            <div className={styles.qrCardHeader}>
              <div className={styles.qrCardIcon}>
                <i className="ti ti-brand-google-drive" aria-hidden="true" style={{ fontSize: 20, color: '#e94f37' }} />
              </div>
              <div>
                <p className={styles.qrCardTitle}>Services Document</p>
                <p className={styles.qrCardSub}>Scan → Read → Fill the form below</p>
              </div>
            </div>

            {/* QR image */}
            <div className={styles.qrImgWrap}>
              <img
                src={qrImage}
                alt="Scan to view services on Google Docs"
                className={styles.qrImg}
              />
            </div>

            {/* Footer instruction */}
            <div className={styles.qrFooter}>
              <i className="ti ti-scan" aria-hidden="true" style={{ fontSize: 18, color: '#e94f37' }} />
              <p className={styles.qrFooterText}>
                Point your phone camera at the QR code to open instantly
              </p>
            </div>

            {/* Animated corner accents */}
            <span className={`${styles.corner} ${styles.cornerTL}`} />
            <span className={`${styles.corner} ${styles.cornerTR}`} />
            <span className={`${styles.corner} ${styles.cornerBL}`} />
            <span className={`${styles.corner} ${styles.cornerBR}`} />

          </div>
        </div>

      </div>
    </section>
  )
}