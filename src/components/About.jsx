import { useInView } from '../hooks/useInView.js'
import { skillTags, skillBars } from '../data/index.js'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className={styles.container}>
        {/* ── Left — copy ── */}
        <div
          className={styles.left}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(-30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.heading}>I Turn Overwhelm Into Order</h2>
          <p className={styles.body}>
            With 5+ years of experience supporting founders, executives, and
            growing teams, I specialize in taking the operational load off your
            plate — from inbox management to complex project coordination.
          </p>
          <p className={styles.body}>
            I'm detail-obsessed, communication-first, and tech-savvy. Whether
            you need a few hours a week or full-time dedicated support, I adapt
            to your workflow and tools.
          </p>

          <div className={styles.tags}>
            {skillTags.map((sk) => (
              <span key={sk} className={styles.tag}>{sk}</span>
            ))}
          </div>
        </div>

        {/* ── Right — bars + quote ── */}
        <div
          className={styles.right}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}
        >
          <div className={styles.bars}>
            {skillBars.map(({ label, pct }, i) => (
              <div key={label} className={styles.barItem}>
                <div className={styles.barHeader}>
                  <span className={styles.barLabel}>{label}</span>
                  <span className={styles.barPct}>{pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{
                      width: visible ? `${pct}%` : '0%',
                      transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.quote}>
            <p className={styles.quoteText}>
              "My goal is simple: make your life easier. Every task I take on
              is one less thing on your plate."
            </p>
            <div className={styles.quoteAuthor}>— Airick Roque</div>
          </div>
        </div>
      </div>
    </section>
  )
}
