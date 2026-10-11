import { useEffect, useMemo, useState } from "react";
import { GITHUB_USER, PINNED_REPOS, profile } from "../data.js";

function useRepos() {
  const [state, setState] = useState({ status: "loading", repos: [] });
  useEffect(() => {
    (async () => {
      try {
        let all = [], page = 1;
        while (true) {
          const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&page=${page}`);
          if (!r.ok) throw new Error(r.status);
          const batch = await r.json();
          all = all.concat(batch);
          if (batch.length < 100) break;
          page++;
        }
        setState({ status: "ok", repos: all });
      } catch {
        setState({ status: "error", repos: [] });
      }
    })();
  }, []);
  return state;
}

export default function Repos() {
  const { repos } = useRepos();
  const [activeIndex, setActiveIndex] = useState(0);

  const displayList = useMemo(() => {
    return PINNED_REPOS.map((item) => {
      const fetched = repos.find(
        (r) => r.name.toLowerCase() === item.name.toLowerCase()
      );

      return {
        id: fetched ? fetched.id : item.name,
        name: item.name,
        description:
          fetched && fetched.description && fetched.description.trim() !== ""
            ? fetched.description
            : item.description,
        html_url: fetched ? fetched.html_url : `https://github.com/${GITHUB_USER}/${item.name}`,
        language: fetched && fetched.language ? fetched.language : item.language,
        stargazers_count: fetched ? fetched.stargazers_count : 0,
        forks_count: fetched ? fetched.forks_count : 0,
      };
    });
  }, [repos]);

  return (
    <section id="repos" className="section-padding container">
      <div className="projects-header">
        <h2 className="title-medium">
          Open <br /> <span className="italic-serif">Source</span>
        </h2>
        <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
          View All on GitHub
        </a>
      </div>

      {/* Stack Accordion Expanding Cards Deck (matching reference recording) */}
      <div className="repo-accordion-deck">
        {displayList.map((r, idx) => {
          const isExpanded = idx === activeIndex;

          return (
            <div
              key={r.id || r.name}
              className={`repo-card-accordion ${isExpanded ? "is-expanded" : "is-collapsed"}`}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {isExpanded ? (
                /* Full Expanded Card Panel */
                <div className="repo-expanded-content">
                  <div className="repo-card-topbar">
                    <div className="repo-title-wrap">
                      <span className="repo-active-dot"></span>
                      <h3 className="repo-card-name">{r.name}</h3>
                    </div>
                    <span className="repo-lang-badge">{r.language}</span>
                  </div>

                  <div className="repo-card-body">
                    <p className="repo-card-desc">{r.description}</p>
                    <div className="repo-meta-row">
                      <span className="repo-meta-tag">★ {r.stargazers_count || 0} Stars</span>
                      <span className="repo-meta-tag">⑂ {r.forks_count || 0} Forks</span>
                      <span className="repo-meta-tag">Public Repository</span>
                    </div>
                  </div>

                  <div className="repo-card-footer">
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
              ) : (
                /* Collapsed Sleek Pill Bar */
                <div className="repo-pill-content">
                  <div className="repo-pill-left">
                    <span className="repo-pill-icon">⚡</span>
                    <h3 className="repo-pill-name">{r.name}</h3>
                  </div>
                  <div className="repo-pill-right">
                    <span className="repo-pill-lang">{r.language}</span>
                    <span className="repo-pill-arrow">↗</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
