import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MessageCircle } from 'lucide-react'
import './CTABanner.css'

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`cta-banner${isVisible ? ' visible' : ''}`} ref={ref} aria-label="Call to action">
      <div className="container">
        <div className="cta-inner">
          {/* Left content */}
          <div className="cta-content">
            <span className="cta-eyebrow">Let's Work Together</span>
            <h2 className="cta-title">
              Have a project<br />in mind?
            </h2>
            <p className="cta-desc">
              I'm always open to discussing new projects, creative ideas or opportunities
              to be part of your vision. Let's create something amazing together.
            </p>
            <a href="#contact" className="btn-primary cta-btn" onClick={scrollToContact}>
              <MessageCircle size={18} />
              Get in Touch
            </a>
          </div>

          {/* Right — decorative illustration */}
          <div className="cta-visual" aria-hidden="true">
            {/* Rocket SVG */}
            <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="rocket-svg">
              {/* Exhaust flame */}
              <ellipse cx="100" cy="210" rx="18" ry="28" fill="url(#flame)" opacity="0.8" />
              <ellipse cx="100" cy="218" rx="10" ry="18" fill="url(#flame2)" />
              {/* Body */}
              <path d="M80 120 Q80 40 100 20 Q120 40 120 120 L115 160 L85 160 Z"
                fill="url(#rocketGrad)" />
              {/* Window */}
              <circle cx="100" cy="100" r="14" fill="url(#windowGrad)" />
              <circle cx="100" cy="100" r="10" fill="rgba(255,255,255,0.12)" />
              <circle cx="95" cy="95" r="3" fill="rgba(255,255,255,0.4)" />
              {/* Wings */}
              <path d="M85 155 L60 175 L75 155 Z" fill="url(#wingGrad)" />
              <path d="M115 155 L140 175 L125 155 Z" fill="url(#wingGrad)" />
              {/* Fins */}
              <path d="M85 160 L78 180 L85 170 Z" fill="url(#finGrad)" />
              <path d="M115 160 L122 180 L115 170 Z" fill="url(#finGrad)" />

              <defs>
                <linearGradient id="rocketGrad" x1="80" y1="20" x2="120" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="windowGrad" x1="86" y1="86" x2="114" y2="114" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="60" y1="155" x2="140" y2="175" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                <linearGradient id="finGrad" x1="78" y1="160" x2="122" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="flame" x1="82" y1="182" x2="118" y2="238" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flame2" x1="90" y1="200" x2="110" y2="236" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef3c7" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating dots */}
            <div className="cta-dot d1" />
            <div className="cta-dot d2" />
            <div className="cta-dot d3" />
            <div className="cta-star s1">✦</div>
            <div className="cta-star s2">✦</div>
          </div>
        </div>
      </div>
    </section>
  )
}
