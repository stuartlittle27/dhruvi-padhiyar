import { useState, useEffect, useRef } from "react";

const C = {
  bg:      "#111110",
  surface: "#161614",
  card:    "#1C1C1A",
  border:  "#2A2A27",
  accent:  "#D4A853",
  text:    "#E8E4DC",
  muted:   "#6B6860",
  dim:     "#3A3A36",
  white:   "#F5F2EC",
};

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        background: ${C.bg};
        color: ${C.text};
        font-family: 'Outfit', sans-serif;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
      }
      ::-webkit-scrollbar { width: 2px; }
      ::-webkit-scrollbar-thumb { background: ${C.dim}; }

      .serif { font-family: 'Playfair Display', serif; }
      .mono  { font-family: 'JetBrains Mono', monospace; }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `}</style>
  );
}

function useVisible(threshold = 0.08) {
  const ref = useRef();
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Section({ id, children, bg, style: s = {} }) {
  const [ref, vis] = useVisible();
  return (
    <section id={id} ref={ref} style={{
      background: bg || C.bg,
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(28px)",
      transition: "opacity 0.85s ease, transform 0.85s ease",
      ...s,
    }}>
      {children}
    </section>
  );
}

function Label({ children }) {
  return (
    <div className="mono" style={{
      fontSize: 10, letterSpacing: "0.22em", color: C.muted,
      textTransform: "uppercase", marginBottom: 20,
    }}>{children}</div>
  );
}

function Divider({ style: s = {} }) {
  return <div style={{ height: 1, background: C.border, ...s }} />;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      for (const id of ["home","about","skills","experience","projects","contact"]) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 90 && r.bottom >= 90) { setActive(id); break; }
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      background: scrolled ? "rgba(17,17,16,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.4s ease",
      padding: "0 48px",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => go("home")} className="serif" style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 18, color: C.white, fontWeight: 700,
        }}>
          Dhruvi<span style={{ color: C.accent }}>.</span>
        </button>

        <div style={{ display: "flex", gap: 40 }}>
          {["about","skills","experience","projects","contact"].map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 400, textTransform: "capitalize",
              color: active === l ? C.white : C.muted,
              transition: "color 0.2s",
              letterSpacing: "0.02em",
            }}>{l}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "flex-end", padding: "0 48px 80px",
      background: C.bg, position: "relative",
    }}>
      {/* Subtle decorative circles */}
      <div style={{
        position: "absolute", top: 80, right: 48,
        width: 220, height: 220,
        border: `1px solid ${C.border}`,
        borderRadius: "50%", opacity: 0.4, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 100, right: 68,
        width: 180, height: 180,
        border: `1px solid ${C.dim}`,
        borderRadius: "50%", opacity: 0.2, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%" }}>
        {/* Top label row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 64, animation: "fadeIn 1s ease both",
        }}>
          <span className="mono" style={{ fontSize: 11, color: C.muted, letterSpacing: "0.18em" }}>FULL-STACK DEVELOPER</span>
          <span className="mono" style={{ fontSize: 11, color: C.muted, letterSpacing: "0.18em" }}>AHMEDABAD, INDIA</span>
        </div>

        {/* Big name */}
        <h1 className="serif" style={{
          fontSize: "clamp(72px, 11vw, 148px)", fontWeight: 800,
          color: C.white, lineHeight: 0.88, letterSpacing: "-0.02em",
          animation: "fadeUp 0.9s ease both",
        }}>
          Dhruvi<br />
          <span style={{ color: C.accent }}>Padhiyar</span>
        </h1>

        <Divider style={{ margin: "48px 0" }} />

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40, animation: "fadeUp 0.9s 0.2s ease both",
        }}>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, fontWeight: 300 }}>
            Building scalable web applications with Laravel, React, Next.js and GraphQL. Focused on clean architecture and real-time systems.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Laravel · React.js · Next.js", "GraphQL · RESTful APIs", "MySQL · PostgreSQL · MongoDB", "WebSockets · Chrome Extensions"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.accent, flexShrink: 0 }} />
                <span className="mono" style={{ fontSize: 12, color: C.dim }}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div />
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button onClick={() => go("projects")} style={{
                padding: "12px 28px", background: C.accent, color: C.bg,
                border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                fontWeight: 600, fontSize: 13, letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >View Work</button>
              <button onClick={() => go("contact")} style={{
                padding: "12px 28px", background: "transparent", color: C.text,
                border: `1px solid ${C.border}`, cursor: "pointer",
                fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13,
                letterSpacing: "0.04em", transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}
              >Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" bg={C.surface} style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 96 }}>
          <div>
            <Label>01 / About</Label>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 800, color: C.white, lineHeight: 1.05, marginBottom: 32 }}>
              Who<br />I Am
            </h2>
            <Divider />
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              {[["2+","Years Experience"],["15+","Projects Built"],["2","Hackathons"]].map(([n, l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: 36, fontWeight: 700, color: C.accent }}>{n}</div>
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
              I'm a <span style={{ color: C.text }}>Full-Stack Developer</span> currently at Zealous Systems, building production-grade web applications with modern frameworks and thoughtful backend architecture.
            </p>
            <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.9, fontWeight: 300, marginBottom: 52 }}>
              From REST APIs and real-time systems to Chrome Extensions and data analysis — I enjoy every layer of the stack. I also serve as an External Examiner at LJ Institute, evaluating Full Stack Development students.
            </p>

            <Divider style={{ marginBottom: 40 }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {[
                { label: "Backend Development", desc: "Laravel, PHP, Eloquent ORM, MVC architecture" },
                { label: "Frontend & UI", desc: "React.js, Next.js, Livewire — responsive interfaces" },
                { label: "Database Design", desc: "MySQL, PostgreSQL, MongoDB — optimized queries" },
                { label: "Developer Tooling", desc: "Chrome Extensions, WebSockets, Jira automation" },
              ].map((h, i) => (
                <div key={i} style={{
                  padding: "28px 0",
                  borderBottom: `1px solid ${C.border}`,
                  borderRight: i % 2 === 0 ? `1px solid ${C.border}` : "none",
                  paddingRight: i % 2 === 0 ? 40 : 0,
                  paddingLeft: i % 2 === 1 ? 40 : 0,
                }}>
                  <div style={{ fontWeight: 600, color: C.white, marginBottom: 6, fontSize: 14 }}>{h.label}</div>
                  <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: "28px 32px", background: C.card, border: `1px solid ${C.border}` }}>
              <Label>Achievements</Label>
              {[
                "Hackout 2023 Finalist — 36-hr hackathon at DA-IICT",
                "NASA Space Apps Challenge 2023 — 48-hr hackathon, Nirma University",
                "TCS NQT Score: 2352 / 3600",
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 2 ? 12 : 0 }}>
                  <span style={{ color: C.accent, flexShrink: 0, fontSize: 14 }}>—</span>
                  <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const [ref, vis] = useVisible(0.05);

  const groups = [
    {
      title: "Languages & Frameworks",
      items: [
        { name: "PHP / Laravel", level: 90 },
        { name: "JavaScript / React.js", level: 82 },
        { name: "Next.js", level: 75 },
        { name: "Livewire / CodeIgniter", level: 78 },
        { name: "Python", level: 68 },
      ],
    },
    {
      title: "Databases & APIs",
      items: [
        { name: "RESTful APIs", level: 90 },
        { name: "MySQL", level: 86 },
        { name: "GraphQL", level: 72 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 68 },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git / GitHub / Bitbucket", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Jira", level: 78 },
        { name: "WebSockets", level: 75 },
        { name: "Web Scraping", level: 70 },
      ],
    },
  ];

  const also = ["Chrome Extensions", "Filament", "MERN Stack", "NumPy", "Pandas", "Matplotlib", "Bootstrap", "Figma"];

  return (
    <Section id="skills" bg={C.bg} style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <Label>02 / Skills</Label>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 800, color: C.white, lineHeight: 1.05 }}>
              Skills &<br />Expertise
            </h2>
          </div>
        </div>

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${C.border}`, marginBottom: 48 }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{
              padding: "40px 36px",
              background: C.card,
              borderRight: gi < 2 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{ fontWeight: 600, color: C.white, fontSize: 14, marginBottom: 32 }}>{g.title}</div>
              {g.items.map((sk, si) => (
                <div key={si} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: C.muted }}>{sk.name}</span>
                    <span className="mono" style={{ fontSize: 11, color: C.dim }}>{sk.level}%</span>
                  </div>
                  <div style={{ height: 2, background: C.border }}>
                    <div style={{
                      height: "100%", background: C.accent,
                      width: vis ? `${sk.level}%` : "0%",
                      transition: `width 1s ${si * 0.08}s ease`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {also.map(t => (
            <span key={t} className="mono" style={{
              padding: "8px 16px", border: `1px solid ${C.border}`,
              fontSize: 11, color: C.muted, letterSpacing: "0.06em",
              transition: "all 0.2s", cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
            >{t}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const exps = [
    {
      title: "Full-Stack Developer",
      company: "Zealous Systems",
      period: "Aug 2025 – Present",
      current: true,
      desc: "Developing scalable production-grade web applications using Laravel, React.js, Next.js, Filament, and GraphQL. Building high-performance APIs and maintainable backend architecture.",
      tech: ["Laravel", "React.js", "Next.js", "Filament", "GraphQL"],
    },
    {
      title: "External Examiner",
      company: "LJ Institute of Engineering & Technology",
      period: "Aug 2025 – Present",
      current: true,
      desc: "Conducting practical examinations and technical vivas for Full Stack Development students. Evaluating coding practices, project implementations, and technical understanding.",
      tech: ["Full Stack", "Assessment"],
    },
    {
      title: "Laravel Developer",
      company: "Aipxperts Technolabs",
      period: "Apr 2024 – Aug 2025",
      current: false,
      desc: "Built scalable backend systems and REST APIs. Worked on client projects including Legiit (legiit.com) and Yokohama Malaysia. Optimized database queries and application performance.",
      tech: ["Laravel", "React", "Livewire", "MySQL"],
    },
    {
      title: "Laravel Trainee",
      company: "Aipxperts Technolabs",
      period: "Nov 2023 – Apr 2024",
      current: false,
      desc: "Mastered Laravel fundamentals — MVC, Eloquent ORM, REST APIs, and authentication. Built demo applications and contributed to real-world tasks under mentorship.",
      tech: ["Laravel", "PHP", "MySQL"],
    },
  ];

  return (
    <Section id="experience" bg={C.surface} style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 96 }}>
          <div>
            <Label>03 / Experience</Label>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 800, color: C.white, lineHeight: 1.05 }}>
              Work<br />History
            </h2>
          </div>

          <div>
            {exps.map((e, i) => (
              <div key={i}>
                <div style={{ padding: "40px 0", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}
                  onMouseEnter={el => { const t = el.currentTarget.querySelector(".exp-t"); if (t) t.style.color = C.accent; }}
                  onMouseLeave={el => { const t = el.currentTarget.querySelector(".exp-t"); if (t) t.style.color = C.white; }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
                      <h3 className="exp-t" style={{ fontSize: 18, fontWeight: 600, color: C.white, transition: "color 0.25s" }}>{e.title}</h3>
                      {e.current && (
                        <span className="mono" style={{ fontSize: 9, padding: "3px 8px", border: `1px solid ${C.accent}`, color: C.accent, letterSpacing: "0.14em" }}>NOW</span>
                      )}
                    </div>
                    <div style={{ fontSize: 14, color: C.accent, marginBottom: 14, fontWeight: 500 }}>{e.company}</div>
                    <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8, maxWidth: 540, marginBottom: 18 }}>{e.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {e.tech.map(t => (
                        <span key={t} className="mono" style={{ fontSize: 10, padding: "4px 10px", border: `1px solid ${C.border}`, color: C.dim }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap", paddingTop: 4 }}>{e.period}</div>
                </div>
                {i < exps.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>

        <Divider style={{ margin: "80px 0 64px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 96 }}>
          <div><Label>Education</Label></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `1px solid ${C.border}` }}>
            {[
              { degree: "B.E. Information Technology", school: "LJ Institute of Engineering & Technology, Ahmedabad", year: "2022 – 2025" },
              { degree: "Diploma in Information Technology", school: "Government Polytechnic for Girls, Ahmedabad", year: "2019 – 2022" },
            ].map((ed, i) => (
              <div key={i} style={{
                padding: "36px 32px", background: C.card,
                borderRight: i === 0 ? `1px solid ${C.border}` : "none",
              }}>
                <div className="mono" style={{ fontSize: 10, color: C.muted, letterSpacing: "0.15em", marginBottom: 16 }}>{ed.year}</div>
                <div style={{ fontWeight: 600, color: C.white, fontSize: 15, marginBottom: 8 }}>{ed.degree}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{ed.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    { n: "01", title: "Jira Backlog Export", tag: "Chrome Extension", desc: "Exports all Jira backlog tasks to CSV by entering the board name. Simplifies task reporting and data-sharing workflows.", tech: ["JavaScript", "Chrome Extension", "CSV"], github: null },
    { n: "02", title: "LM Documentation Redirect", tag: "Chrome Extension", desc: "Instantly redirects searches to official Bootstrap or Laravel documentation based on query context.", tech: ["JavaScript", "Chrome Extension"], github: null },
    { n: "03", title: "Global Suicide Rate Analysis", tag: "Data Science", desc: "Analyzed and visualized global datasets to identify trends and demographic insights using Python data science libraries.", tech: ["Python", "Pandas", "NumPy", "Matplotlib"], github: "https://github.com/dhruvipadhiyar" },
    { n: "04", title: "Real-Time Chat Application", tag: "Web App", desc: "Real-time chat system using Laravel and Socket.io with WebSocket-based two-way communication for seamless live messaging.", tech: ["Laravel", "Socket.io", "WebSockets"], github: null },
    { n: "05", title: "Saral Health", tag: "Full Stack", desc: "MERN-based system to digitize hospital paperwork with smart prescription suggestions. Built during Hackout 2023.", tech: ["MERN", "Node.js", "MongoDB", "Redux"], github: "https://github.com/dhruvipadhiyar" },
    { n: "06", title: "Mind Your Health", tag: "Web", desc: "Mental health awareness platform with data-driven insights and interactive UI exploring trends and challenges.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/dhruvipadhiyar" },
  ];

  return (
    <Section id="projects" bg={C.bg} style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <Label>04 / Projects</Label>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 800, color: C.white, lineHeight: 1.05 }}>
              Featured<br />Work
            </h2>
          </div>
          <a href="https://github.com/dhruvipadhiyar" target="_blank" rel="noreferrer" className="mono" style={{
            fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: "0.1em",
            paddingBottom: 4, borderBottom: `1px solid ${C.border}`, transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = C.accent}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}
          >VIEW ALL ON GITHUB ↗</a>
        </div>

        <div style={{ border: `1px solid ${C.border}` }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "56px 1fr auto",
              gap: 40, padding: "36px 40px", alignItems: "start",
              borderBottom: i < projects.length - 1 ? `1px solid ${C.border}` : "none",
              transition: "background 0.25s", cursor: "default",
            }}
              onMouseEnter={e => e.currentTarget.style.background = C.card}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div className="mono" style={{ fontSize: 11, color: C.dim, paddingTop: 3 }}>{p.n}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: C.white }}>{p.title}</h3>
                  <span className="mono" style={{ fontSize: 10, color: C.muted, letterSpacing: "0.1em" }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, maxWidth: 520, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tech.map(t => (
                    <span key={t} className="mono" style={{ fontSize: 10, padding: "3px 10px", border: `1px solid ${C.border}`, color: C.dim }}>{t}</span>
                  ))}
                </div>
              </div>
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="mono" style={{
                  fontSize: 11, color: C.muted, textDecoration: "none",
                  letterSpacing: "0.1em", paddingTop: 3, transition: "color 0.2s", whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accent}
                  onMouseLeave={e => e.currentTarget.style.color = C.muted}
                >↗ GitHub</a>
              ) : <div />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState("idle");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "630a3631-1795-4810-a66a-696d17de5c4b", ...form }),
      });
      const data = await res.json();
      setState(data.success ? "success" : "error");
      if (data.success) setForm({ name: "", email: "", subject: "", message: "" });
    } catch { setState("error"); }
  };

  const inp = {
    width: "100%", padding: "14px 0",
    background: "transparent", border: "none",
    borderBottom: `1px solid ${C.border}`,
    color: C.text, fontFamily: "'Outfit', sans-serif",
    fontSize: 15, fontWeight: 300, outline: "none", transition: "border-color 0.25s",
  };

  return (
    <Section id="contact" bg={C.surface} style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 96 }}>
          <div>
            <Label>05 / Contact</Label>
            <h2 className="serif" style={{ fontSize: 48, fontWeight: 800, color: C.white, lineHeight: 1.05, marginBottom: 48 }}>
              Let's<br />Connect
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { l: "Email",    v: "dhruvi.padhiyar274@gmail.com", h: "mailto:dhruvi.padhiyar274@gmail.com" },
                { l: "LinkedIn", v: "dhruvi-padhiyar",              h: "https://www.linkedin.com/in/dhruvi-padhiyar-b043a1284/" },
                { l: "Location", v: "Ahmedabad, India",             h: null },
              ].map(c => (
                <div key={c.l}>
                  <div className="mono" style={{ fontSize: 10, color: C.dim, letterSpacing: "0.18em", marginBottom: 6 }}>{c.l.toUpperCase()}</div>
                  {c.h ? (
                    <a href={c.h} target="_blank" rel="noreferrer" style={{ color: C.muted, textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = C.accent}
                      onMouseLeave={e => e.currentTarget.style.color = C.muted}
                    >{c.v}</a>
                  ) : <span style={{ color: C.muted, fontSize: 14 }}>{c.v}</span>}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              {["name","email"].map(f => (
                <div key={f}>
                  <label className="mono" style={{ display: "block", fontSize: 10, color: C.dim, letterSpacing: "0.18em", marginBottom: 12 }}>{f.toUpperCase()}</label>
                  <input name={f} value={form[f]} onChange={handle} required
                    placeholder={f === "name" ? "Your Name" : "your@email.com"} style={inp}
                    onFocus={e => e.target.style.borderBottomColor = C.accent}
                    onBlur={e => e.target.style.borderBottomColor = C.border}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="mono" style={{ display: "block", fontSize: 10, color: C.dim, letterSpacing: "0.18em", marginBottom: 12 }}>SUBJECT</label>
              <input name="subject" value={form.subject} onChange={handle} required placeholder="Project Inquiry" style={inp}
                onFocus={e => e.target.style.borderBottomColor = C.accent}
                onBlur={e => e.target.style.borderBottomColor = C.border}
              />
            </div>
            <div>
              <label className="mono" style={{ display: "block", fontSize: 10, color: C.dim, letterSpacing: "0.18em", marginBottom: 12 }}>MESSAGE</label>
              <textarea name="message" value={form.message} onChange={handle} required rows={5}
                placeholder="Tell me about your project..."
                style={{ ...inp, resize: "none", fontFamily: "'Outfit', sans-serif" }}
                onFocus={e => e.target.style.borderBottomColor = C.accent}
                onBlur={e => e.target.style.borderBottomColor = C.border}
              />
            </div>
            <div>
              <button type="submit" disabled={state === "submitting"} style={{
                padding: "14px 40px", background: state === "submitting" ? C.dim : C.accent,
                color: C.bg, border: "none",
                cursor: state === "submitting" ? "not-allowed" : "pointer",
                fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                fontSize: 14, letterSpacing: "0.04em", transition: "opacity 0.2s",
              }}
                onMouseEnter={e => { if (state !== "submitting") e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{state === "submitting" ? "Sending..." : "Send Message →"}</button>
              {state === "success" && <div style={{ marginTop: 20, fontSize: 14, color: "#6FCF97" }}>✓ Message sent — I'll be in touch soon.</div>}
              {state === "error"   && <div style={{ marginTop: 20, fontSize: 14, color: "#EB5757" }}>Something went wrong. Please try again.</div>}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 48px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <button className="serif" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: C.white, fontWeight: 700 }}>
          Dhruvi<span style={{ color: C.accent }}>.</span>
        </button>
        <span className="mono" style={{ fontSize: 10, color: C.muted, letterSpacing: "0.1em" }}>BUILT WITH REACT · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: 28 }}>
          {[
            { l: "GitHub",   h: "https://github.com/dhruvipadhiyar" },
            { l: "LinkedIn", h: "https://www.linkedin.com/in/dhruvi-padhiyar-b043a1284/" },
            { l: "Email",    h: "mailto:dhruvi.padhiyar274@gmail.com" },
          ].map(s => (
            <a key={s.l} href={s.h} target="_blank" rel="noreferrer" className="mono" style={{ fontSize: 10, color: C.muted, textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.accent}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >{s.l.toUpperCase()}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
