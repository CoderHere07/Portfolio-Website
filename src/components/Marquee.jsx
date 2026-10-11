export default function Marquee() {
  const words = ["Performance", "Scalability", "Clean Code", "REST APIs", "System Design", "Node.js", "React", "MongoDB"];
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...Array(2)].map((_, i) => (
          <div style={{display: 'inline-block'}} key={i}>
            {words.map((w, j) => (
              <span key={j}>{w} •</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
