import { NavLink } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineLightBulb, HiOutlineHeart, HiOutlineAcademicCap } from 'react-icons/hi2'
import Reveal from '../components/Reveal.jsx'
import VideoBackground from '../components/VideoBackground.jsx'

const values = [
  {
    icon: HiOutlineLightBulb,
    title: 'Practical over hype',
    description:
      'No vague AI buzzwords. Every guide here is a real workflow, tested inside a real editor, on real projects.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Written for developers',
    description:
      'By people who write code every day and wanted their editor and their AI assistant to finally feel like one tool.',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Always learning in public',
    description:
      'As Claude and VS Code both ship new features, this site gets rewritten to match — not left to go stale.',
  },
]

const timeline = [
  {
    year: 'The problem',
    text: 'Great AI coding tools kept living in browser tabs, breaking flow every time you had to copy code back and forth.',
  },
  {
    year: 'The spark',
    text: 'Claude Code landed inside VS Code and closed that gap — but the setup steps and best practices were scattered across docs, threads, and tweets.',
  },
  {
    year: 'This site',
    text: 'ClaudeAndVSCode.com was built as the one place to send a teammate to go from zero to a working, well-configured setup.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <VideoBackground />
        <div className="container">
          <Reveal className="page-hero-inner">
            <span className="eyebrow">About this site</span>
            <h1>
              Why we built <span className="gradient-text">ClaudeAndVSCode.com</span>
            </h1>
            <p>
              A small, focused resource for developers who want Claude and Visual Studio Code to
              work together properly — not just side by side.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-grid">
          <Reveal direction="right">
            <span className="eyebrow">The story</span>
            <h2>Two great tools, one workflow</h2>
            <p>
              We kept watching the same thing happen: developers discovering how good Claude is
              at understanding code, then losing half the benefit by bouncing between a browser
              tab and their editor to actually use it.
            </p>
            <p>
              Once Claude could run natively inside VS Code — reading files, proposing diffs,
              executing commands in the integrated terminal — that friction disappeared. The
              catch was that knowing how to set it up well, and use it well, took some digging.
            </p>
            <p>
              This site exists to close that gap: a clear, current, no-nonsense guide to getting
              Claude and VS Code working together, plus the tips that make the difference between
              an okay setup and a great one.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-marker">
                    <span>{i + 1}</span>
                  </div>
                  <div className="timeline-content">
                    <h4>{item.year}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we care about</span>
            <h2>The principles behind every guide</h2>
          </Reveal>

          <div className="values-grid">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="card value-card">
                  <div className="why-card-icon">
                    <value.icon size={22} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-banner">
            <h2>Have a question, tip, or correction?</h2>
            <p>We'd genuinely like to hear it — this site is built from real developer feedback.</p>
            <div className="hero-actions cta-actions">
              <NavLink to="/contact" className="btn btn-primary">
                Get in touch <HiOutlineArrowRight size={18} />
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
