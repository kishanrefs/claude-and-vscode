import { NavLink } from 'react-router-dom'
import { FaGithub, FaXTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from './Logo.jsx'

const socials = [
  { href: 'https://github.com', label: 'GitHub', icon: FaGithub },
  { href: 'https://twitter.com', label: 'X (Twitter)', icon: FaXTwitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://discord.com', label: 'Discord', icon: FaDiscord },
]

const columns = [
  {
    title: 'Site',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'VS Code Marketplace', href: 'https://marketplace.visualstudio.com/' },
      { label: 'Claude Docs', href: 'https://docs.claude.com/' },
      { label: 'Anthropic', href: 'https://www.anthropic.com/' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={40} />
            <p className="footer-tagline">
              The friendly guide to pairing Claude with Visual Studio Code — set up, tips, and
              workflows for building faster with AI at your side.
            </p>
            <div className="footer-socials">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="footer-social-icon"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-columns">
            {columns.map((col) => (
              <div className="footer-column" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <NavLink to={link.to}>{link.label}</NavLink>
                      ) : (
                        <a href={link.href} target="_blank" rel="noreferrer noopener">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column">
              <h4>Get in touch</h4>
              <ul>
                <li>
                  <a href="mailto:hello@claudeandvscode.com" className="footer-email">
                    <HiOutlineMail size={16} />
                    hello@claudeandvscode.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} ClaudeAndVSCode.com. All rights reserved.</span>
          <span className="footer-disclaimer">
            Not affiliated with Anthropic or Microsoft. An independent fan resource.
          </span>
        </div>
      </div>
    </footer>
  )
}
