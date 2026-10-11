import { profile } from "../data.js";

export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <h2 className="contact-title">
        Let's <br/> <span className="italic-serif text-outline">Connect</span>
      </h2>
      <div className="contact-links">
        <a className="btn" href={`mailto:${profile.email}`}>Email Me</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
