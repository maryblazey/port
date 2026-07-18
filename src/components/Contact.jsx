import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'

const contactInfo = [
  { icon: MapPin, label: 'Location',  value: 'Nairobi, Kenya' },
  { icon: Mail,   label: 'Email',     value: 'blazeymary3@gmail.com', href: 'mailto:blazeymary3@gmail.com' },
  { icon: Phone,  label: 'Phone',     value: '+254 740 749 434',       href: 'tel:+254740749434' },
]

const socials = [
  { icon: Github,   href: 'https://github.com/maryblazey',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',   label: 'Twitter' },
  { icon: Mail,     href: 'mailto:blazeymary3@gmail.com', label: 'Email' },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.08)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name || !email || !subject || !message) {
      setStatus('error')
      return
    }
    setLoading(true)
    
    // Format the message for WhatsApp
    const whatsappNumber = "254740749434"
    const text = `Hello Mary! My name is ${name} (${email}).\n\nSubject: ${subject}\n\nMessage:\n${message}`
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`
    
    // Simulate short loading then open WhatsApp
    setTimeout(() => {
      setLoading(false)
      window.open(whatsappUrl, '_blank')
      setForm({ name: '', email: '', subject: '', message: '' })
      setStatus(null)
    }, 800)
  }

  return (
    <section id="contact" className={`section contact${isVisible ? ' visible' : ''}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span>work together</span>
          </h2>
          <p className="contact-sub">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="info-card card">
                <div className="info-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="info-label">{label}</span>
                  {href
                    ? <a href={href} className="info-value link">{value}</a>
                    : <p className="info-value">{value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="contact-socials">
              <p className="socials-title">Find me on</p>
              <div className="socials-row">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="social-link" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Currently Available</p>
                <p className="avail-sub">Open to freelance & full-time opportunities</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Mary Blazey"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className="form-input form-textarea"
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-alert success">
                ✅ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="form-alert error">
                ⚠️ Please fill in all fields before sending.
              </div>
            )}

            <button type="submit" className="btn-primary form-submit" disabled={loading}>
              {loading ? (
                <span className="spinner" />
              ) : (
                <>
                  <Send size={16} />
                  Send via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
