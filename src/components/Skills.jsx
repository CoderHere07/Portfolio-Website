import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section-padding container">
      <h2 className="title-medium"><span className="text-outline">Core</span> <br/><span className="italic-serif">Expertise</span></h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([k, v]) => (
          <div className="skill-card" key={k}>
            <h3 className="skill-title">{k}</h3>
            <p className="skill-desc">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
