import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { profile, services } from "../data/profile";
import "./Footer.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const iconFor = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
};

export default function Footer() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <a href="#home" className="footer-brand mono">
          CodeAnova   
          </a>
          <p className="footer-bio">
            {profile.role} based in {profile.location}, building clean,
            responsive interfaces.
          </p>
          <div className="footer-socials">
            {profile.socials.map((s) => {
              const Icon = iconFor[s.label];
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading mono">Navigate</h4>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading mono">Services</h4>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading mono">Get in touch</h4>
          <a className="footer-contact-row" href={`mailto:${profile.email}`}>
            <Mail size={15} />
            {profile.email}
          </a>
          <p className="footer-contact-row">
            <MapPin size={15} />
            {profile.location}
          </p>
          <a href="#contact" className="btn btn-primary footer-cta">
            Start a project
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="footer-top-link mono">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
