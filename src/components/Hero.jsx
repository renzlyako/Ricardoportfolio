import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Star, Shield } from 'lucide-react'
import { tools } from '../data/index.js'
import img2 from '../assets/image2.jpg'
import styles from './Hero.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => { setTimeout(() => setLoaded(true), 80) }, [])

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
            Hey! I'm{' '}
            <span className={styles.highlightName}>
              AIRICK
              <span className={styles.highlightNameUnderline} />
            </span>
            ,<br />
            your{' '}
            <span className={styles.highlightKuya}>
              Kuya Future
              <span className={styles.highlightKuyaUnderline} />
            </span>
            .
          </h1>

          <p className={styles.tagline}>Less stress, more success.</p>

          <p className={styles.subtext}>
            Let's secure your future while building the life you love today.
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

        {/* ── Right — Single image with floating service tags ── */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>

            {/* Main image */}
            <div className={styles.imgFrame}>
              <img src={img2} alt="Airick Roque" className={styles.mainImg} />
              <div className={styles.imgOverlay} />
            </div>

            {/* ── Floating service tags ── */}

            {/* Insurance — HIGHLIGHTED (top left) */}
            <div className={`${styles.serviceTag} ${styles.tagInsurance} ${styles.tagFeatured}`}>
              <Shield size={13} />
              <span>INSURANCE</span>
              <span className={styles.starBadge}>★ Specialty</span>
            </div>

            {/* Real Estate (top right) */}
            <div className={`${styles.serviceTag} ${styles.tagRealEstate}`}>
              <i className="ti ti-home" aria-hidden="true" style={{ fontSize: 13 }} />
              <span>Real Estate</span>
            </div>

            {/* Product Affiliates (right middle) */}
            <div className={`${styles.serviceTag} ${styles.tagAffiliates}`}>
              <i className="ti ti-tag" aria-hidden="true" style={{ fontSize: 13 }} />
              <span>Product Affiliates</span>
            </div>

            {/* Hosting Event (bottom right) */}
            <div className={`${styles.serviceTag} ${styles.tagHosting}`}>
              <i className="ti ti-calendar-event" aria-hidden="true" style={{ fontSize: 13 }} />
              <span>Hosting Event</span>
            </div>

            {/* Virtual Assistant (bottom left) */}
            <div className={`${styles.serviceTag} ${styles.tagVA}`}>
              <i className="ti ti-device-laptop" aria-hidden="true" style={{ fontSize: 13 }} />
              <span>Virtual Assistant</span>
            </div>

            {/* Web Systems (left middle) */}
            <div className={`${styles.serviceTag} ${styles.tagWeb}`}>
              <i className="ti ti-monitor" aria-hidden="true" style={{ fontSize: 13 }} />
              <span>Web Systems</span>
            </div>

            {/* Name label below image */}
            <div className={styles.imgLabel}>
              <h3 className={styles.imgName}>Airick Roque</h3>
              <p className={styles.imgRole}>Financial Advisor Assistant</p>
              <div className={styles.imgStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="var(--color-red)" color="var(--color-red)" />
                ))}
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