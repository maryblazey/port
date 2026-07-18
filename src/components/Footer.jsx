import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'
import './Footer.css'

const quickLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

const services = [
  'UI/UX Design',
  'Web Development',
  'Branding',
  'SEO Optimization',
]

const socials = [
  { icon: Github,   href: 'https://github.com/maryblazey',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',   label: 'Twitter' },
  { icon: Mail,     href: 'mailto:blazeymary3@gmail.com', label: 'Email' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
              Mary<span>.</span>
            </a>
            <p className="footer-tagline">
              I design and develop digital experiences that help brands grow and make an impact.
            </p>
            <div className="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="footer-social" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-link"
                    onClick={(e) => handleNavClick(e, href)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s}>
                  <span className="footer-link">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Get my latest updates and design tips in your inbox.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Mary Blazey. All rights reserved.
          </p>
          <p className="footer-made">
            Built with <Heart size={12} className="heart-icon" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
