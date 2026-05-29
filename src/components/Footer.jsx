import { footerLinks } from '../data/index.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoAccent}>VA</span>Portfolio
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Alex Reyes · Virtual Assistant · All Rights Reserved
        </p>

        <div className={styles.links}>
          {footerLinks.map((link) => (
            <span key={link} className={styles.link}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
