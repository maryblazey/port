import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Code2, Palette, Globe, Cpu } from 'lucide-react'
import './About.css'

const skills = [
  { name: 'HTML5',       level: 95 },
  { name: 'CSS3',        level: 90 },
  { name: 'JavaScript',  level: 88 },
  { name: 'React',       level: 85 },
  { name: 'Node.js',     level: 78 },
  { name: 'SQL',         level: 80 },
  { name: 'Git',         level: 85 },
  { name: 'Figma',       level: 70 },
]

const highlights = [
  { icon: Code2,   title: 'Clean Code',    desc: 'Writing maintainable, scalable & readable code.' },
  { icon: Palette, title: 'UI/UX Focus',   desc: 'Designing beautiful, user-centered interfaces.' },
  { icon: Globe,   title: 'Web First',     desc: 'Delivering fast, responsive cross-platform apps.' },
  { icon: Cpu,     title: 'Problem Solver', desc: 'Creative engineering solutions to real challenges.' },
]

const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5+',  label: 'Years Experience' },
  { value: '10+', label: 'Awards Received' },
]

function SkillBar({ name, level, visible }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="about" className={`section about${isVisible ? ' visible' : ''}`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            I design solutions<br />that <span>make an impact.</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left — Bio */}
          <div className="about-bio">
            <p>
              I'm a <strong>Full-Stack Developer & Frontend Engineer</strong> with a passion for creating
              digital experiences that are not only beautiful but also functional and user-friendly.
            </p>
            <p>
              With a unique blend of software and hardware expertise, I love creating elegant,
              efficient solutions that solve real problems. My approach combines technical precision
              with a keen eye for design and user experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or brainstorming creative digital experiences.
            </p>

            {/* Highlights grid */}
            <div className="highlights-grid">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="highlight-card card">
                  <div className="highlight-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="highlight-title">{title}</h4>
                    <p className="highlight-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="resume.pdf" download className="btn-primary" style={{ width: 'fit-content' }}>
              Download Resume ↓
            </a>
          </div>

          {/* Right — Skills & Stats */}
          <div className="about-right">
            {/* Stats */}
            <div className="about-stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about-stat-card card">
                  <span className="about-stat-value gradient-text">{value}</span>
                  <span className="about-stat-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="skills-section">
              <h3 className="skills-title">Core Expertise</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} visible={isVisible} />
                ))}
              </div>
            </div>

            {/* Tech chips */}
            <div className="tech-chips">
              {['React', 'TypeScript', 'Node.js', 'MySQL', 'Git', 'Figma', 'REST APIs', 'Tailwind'].map(t => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
