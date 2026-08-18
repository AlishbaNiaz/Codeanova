import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Download,
} from 'lucide-react'
import { profile } from '../data/profile'
import { skillTags as tags } from '../data/skills'
import './About.css'

const iconFor = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <p className="section-label">About me</p>
          <h2 className="section-heading">Know me more</h2>
          <p className="about-bio">{profile.bio}</p>
          <ul className="tag-list mono">
            {tags.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <aside className="info-card">
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{profile.email}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>

          <a
            className="btn btn-primary info-cta"
            href={profile.resumeFile}
            download
          >
            <Download size={16} /> Download CV
          </a>

          <div className="social-row">
            {profile.socials.map((s) => {
              const Icon = iconFor[s.label]
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                >
                  {Icon && <Icon size={18} />}
                </a>
              )
            })}
          </div>
        </aside>
      </div>
    </section>
  )
}
