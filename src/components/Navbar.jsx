import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/index.js'
import styles from './Navbar.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    scrollTo(id.toLowerCase())
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={`${styles.logo} ${scrolled ? styles.logoScrolled : ''}`}>
          <span className={styles.logoAccent}>Meet</span>Airick
        </div>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <button
              key={link}
              className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
          <button
            className={styles.hireBtn}
            onClick={() => handleNav('contact')}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${scrolled ? styles.hamburgerScrolled : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link}
              className={styles.mobileLink}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
          <button
            className={styles.mobileCta}
            onClick={() => handleNav('contact')}
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  )
}
