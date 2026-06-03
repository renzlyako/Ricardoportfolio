import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import styles from './Gallery.module.css'

import landscape1 from '../assets/landscape1.jpg'
import landscape2 from '../assets/landscape2.jpg'
import landscape3 from '../assets/landscape3.jpg'
import portrait1  from '../assets/portrait1.jpg'
import portrait2  from '../assets/portrait2.jpg'
import portrait3  from '../assets/portrait3.jpg'
import portrait4  from '../assets/portrait4.jpg'
import portrait5  from '../assets/portrait5.jpg'
import portrait6  from '../assets/portrait6.jpg'
import portrait7  from '../assets/portrait7.jpg'
import portrait8  from '../assets/portrait8.jpg'

const images = [
  { src: portrait8, alt: 'Award Winner Team',               category: 'Awards'      },
 { src: landscape1, alt: 'Award Winner Team',               category: 'Performance'      },
  { src: portrait1,  alt: 'Outstanding Performance',         category: 'Performance' },
  { src: portrait2,  alt: 'Team Leader Recognition',         category: 'Events'  },
  { src: landscape2, alt: 'Hosting Event',                   category: 'Leadership'   },
  { src: portrait3,  alt: 'Award Ceremony',                  category: 'Awards'      },
  { src: portrait4,  alt: 'Client Success',                  category: 'Leadership' },
  { src: landscape3, alt: 'Team Excellence',                 category: 'Leadership'  },
  { src: portrait5,  alt: 'Event Hosting',                   category: 'Events'      },
  { src: portrait6,  alt: 'Top Performer Recognition',       category: 'Performance' },
  { src: portrait7,  alt: 'Leadership Award',                category: 'Awards'      },
]

const categories = ['All', 'Awards', 'Performance', 'Leadership', 'Events']

// Split into 3 columns for masonry
function splitColumns(items, count) {
  const cols = Array.from({ length: count }, () => [])
  items.forEach((item, i) => cols[i % count].push({ ...item, index: i }))
  return cols
}

export default function Gallery() {
  const [ref, visible]         = useInView(0.05)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All'
    ? images
    : images.filter(img => img.category === activeFilter)

  const columns = splitColumns(filtered, 3)

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div
          className={styles.header}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className={styles.eyebrow}>Gallery</p>
          <h2 className={styles.heading}>
            Awards, Events &<br />Outstanding Work
          </h2>
          <p className={styles.subtext}>
            A glimpse of the milestones, events, and achievements that define
            the journey.
          </p>

          {/* Filter tabs */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div
          className={styles.masonry}
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s',
          }}
        >
          {columns.map((col, ci) => (
            <div key={ci} className={styles.column}>
              {col.map((img, ii) => (
                <div
                  key={img.alt + ii}
                  className={styles.imgWrap}
                  onClick={() => setLightbox(img)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(24px)',
                    transition: `opacity 0.6s ease ${(ci * 3 + ii) * 0.07}s,
                                 transform 0.6s ease ${(ci * 3 + ii) * 0.07}s`,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.img}
                    loading="lazy"
                  />
                  <div className={styles.imgOverlay}>
                    <div className={styles.overlayContent}>
                      <ZoomIn size={22} className={styles.zoomIcon} />
                      <span className={styles.imgCaption}>{img.alt}</span>
                      <span className={styles.imgCategory}>{img.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.lightboxClose}
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxFooter}>
              <span className={styles.lightboxCaption}>{lightbox.alt}</span>
              <span className={styles.lightboxCategory}>{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}