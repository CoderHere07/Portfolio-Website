import { useEffect, useRef, useState } from "react";
import { projects } from "../data.js";

function ProjectVideo({ src, title }) {
  if (!src) return null;
  const m = src.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  const yt = m ? m[1] : null;
  return yt ? (
    <iframe
      className="video"
      title={title}
      loading="lazy"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/${yt}`}
    />
  ) : (
    <video className="video" autoPlay muted loop playsInline src={src} />
  );
}

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Animated vibrant electric plasma web & particle canvas backdrop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let t = 0;
    const render = () => {
      t += 0.009;
      ctx.clearRect(0, 0, width, height);

      const isDay = document.documentElement.getAttribute("data-theme") === "day";

      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isDay) {
        bgGrad.addColorStop(0, "#f2f6eb");
        bgGrad.addColorStop(0.5, "#e3ebd5");
        bgGrad.addColorStop(1, "#f4f8ee");
      } else {
        bgGrad.addColorStop(0, "#030802");
        bgGrad.addColorStop(0.5, "#091c06");
        bgGrad.addColorStop(1, "#020601");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const auraGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.5
      );
      if (isDay) {
        auraGrad.addColorStop(0, "rgba(94, 138, 0, 0.2)");
        auraGrad.addColorStop(0.5, "rgba(94, 138, 0, 0.08)");
        auraGrad.addColorStop(1, "rgba(242, 246, 235, 0)");
      } else {
        auraGrad.addColorStop(0, "rgba(204, 255, 0, 0.22)");
        auraGrad.addColorStop(0.5, "rgba(100, 220, 0, 0.08)");
        auraGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      }
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      const lines = [
        { amplitude: 120, frequency: 0.002, speed: 0.7, color: isDay ? "rgba(94, 138, 0, 0.65)" : "rgba(204, 255, 0, 0.5)", width: 3.5, blur: 20 },
        { amplitude: 170, frequency: 0.0015, speed: 0.5, color: isDay ? "rgba(70, 115, 0, 0.55)" : "rgba(160, 255, 50, 0.4)", width: 2, blur: 15 },
        { amplitude: 95, frequency: 0.003, speed: 1.1, color: isDay ? "rgba(50, 95, 0, 0.5)" : "rgba(100, 235, 30, 0.35)", width: 4, blur: 25 },
        { amplitude: 140, frequency: 0.0025, speed: 0.9, color: isDay ? "rgba(110, 155, 0, 0.55)" : "rgba(220, 255, 100, 0.4)", width: 2.5, blur: 18 },
        { amplitude: 80, frequency: 0.004, speed: 1.3, color: isDay ? "rgba(80, 125, 0, 0.45)" : "rgba(180, 255, 60, 0.3)", width: 1.8, blur: 12 },
        { amplitude: 150, frequency: 0.0018, speed: 0.6, color: isDay ? "rgba(94, 138, 0, 0.5)" : "rgba(204, 255, 0, 0.35)", width: 3, blur: 22 },
      ];

      lines.forEach((line, index) => {
        ctx.save();
        ctx.shadowColor = isDay ? "rgba(94, 138, 0, 0.5)" : "rgba(204, 255, 0, 0.95)";
        ctx.shadowBlur = line.blur;
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 12) {
          const y =
            height / 2 +
            Math.sin(x * line.frequency + t * line.speed + index) * line.amplitude +
            Math.cos(x * 0.0012 + t * 0.4) * 45;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      });

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.shadowColor = isDay ? "rgba(94, 138, 0, 0.5)" : "rgba(204, 255, 0, 0.9)";
        ctx.shadowBlur = 10;
        ctx.fillStyle = isDay ? `rgba(94, 138, 0, ${p.alpha})` : `rgba(204, 255, 0, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Smooth scroll rotation during natural page scroll (zero pin wrapper, zero dead space)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalRange = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalRange));

      const totalProjects = projects.length;
      setRotation(progress * Math.PI * 1.5);

      const calculatedIdx = Math.min(
        totalProjects - 1,
        Math.max(0, Math.floor(progress * totalProjects))
      );
      setActiveIndex(calculatedIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag interaction handlers
  const handleMouseDown = (e) => {
    if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".btn")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });

    if (isDragging) {
      const deltaY = e.clientY - dragStart.y;
      setRotation((prev) => prev - deltaY * 0.006);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".btn")) return;
    if (e.touches.length > 0) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length > 0) {
      const deltaY = e.touches[0].clientY - dragStart.y;
      setRotation((prev) => prev - deltaY * 0.007);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    const step = (2 * Math.PI) / projects.length;
    setRotation((prev) => prev + step);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const step = (2 * Math.PI) / projects.length;
    setRotation((prev) => prev - step);
  };

  const activeProjectData = projects[activeIndex] || projects[0];

  return (
    <section ref={sectionRef} id="work" className="works-3d-section">
      <canvas ref={canvasRef} className="works-canvas-bg" />

      {/* Massive Background Watermark Typography */}
      <div className="works-bg-watermark">
        <span className="watermark-solid">SELECTED</span>
        <span className="watermark-outline">WORKS</span>
      </div>

      <div className="works-header-3d">
        <div>
          <h2 className="title-medium">
            Selected <br />
            <span className="italic-serif">Works</span>
          </h2>
        </div>
        <div className="works-controls">
          <button className="btn nav-3d-btn" onClick={prevProject} aria-label="Previous project">
            ← Prev
          </button>
          <span className="counter-3d">
            0{activeIndex + 1} / 0{projects.length}
          </span>
          <button className="btn nav-3d-btn" onClick={nextProject} aria-label="Next project">
            Next →
          </button>
        </div>
      </div>

      {/* 3D Interactive Vertical Stage */}
      <div
        ref={containerRef}
        className={`works-stage-3d ${isDragging ? "is-grabbing" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="works-deck-3d"
          style={{
            transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
          }}
        >
          {projects.map((p, idx) => {
            const N = projects.length;
            const angle = (idx / N) * 2 * Math.PI + rotation;

            const posY = -Math.sin(angle) * 24; // vh
            const posX = Math.sin(angle * 2) * 8; // vw
            const transZ = Math.cos(angle) * 190 + 40; // px
            const rotX = Math.sin(angle) * 28; // deg
            const rotY = -Math.sin(angle * 1.5) * 8; // deg
            const rotZ = -Math.sin(angle) * 4; // deg
            const scale = 0.7 + (Math.cos(angle) + 1) * 0.14;
            const opacity = 0.45 + (Math.cos(angle) + 1) * 0.28;

            const isCurrentActive = idx === activeIndex;

            const cardColors = [
              "linear-gradient(135deg, #10192e, #080d19)",
              "linear-gradient(135deg, #241433, #0f0717)",
              "linear-gradient(135deg, #092420, #041210)",
              "linear-gradient(135deg, #2e1d10, #120b05)",
            ];

            return (
              <div
                key={p.title}
                className={`card-3d-wrapper ${isCurrentActive ? "active-card" : ""}`}
                onClick={(e) => {
                  if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".btn")) return;
                  setActiveIndex(idx);
                  const targetAngle = -(idx / N) * 2 * Math.PI;
                  setRotation(targetAngle);
                }}
                style={{
                  transform: `
                    translate3d(${posX}vw, ${posY}vh, ${transZ}px)
                    rotateX(${rotX}deg)
                    rotateY(${rotY}deg)
                    rotateZ(${rotZ}deg)
                    scale(${scale})
                  `,
                  opacity: Math.max(0.3, Math.min(1, opacity)),
                  zIndex: isCurrentActive ? 60 : Math.round(transZ + 300),
                }}
              >
                <div
                  className="card-3d-inner"
                  style={{ background: cardColors[idx % cardColors.length] }}
                >
                  <div className="card-window-bar">
                    <div className="window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="window-url">{p.title.toLowerCase().replace(/\s+/g, "")}.app</div>
                    <span className="badge-3d">{p.stack.split(",")[0]}</span>
                  </div>

                  <div className="card-window-body">
                    {p.video ? (
                      <div className="card-video-wrap">
                        <ProjectVideo src={p.video} title={p.title} />
                      </div>
                    ) : (
                      <div className="card-mockup-graphic">
                        <div className="graphic-header">
                          <span className="graphic-tag">{p.stack}</span>
                          <h3 className="graphic-title">{p.title}</h3>
                        </div>
                        <p className="graphic-summary">{p.summary}</p>

                        <div className="graphic-visual-block">
                          <div className="mock-code-lines">
                            <span className="code-ln blue">const project = "{p.title}";</span>
                            <span className="code-ln green">techStack: [{p.stack}];</span>
                            <span className="code-ln yellow">status: Active • Vertical 3D</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="card-window-footer">
                    <div className="card-info-text">
                      <h4 className="card-title-text">{p.title}</h4>
                      <p className="card-stack-text">{p.stack}</p>
                    </div>
                    <div className="card-actions-group">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Site ↗
                        </a>
                      )}
                      {p.demoLink && (
                        <a
                          href={p.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Active Project Detail Banner */}
      <div className="active-project-banner">
        <div className="banner-left">
          <span className="banner-tag">{activeProjectData.stack}</span>
          <h3 className="banner-title">{activeProjectData.title}</h3>
          <p className="banner-desc">{activeProjectData.summary}</p>
        </div>
        <div className="banner-right">
          {activeProjectData.live && (
            <a
              href={activeProjectData.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Explore Live Site ↗
            </a>
          )}
          {activeProjectData.demoLink && (
            <a
              href={activeProjectData.demoLink}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Watch Demo Video ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
