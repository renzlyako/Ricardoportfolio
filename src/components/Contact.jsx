import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { contactInfo, services } from '../data/index.js'
import styles from './Contact.module.css'

const ICON_MAP = { Mail, Phone, MapPin }

const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [ref, visible] = useInView()
  const formRef = useRef()

  const [form, setForm]         = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus]     = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handle = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = async () => {
    if (!form.name) {
      setErrorMsg('Please enter your full name.')
      return
    }

    if (!form.email) {
      setErrorMsg('Please enter your email address.')
      return
    }

    if (!validateEmail(form.email)) {
      setErrorMsg('Please enter a valid email address (e.g. name@gmail.com).')
      return
    }

    if (!form.message) {
      setErrorMsg('Please enter your message.')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          service:    form.service || 'Not specified',
          message:    form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.container}>

        {/* ── Left ── */}
        <div
          className={styles.info}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className={styles.eyebrow}>Let's Work Together</p>
          <h2 className={styles.heading}>
            Ready to Delegate &<br />Get Your Time Back?
          </h2>
          <p className={styles.subtext}>
            Send a message and I'll get back to you within 24 hours. Let's
            find out how I can best support you.
          </p>

          <div className={styles.contactRows}>
            {contactInfo.map(({ iconName, label, value }) => {
              const Icon = ICON_MAP[iconName]
              return (
                <div key={label} className={styles.contactRow}>
                  <div className={styles.contactIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>{label}</div>
                    <div className={styles.contactValue}>{value}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className={styles.socials}>
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <div key={i} className={styles.socialBtn}>
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — form ── */}
        <div
          className={styles.formWrap}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(30px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          {status === 'success' ? (
            <div className={styles.successCard}>
              <CheckCircle size={52} className={styles.successIcon} />
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successText}>
                Thanks for reaching out. I'll reply within 24 hours.
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => setStatus('idle')}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className={styles.formCard}>
              <div className={styles.formRow}>
                {/* Name */}
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    className={styles.input}
                    value={form.name}
                    onChange={handle('name')}
                    placeholder="Jane Smith"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={`${styles.input} ${
                      form.email && !validateEmail(form.email) ? styles.inputError : ''
                    }`}
                    type="email"
                    value={form.email}
                    onChange={handle('email')}
                    placeholder="name@gmail.com"
                    disabled={status === 'sending'}
                  />
                  {form.email && !validateEmail(form.email) && (
                    <span className={styles.fieldError}>
                      ⚠ Please enter a valid email (e.g. name@gmail.com)
                    </span>
                  )}
                </div>
              </div>

              {/* Service */}
              <div className={styles.field}>
                <label className={styles.label}>Service Needed</label>
                <select
                  className={styles.input}
                  value={form.service}
                  onChange={handle('service')}
                  disabled={status === 'sending'}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other / Let's talk</option>
                </select>
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  rows={5}
                  value={form.message}
                  onChange={handle('message')}
                  placeholder="Tell me about your needs, current challenges, and how many hours per week you're looking for support..."
                  disabled={status === 'sending'}
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <p className={styles.errorMsg}>{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                className={styles.submitBtn}
                onClick={submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader size={16} className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}