import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Palette, Code2, Megaphone, Search, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Designing clean, modern and user-friendly interfaces that delight users and convert visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building fast, responsive and functional websites with modern technologies and best engineering practices.',
    features: ['React & Next.js', 'REST APIs', 'Database Design', 'Performance Optimization'],
  },
  {
    icon: Megaphone,
    title: 'Branding',
    desc: 'Creating strong brand identities that stand out — logos, typography, color systems, and brand guidelines.',
    features: ['Logo Design', 'Brand Identity', 'Style Guides', 'Visual Strategy'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Improving your website visibility and ranking on search engines to drive organic traffic and growth.',
    features: ['Technical SEO', 'Performance', 'Analytics Setup', 'Content Strategy'],
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.08)

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className={`section services${isVisible ? ' visible' : ''}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">
            What I can do <span>for you</span>
          </h2>
          <p className="services-sub">
            End-to-end digital solutions tailored to your goals — from design to deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map(({ icon: Icon, title, desc, features }, i) => (
            <div
              key={title}
              className="service-card card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="service-icon-wrap">
                <Icon size={22} />
              </div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
              <ul className="service-features">
                {features.map(f => (
                  <li key={f} className="service-feature">
                    <span className="feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta" onClick={scrollToContact}>
                Explore <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
