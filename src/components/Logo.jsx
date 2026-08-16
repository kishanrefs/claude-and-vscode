import { motion } from 'framer-motion'

function LogoMark({ size = 40, animated = false }) {
  const SparkTag = animated ? motion.path : 'path'
  const sparkProps = animated
    ? {
        animate: { opacity: [0.55, 1, 0.55], scale: [0.9, 1.08, 0.9] },
        transition: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
        style: { transformOrigin: '32px 32px' },
      }
    : {}

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ClaudeAndVSCode logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E8825F" />
          <stop offset="0.55" stopColor="#D97757" />
          <stop offset="1" stopColor="#2F8FE0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#logoGrad)" />
      <rect x="2" y="2" width="60" height="60" rx="17" fill="white" fillOpacity="0.04" />
      <path
        d="M25 21 L14 32 L25 43"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 21 L50 32 L39 43"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <SparkTag d="M32 25 L37 32 L32 39 L27 32 Z" fill="white" {...sparkProps} />
    </svg>
  )
}

export default function Logo({ size = 40, withText = true, animated = false, textClassName = '' }) {
  return (
    <div className="logo">
      <LogoMark size={size} animated={animated} />
      {withText && (
        <span className={`logo-text ${textClassName}`}>
          Claude<span className="logo-text-accent">And</span>VSCode
        </span>
      )}
    </div>
  )
}
