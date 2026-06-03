import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import styles from './Stats.module.css'

const logos = [logo1, logo2, logo3, logo4, logo5]

export default function Stats() {
  const repeated = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* First set */}
        <div className={styles.track}>
          {repeated.map((logo, i) => (
            <div key={`a-${i}`} className={styles.logoItem}>
              <img src={logo} alt={`Logo ${(i % logos.length) + 1}`} className={styles.logoImg} />
            </div>
          ))}
        </div>
        {/* Second set — follows first seamlessly */}
        <div className={styles.track} aria-hidden="true">
          {repeated.map((logo, i) => (
            <div key={`b-${i}`} className={styles.logoItem}>
              <img src={logo} alt="" className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}