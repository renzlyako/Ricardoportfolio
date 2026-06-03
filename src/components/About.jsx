import { useInView } from '../hooks/useInView.js'
import visionImg from '../assets/vision.jpg'
import missionImg from '../assets/mission.jpg'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className={styles.container}>

        {}
        <div
          className={styles.header}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.heading}>Meet Kuya Future</h2>
          <p className={styles.subheading}>
            Empowering people to build a better, financially secure life through
            real estate, insurance, digital work, and online growth strategies.
          </p>
        </div>

        {}
        <div
          className={styles.row}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(-30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}
        >
          {}
          <div className={styles.textBlock}>
            <div className={styles.labelWrap}>
              <div className={styles.labelIcon}>
                <i className="ti ti-eye" aria-hidden="true" style={{ fontSize: 18 }} />
              </div>
              <span className={styles.label}>Vision</span>
            </div>
            <h3 className={styles.blockHeading}>
              Building a Future of Freedom & Security
            </h3>
            <p className={styles.body}>
              To empower individuals to build a secure, flexible, and
              opportunity-rich future, where financial stability, multiple
              income streams, and smart investments create freedom and
              peace of mind.
            </p>
            <div className={styles.accentLine} />
          </div>

          {}
          <div className={styles.imgBlock}>
            <div className={styles.imgWrap}>
              <img src={visionImg} alt="Vision" className={styles.img} />
              <div className={styles.imgOverlay} />
              <div className={styles.imgBadge}>
                <i className="ti ti-eye" aria-hidden="true" style={{ fontSize: 14 }} />
                Our Vision
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className={styles.divider}
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        />

        {}
        <div
          className={styles.row}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
          }}
        >
          {}
          <div className={styles.imgBlock}>
            <div className={styles.imgWrap}>
              <img src={missionImg} alt="Mission" className={styles.img} />
              <div className={styles.imgOverlay} />
              <div className={styles.imgBadge}>
                <i className="ti ti-target" aria-hidden="true" style={{ fontSize: 14 }} />
                Our Mission
              </div>
            </div>
          </div>

          {}
          <div className={styles.textBlock}>
            <div className={styles.labelWrap}>
              <div className={styles.labelIcon}>
                <i className="ti ti-target" aria-hidden="true" style={{ fontSize: 18 }} />
              </div>
              <span className={styles.label}>Mission</span>
            </div>
            <h3 className={styles.blockHeading}>
              Guiding Smarter Life & Financial Decisions
            </h3>
            <p className={styles.body}>
              As Kuya Future, my mission is to guide people in making smarter
              life and financial decisions through accessible services in real
              estate, insurance, digital work opportunities, and online growth
              strategies. I aim to help clients protect what they have, grow
              what they earn, and unlock new income paths in today's digital world.
            </p>
            <div className={styles.accentLine} />
          </div>
        </div>

      </div>
    </section>
  )
}