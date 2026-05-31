import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, ChevronDown, Star } from 'lucide-react'
import { tools } from '../data/index.js'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import styles from './Hero.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const slides = [img1, img2, img3]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => { setTimeout(() => setLoaded(true), 80) }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.bgAccent} />
      <div className={styles.bgBlob} />
      <div className={styles.bgGrid} />

      <div className={`${styles.container} ${loaded ? styles.loaded : ''}`}>

        {/* ── Left ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for Work
          </div>

          <h1 className={styles.heading}>
            Your Next<br />
            <span className={styles.headingAccent}>
              Financial Advisor
              <span className={styles.headingUnderline} />
            </span>
            <br />Is Here.
          </h1>

          <p className={styles.subtext}>
            I help individuals and families achieve financial security through personalized
            insurance and financial planning solutions. Whether you're protecting your income,
            growing your savings, or planning for your family's future, 
            I'm here to guide you every step of the way.
          </p>

          <div className={styles.ctas}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('contact')}>
              Book for Free Financial Consultation <ArrowRight size={16} />
            </button>
            <button className={styles.btnSecondary} onClick={() => scrollTo('services')}>
              View Services
            </button>
          </div>

          <div className={styles.tools}>
            {tools.map((t) => (
              <span key={t} className={styles.toolTag}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right — Auto-Focus Cycle ── */}
        <div className={styles.right}>
          <div className={styles.carouselWrap}>

            {/* Image trio */}
            <div className={styles.imageRow}>
              {slides.map((src, i) => (
                <div
                  key={i}
                  className={`${styles.imgFrame} ${active === i ? styles.imgFrameActive : styles.imgFrameIdle}`}
                  onClick={() => setActive(i)}
                >
                  <img
                    src={src}
                    alt={`Alex Reyes photo ${i + 1}`}
                    className={styles.slideImg}
                  />
                  {/* Active indicator dot */}
                  {active === i && <span className={styles.activeDot} />}
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>

            {/* Name label */}
            <div className={styles.carouselLabel}>
              <h3 className={styles.carouselName}>Airick Roque</h3>
              <p className={styles.carouselRole}>Financial Advisor Assistant</p>
              <div className={styles.carouselStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-red)" color="var(--color-red)" />
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className={styles.badgeTopRight}>
              <div className={styles.badgeStat}>98%</div>
              <div className={styles.badgeStatLabel}>Satisfaction</div>
            </div>

            <div className={styles.badgeBottomLeft}>
              <CheckCircle size={18} className={styles.badgeCheckIcon} />
              <div>
                <div className={styles.badgeProjectCount}>120+ Projects</div>
                <div className={styles.badgeProjectLabel}>Successfully Delivered</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span className={styles.scrollLabel}>Scroll</span>
        <ChevronDown size={16} className={styles.scrollIcon} />
      </div>
    </section>
  )
}