import { useState } from 'react'
import {
  Home, Tag, Shield, CalendarDays, Laptop, TrendingUp,
  ArrowRight, X, CheckCircle,
} from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { services } from '../data/index.js'
import styles from './Services.module.css'

const ICONS = { Home, Tag, Shield, CalendarDays, Laptop, TrendingUp }

export default function Services() {
  const [ref, visible] = useInView()
  const [active, setActive] = useState(null)

  const open  = (i) => setActive(i)
  const close = ()  => setActive(null)

  return (
    <section id="services" ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>What I Do</p>
          <h2 className={styles.heading}>
            Services Built Around<br />Your Business
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {services.map(({ iconName, title, desc }, i) => {
            const Icon = ICONS[iconName]
            return (
              <div
                key={title}
                className={styles.card}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(30px)',
                  transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s,
                               transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={28} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <button className={styles.learnBtn} onClick={() => open(i)}>
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal overlay */}
      {active !== null && (
        <div className={styles.overlay} onClick={close}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalIconWrap}>
                {(() => {
                  const Icon = ICONS[services[active].iconName]
                  return <Icon size={26} />
                })()}
              </div>
              <div className={styles.modalTitleGroup}>
                <h3 className={styles.modalTitle}>{services[active].title}</h3>
                <p className={styles.modalRate}>{services[active].rate}</p>
              </div>
              <button className={styles.closeBtn} onClick={close} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            <p className={styles.modalDesc}>{services[active].desc}</p>

            <div className={styles.divider} />

            {/* What's included */}
            <p className={styles.includesLabel}>What's included</p>
            <ul className={styles.detailList}>
              {services[active].details.map((item) => (
                <li key={item} className={styles.detailItem}>
                  <CheckCircle size={15} className={styles.detailIcon} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={styles.modalCta}
              onClick={() => {
                close()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Started <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}