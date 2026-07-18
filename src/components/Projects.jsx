import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Inventory System',
    category: 'Full-Stack Development',
    desc: 'A full-stack SQL-based inventory management system designed for local businesses. Features real-time tracking, secure authentication, and an intuitive dashboard with analytics.',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    github: 'https://github.com/maryblazey',
    demo: '#',
    color: '#10b981',
    mockBg: 'linear-gradient(135deg, #0d2818 0%, #0a1f14 100%)',
  },
  {
    id: '02',
    title: 'Creative Portfolio',
    category: 'UI/UX Design',
    desc: 'A responsive portfolio built with modern CSS Flexbox and Grid systems. Showcasing clean design principles, smooth animations, and exceptional user interactions.',
    tags: ['React', 'Framer Motion', 'CSS3', 'Vite'],
    github: 'https://github.com/maryblazey',
    demo: '#',
    color: '#34d399',
    mockBg: 'linear-gradient(135deg, #0f2a1e 0%, #0a1f14 100%)',
  },
  {
    id: '03',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    desc: 'A modern e-commerce application with product management, cart functionality, M-Pesa payment integration, and responsive design for seamless mobile shopping.',
    tags: ['React', 'Laravel', 'MySQL', 'M-Pesa API'],
    github: 'https://github.com/maryblazey',
    demo: '#',
    color: '#6ee7b7',
    mockBg: 'linear-gradient(135deg, #132b1e 0%, #0d1f15 100%)',
  },
  {
    id: '04',
    title: 'LMS Dashboard',
    category: 'Web Application',
    desc: 'A Learning Management System featuring course creation, student enrollment, progress tracking, quizzes, and a clean, accessible admin interface.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/maryblazey',
    demo: '#',
    color: '#10b981',
    mockBg: 'linear-gradient(135deg, #0d2818 0%, #0a1f14 100%)',
  },
]

function MockScreen({ project }) {
  return (
    <div className="mock-screen" style={{ background: project.mockBg }}>
      <div className="mock-bar">
        <div className="mock-dot" style={{ background: '#ff5f57' }} />
        <div className="mock-dot" style={{ background: '#febc2e' }} />
        <div className="mock-dot" style={{ background: '#28c840' }} />
        <div className="mock-url">maryblazey.dev/{project.title.toLowerCase().replace(/ /g, '-')}</div>
      </div>
      <div className="mock-body">
        <div className="mock-sidebar">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="mock-sidebar-item" style={{
              width: `${60 + Math.random() * 30}%`,
              background: i === 0 ? `${project.color}33` : 'rgba(255,255,255,0.05)',
              borderLeft: i === 0 ? `2px solid ${project.color}` : 'none',
            }} />
          ))}
        </div>
        <div className="mock-content">
          <div className="mock-header-bar" />
          <div className="mock-cards">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="mock-card-mini" style={{
                background: `rgba(255,255,255,0.03)`,
                border: `1px solid rgba(255,255,255,0.05)`,
              }}>
                <div className="mock-card-line" style={{ background: project.color + '44', width: '60%' }} />
                <div className="mock-card-line" style={{ width: '90%' }} />
                <div className="mock-card-line" style={{ width: '75%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.08)
  const [hoveredId, setHoveredId] = useState(null)

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="projects" className={`section projects${isVisible ? ' visible' : ''}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <div>
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">
              Some of my <span>recent projects</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline view-all" onClick={scrollToContact}>
            View All Projects <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card card${hoveredId === project.id ? ' hovered' : ''}`}
              style={{ '--accent': project.color, animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Mock browser */}
              <div className="project-mock">
                <span className="project-number">{project.id}</span>
                <MockScreen project={project} />
              </div>

              {/* Info */}
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="project-link">
                    <Github size={15} /> GitHub
                  </a>
                  <a href={project.demo} className="project-link primary">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
