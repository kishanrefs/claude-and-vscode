export default function VideoBackground() {
  return (
    <div className="video-bg" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="auto">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-bg-overlay" />
    </div>
  )
}
