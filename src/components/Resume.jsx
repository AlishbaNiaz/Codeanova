import { useEffect, useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { timeline } from "../data/timeline";
import { skillLevels } from "../data/skills";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-heading">Resume</h2>

        <ol className="timeline">
          {timeline.map((item) => (
            <li
              className={`timeline-item timeline-item--${item.type}`}
              key={item.title + item.period}
            >
              <span className="timeline-icon">
                {item.type === "education" ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
              </span>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="skills-block">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {skillLevels.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-row-label">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
