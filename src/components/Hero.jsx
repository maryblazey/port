import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight } from 'lucide-react'
import { useTypewriter } from '../hooks/useScrollAnimation'
import profileImg from '../assets/profile.png'
import './Hero.css'

const ROLES = [
  'Full-Stack Developer',
  'Creative Problem Solver',
  'UI/UX Enthusiast',
  'Open Source Contributor',
]

const stats = [
  { value: '5+',   label: 'Years\nExperience' },
  { value: '30+',  label: 'Projects\nCompleted' },
  { value: '20+',  label: 'Happy\nClients' },
  { value: '100%', label: 'Client\nSatisfaction' },
]

const socials = [
  { icon: Github,   href: 'https://github.com/maryblazey',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:blazeymary3@gmail.com', label: 'Email' },
]

export default function Hero() {
  const role = useTypewriter(ROLES)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header id="home" className="hero">
      {/* Background grid / glow */}
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>

      <div className={`container hero-inner${mounted ? ' mounted' : ''}`}>
        {/* Left — Text */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Available for new opportunities</span>
          </div>

          <h3 className="hero-greeting">Hello, I'm Mary 👋</h3>

          <h1 className="hero-title">
            Full-Stack Developer<br />&amp; <span className="gradient-text">Creative Builder</span>
          </h1>

          <p className="hero-role">
            <span className="role-text">{role}</span>
            <span className="cursor">|</span>
          </p>

          <p className="hero-desc">
            I design and build modern, beautiful, and high-performing websites and applications
            that help brands grow and make an impact.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary" onClick={scrollToProjects}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="resume.pdf" download className="btn-outline">
              Download CV <Download size={16} />
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Image + Stats */}
        <div className="hero-right">
          {/* Profile image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-ring ring-2" />
            <div className="hero-image-container">
              <img
                src={profileImg}
                alt="Mary Blazey — Full-Stack Developer"
                className="hero-image"
              />
            </div>

            {/* Floating badge */}
            <div className="floating-badge">
              <span className="fb-value">5+</span>
              <span className="fb-label">Years Exp.</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            {stats.map(({ value, label }) => (
              <div key={value} className="stat-card">
                <span className="stat-value">{value}</span>
                <span className="stat-label" style={{ whiteSpace: 'pre-line' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-dot" />
      </div>
    </header>
  )
}
