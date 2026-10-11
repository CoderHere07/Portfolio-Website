import { profile } from "../data.js";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-subtitle">Software Engineer</div>
          <h1 className="hero-title title-large">
            <span className="text-outline">Adnan </span>
            <span className="italic-serif">Shahzad</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn" href={`mailto:${profile.email}`}>Let's Talk</a>
            <a className="btn" href="/resume.pdf" download>Download Resume</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/pics/pic.jpeg" alt="Adnan Shahzad" />
        </div>
      </div>
    </header>
  );
}
