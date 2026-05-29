import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { testimonials } from '../data/index.js'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [ref, visible] = useInView()

  return (
    <section id="testimonials" ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.heading}>What Clients Are Saying</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map(({ name, role, text, rating }, i) => (
            <div
              key={name}
              className={styles.card}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s,
                             transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
              }}
            >
              <div className={styles.stars}>
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-red)" color="var(--color-red)" />
                ))}
              </div>
              <p className={styles.text}>"{text}"</p>
              <div className={styles.author}>
                <div className={styles.authorName}>{name}</div>
                <div className={styles.authorRole}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
