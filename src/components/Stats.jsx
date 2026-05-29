import { useInView } from '../hooks/useInView.js'
import { stats } from '../data/index.js'
import styles from './Stats.module.css'

export default function Stats() {
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.grid}>
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={styles.item}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}
          >
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
