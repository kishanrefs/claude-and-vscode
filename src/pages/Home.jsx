import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi2'
import TypingText from '../components/TypingText.jsx'
import Reveal from '../components/Reveal.jsx'
import VideoBackground from '../components/VideoBackground.jsx'
import Carousel from '../components/Carousel.jsx'
import Accordion from '../components/Accordion.jsx'
import { setupSteps } from '../data/setupSteps.js'
import { whyFeatures } from '../data/whyFeatures.js'
import { faqs } from '../data/faqs.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <VideoBackground />

        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <HiOutlineSparkles size={14} /> AI pair programming, inside your editor
            </span>

            <h1 className="hero-title">
              Build faster with{' '}
              <span className="gradient-text">
                <TypingText
                  words={['Claude in VS Code.', 'AI that reads your code.', 'Your new pair programmer.']}
                />
              </span>
            </h1>

            <p className="hero-subtitle">
              ClaudeAndVSCode.com is a hands-on guide to installing, configuring, and getting the
              absolute most out of Claude directly inside Visual Studio Code — so you spend less
              time context-switching and more time shipping.
            </p>

            <div className="hero-actions">
              <a
                href="https://marketplace.visualstudio.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                Get the extension <HiOutlineArrowRight size={18} />
              </a>
              <a href="#setup" className="btn btn-ghost">
                See setup guide
              </a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <strong>6-step</strong>
                <span>setup walkthrough</span>
              </div>
              <div className="hero-meta-divider" />
              <div className="hero-meta-item">
                <strong>MCP-ready</strong>
                <span>connect your own tools</span>
              </div>
              <div className="hero-meta-divider" />
              <div className="hero-meta-item">
                <strong>Diff-based</strong>
                <span>you approve every change</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="editor-mock">
              <div className="editor-mock-titlebar">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="editor-mock-filename">app.jsx</span>
              </div>
              <div className="editor-mock-body">
                <pre className="editor-mock-code">
{`function Greeting({ user }) {
  return (
    <h1>
      Welcome back, {user.name}
    </h1>
  )
}`}
                </pre>
                <div className="editor-mock-chat">
                  <div className="chat-bubble chat-bubble-user">
                    Add a loading state while user data fetches
                  </div>
                  <div className="chat-bubble chat-bubble-claude">
                    <span className="chat-bubble-label">Claude</span>
                    Done — added a skeleton loader and guarded the render until{' '}
                    <code>user</code> resolves.
                    <span className="chat-typing-dot" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="section carousel-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What it can do</span>
            <h2>Everything you can do with Claude in VS Code</h2>
            <p>A quick tour of the workflows that make Claude feel like part of your editor.</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Carousel />
        </Reveal>
      </section>

      {/* WHY GRID */}
      <section className="section why-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why pair Claude with VS Code</span>
            <h2>Designed to keep you in flow</h2>
            <p>No new app to learn. Claude slots directly into the editor you already live in.</p>
          </Reveal>

          <div className="why-grid">
            {whyFeatures.map((feature, i) => (
              <Reveal
                as="div"
                key={feature.title}
                delay={(i % 3) * 0.1}
                direction={i % 2 === 0 ? 'up' : 'up'}
              >
                <div className="card why-card">
                  <div className="why-card-icon">
                    <feature.icon size={22} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP STEPS */}
      <section className="section setup-section" id="setup">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Setup guide</span>
            <h2>Get running in about five minutes</h2>
            <p>Follow these six steps to have Claude working inside VS Code on any project.</p>
          </Reveal>

          <div className="steps">
            {setupSteps.map((step, i) => (
              <Reveal
                key={step.number}
                direction={i % 2 === 0 ? 'right' : 'left'}
                delay={0.05}
                className="step-row"
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container container-narrow">
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Good to know</h2>
            <p>Answers to the questions we hear most from developers just getting started.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-banner">
            <h2>
              Ready to pair with <span className="gradient-text">Claude</span>?
            </h2>
            <p>Install the extension, open a project, and start shipping — or reach out if you get stuck.</p>
            <div className="hero-actions cta-actions">
              <a
                href="https://marketplace.visualstudio.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                Get the extension <HiOutlineArrowRight size={18} />
              </a>
              <NavLink to="/contact" className="btn btn-ghost">
                Contact us
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
