import {
  Code2,
  PenTool,
  Smartphone,
  Figma,
  Globe,
  Megaphone,
} from "lucide-react";
import { services } from "../data/profile";
import "./Services.css";

const icons = [Globe, Code2, Smartphone, Figma, PenTool, Megaphone];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-label">What I do</p>
        <h2 className="section-heading">Services</h2>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="service-card" key={service.title}>
                <span className="service-icon">
                  <Icon size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
