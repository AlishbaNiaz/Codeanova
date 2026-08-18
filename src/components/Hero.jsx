import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-eyebrow mono">
          <span className="hero-prompt">$</span> whoami
        </p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">
          {profile.role}
          <span className="hero-cursor" aria-hidden="true" />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}
