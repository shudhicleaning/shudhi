import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-layout">
        <div>
          <div className="hero-eyebrow">Septic Tank Cleaning</div>
          <h1>
            Clean tanks.
            <span>No mess.</span>
          </h1>
          <p className="hero-body">
            We pump out septic tanks, clear blocked drains, and handle
            emergency overflows. Available 6 AM to 9 PM, every day.
          </p>
          <div className="hero-ctas">
            <a href="tel:+919292241065" className="btn-big btn-fill">
              Get in Touch <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-big btn-ghost">
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-main">
            <img
              src="/hero.png"
              alt="Shudhi septic tank cleaning truck on site"
              width="560"
              height="653"
              loading="eager"
            />
          </div>
          <div className="hero-tag">6 AM &ndash; 9 PM Service</div>
        </div>
      </div>
    </section>
  )
}
