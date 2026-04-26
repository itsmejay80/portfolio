// Variant B — Monospace grid. Dev aesthetic with strict baseline.
function VariantMono({ data, density, theme }) {
  const d = data;
  const pad = density === "compact" ? 48 : 80;
  const dark = theme === "dark";
  return (
    <div className={`mo-root ${dark ? 'mo-dark' : ''}`}>
      <style>{`
        .mo-root {
          --bg: #fafaf9;
          --surface: #ffffff;
          --fg: #111111;
          --fg-dim: #666666;
          --fg-faint: #888888;
          --line: #11111133;
          --line-soft: #11111122;
          --ink: #111111;   /* inverted block background */
          --ink-fg: #fafaf9; /* inverted block foreground */
          background: var(--bg); color: var(--fg);
          font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace;
          -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.5;
          transition: background 0.25s ease, color 0.25s ease;
          width: 100%;
          overflow-x: clip;
        }
        .mo-root.mo-dark {
          --bg: #0b0b0c;
          --surface: #111113;
          --fg: #f2f2ef;
          --fg-dim: #a0a0a0;
          --fg-faint: #707070;
          --line: #ffffff22;
          --line-soft: #ffffff14;
          --ink: #f2f2ef;
          --ink-fg: #0b0b0c;
        }
        .mo-root a { color: inherit; text-decoration: none; }
        .mo-root * { min-width: 0; }
        .mo-root img, .mo-root svg { max-width: 100%; }
        .mo-sans { font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        .mo-nav { position: sticky; top: 0; z-index: 20; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px dashed var(--line); }
        .mo-nav-inner { max-width: 1120px; margin: 0 auto; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-size: 12px; }
        .mo-nav-links { display: flex; gap: 24px; }
        .mo-nav-links a { color: var(--fg-dim); }
        .mo-nav-links a:hover { color: var(--fg); text-decoration: underline; text-underline-offset: 3px; }
        .mo-nav-spacer { width: 90px; flex-shrink: 0; }
        .mo-wrap { max-width: 1120px; margin: 0 auto; padding: 0 32px; }
        .mo-label { font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--fg-faint); padding-top: 4px; }
        .mo-dim { color: var(--fg-dim); }
        .mo-hl {
          background: var(--ink); color: var(--ink-fg);
          padding: 2px 6px;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .mo-hero { padding-top: ${pad}px; padding-bottom: ${pad + 24}px; }
        .mo-hero-card { border: 1px solid var(--fg); background: var(--surface); padding: 32px; display: grid; grid-template-columns: 64px 1fr auto; gap: 24px; align-items: start; }
        .mo-avatar { width: 64px; height: 64px; background: var(--ink); color: var(--ink-fg); display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 500; }
        .mo-hero-name { font-family: 'Inter', sans-serif; font-size: 40px; letter-spacing: -0.03em; font-weight: 500; margin: 0 0 8px; line-height: 1; }
        .mo-hero-tag { font-size: 13px; color: var(--fg-dim); margin-bottom: 24px; }
        .mo-hero-intro { font-family: 'Inter', sans-serif; font-size: 22px; letter-spacing: -0.02em; line-height: 1.25; color: var(--fg); max-width: 32ch; margin: 0; font-weight: 400; }
        .mo-hero-side { font-size: 12px; text-align: right; }
        .mo-hero-side .row { margin-bottom: 6px; }
        .mo-hero-side .dot { display: inline-block; width: 6px; height: 6px; background: var(--fg); border-radius: 999px; margin-right: 6px; animation: mo-pulse 1.4s infinite; }
        @keyframes mo-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        .mo-kv { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--fg); border-top: none; background: var(--surface); }
        .mo-kv > div { padding: 16px 20px; border-right: 1px solid var(--line); }
        .mo-kv > div:last-child { border-right: none; }
        .mo-kv .k { font-size: 11px; color: var(--fg-faint); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 4px; }
        .mo-kv .v { font-family: 'Inter', sans-serif; font-size: 16px; letter-spacing: -0.01em; font-weight: 500; }
        .mo-section { padding-top: ${pad}px; padding-bottom: ${pad}px; border-top: 1px dashed var(--line); }
        .mo-section-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 40px; }
        .mo-section-head h2 { font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 500; letter-spacing: -0.02em; margin: 0; }
        .mo-section-head .mo-label { padding-top: 12px; }

        .mo-about { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .mo-about p { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; color: var(--fg-dim); margin: 0 0 16px; letter-spacing: -0.01em; }
        .mo-root.mo-dark .mo-about p { color: #c8c8c4; }
        .mo-about .lede { font-size: 20px; color: var(--fg); }

        .mo-proj-list { display: grid; grid-template-columns: 1fr; border: 1px solid var(--fg); background: var(--surface); }
        .mo-proj { display: grid; grid-template-columns: 60px 80px 1fr 280px 40px; gap: 16px; align-items: center; padding: 20px 24px; border-bottom: 1px dashed var(--line); transition: background 0.15s, color 0.15s; cursor: pointer; }
        .mo-proj:last-child { border-bottom: none; }
        .mo-proj:hover { background: var(--ink); color: var(--ink-fg); }
        .mo-proj:hover .mo-proj-stack span { border-color: color-mix(in srgb, var(--ink-fg) 40%, transparent); }
        .mo-proj-n { font-size: 12px; opacity: 0.5; }
        .mo-proj-year { font-size: 12px; opacity: 0.5; }
        .mo-proj-title { font-family: 'Inter', sans-serif; font-size: 20px; letter-spacing: -0.02em; font-weight: 500; }
        .mo-proj-title small { display: block; font-family: 'JetBrains Mono', monospace; font-size: 11px; opacity: 0.6; font-weight: 400; margin-top: 2px; letter-spacing: 0; }
        .mo-proj-stack { display: flex; flex-wrap: wrap; gap: 4px; justify-content: flex-end; }
        .mo-proj-stack span { font-size: 10px; padding: 2px 8px; border: 1px solid var(--line); border-radius: 2px; }
        .mo-proj-arrow { text-align: right; opacity: 0.4; }
        .mo-proj:hover .mo-proj-arrow { opacity: 1; }

        .mo-cap-cats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .mo-cap-cat { border: 1px solid var(--line); padding: 20px; background: var(--surface); }
        .mo-cap-cat h4 { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 12px; padding-bottom: 12px; border-bottom: 1px dashed var(--line); }
        .mo-cap-cat ul { list-style: none; padding: 0; margin: 0; font-size: 13px; }
        .mo-cap-cat li { padding: 4px 0; color: var(--fg-dim); }
        .mo-root.mo-dark .mo-cap-cat li { color: #c8c8c4; }
        .mo-cap-cat li::before { content: '· '; color: var(--fg-faint); }

        .mo-exp-list { border: 1px solid var(--fg); background: var(--surface); }
        .mo-exp-item { display: grid; grid-template-columns: 140px 1fr 1fr; gap: 24px; padding: 24px; border-bottom: 1px dashed var(--line); }
        .mo-exp-item:last-child { border-bottom: none; }
        .mo-exp-year { font-size: 12px; color: var(--fg-dim); }
        .mo-exp-role { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 500; letter-spacing: -0.02em; margin-bottom: 4px; }
        .mo-exp-org { font-size: 12px; color: var(--fg-dim); }
        .mo-exp-note { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--fg-dim); line-height: 1.5; letter-spacing: -0.01em; }
        .mo-root.mo-dark .mo-exp-note { color: #c8c8c4; }

        .mo-oss-list { border: 1px solid var(--fg); background: var(--surface); }
        .mo-oss-item { display: grid; grid-template-columns: 140px 1fr 40px; gap: 24px; padding: 24px; border-bottom: 1px dashed var(--line); transition: background 0.15s, color 0.15s; cursor: pointer; align-items: start; }
        .mo-oss-item:last-child { border-bottom: none; }
        .mo-oss-item:hover { background: var(--ink); color: var(--ink-fg); }
        .mo-oss-proj { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 500; letter-spacing: -0.02em; margin-bottom: 4px; }
        .mo-oss-stars { font-size: 12px; color: var(--fg-dim); }
        .mo-oss-item:hover .mo-oss-stars { color: var(--ink-fg); opacity: 0.7; }
        .mo-oss-title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; letter-spacing: -0.01em; margin-bottom: 4px; }
        .mo-oss-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--fg-dim); line-height: 1.5; letter-spacing: -0.01em; }
        .mo-root.mo-dark .mo-oss-desc { color: #c8c8c4; }
        .mo-oss-item:hover .mo-oss-desc { color: var(--ink-fg); opacity: 0.85; }
        .mo-oss-arrow { text-align: right; opacity: 0.4; align-self: center; }
        .mo-oss-item:hover .mo-oss-arrow { opacity: 1; }

        .mo-contact { padding-top: ${pad + 24}px; padding-bottom: ${pad + 24}px; }
        .mo-contact h2 { font-family: 'Inter', sans-serif; font-size: clamp(40px, 6vw, 72px); font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin: 0 0 40px; max-width: 14ch; }
        .mo-contact-box { border: 1px solid var(--fg); background: var(--ink); color: var(--ink-fg); padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .mo-contact-box .row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed color-mix(in srgb, var(--ink-fg) 30%, transparent); font-size: 13px; }
        .mo-contact-box .row:last-child { border-bottom: none; }
        .mo-contact-box a:hover { text-decoration: underline; text-underline-offset: 3px; }

        .mo-foot { border-top: 1px dashed var(--line); padding-top: 24px; padding-bottom: 24px; font-size: 11px; color: var(--fg-faint); display: flex; justify-content: space-between; letter-spacing: 0.05em; text-transform: uppercase; }

        /* ============ Responsive ============ */
        /* Tablet / small laptop */
        @media (max-width: 1024px) {
          .mo-wrap { padding: 0 24px; }
          .mo-nav-inner { padding: 14px 24px; }
          .mo-nav-links { gap: 18px; }
          .mo-hero { padding-top: ${Math.max(pad - 16, 32)}px; padding-bottom: ${Math.max(pad + 8, 40)}px; }
          .mo-section { padding-top: ${Math.max(pad - 16, 32)}px; padding-bottom: ${Math.max(pad - 16, 32)}px; }
          .mo-contact { padding-top: ${Math.max(pad + 8, 40)}px; padding-bottom: ${Math.max(pad + 8, 40)}px; }
          .mo-hero-name { font-size: 34px; }
          .mo-hero-intro { font-size: 19px; }
          .mo-proj { grid-template-columns: 44px 60px 1fr 200px 28px; padding: 18px 20px; }
          .mo-cap-cats { grid-template-columns: repeat(2, 1fr); }
          .mo-exp-item { grid-template-columns: 120px 1fr 1fr; padding: 20px; }
          .mo-oss-item { grid-template-columns: 120px 1fr 28px; padding: 20px; }
          .mo-contact h2 { font-size: clamp(36px, 6vw, 60px); }
        }

        /* Tablet portrait */
        @media (max-width: 900px) {
          .mo-nav-links { display: none; }
          .mo-nav-spacer { display: none; }
          .mo-nav-inner { justify-content: space-between; padding-right: 60px; }
          .mo-hero-card { grid-template-columns: 56px 1fr; padding: 24px; }
          .mo-hero-side {
            grid-column: 1 / -1;
            text-align: left;
            border-top: 1px dashed var(--line);
            padding-top: 16px;
            display: flex; gap: 20px; flex-wrap: wrap;
          }
          .mo-hero-side .row { margin: 0; }
          .mo-kv { grid-template-columns: 1fr 1fr; }
          .mo-kv > div:nth-child(2) { border-right: none; }
          .mo-kv > div:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
          .mo-about { grid-template-columns: 1fr; gap: 24px; }
          .mo-proj { grid-template-columns: 36px 1fr auto 24px; gap: 12px; padding: 16px 18px; }
          .mo-proj-year { display: none; }
          .mo-proj-stack { justify-content: flex-start; margin-top: 8px; grid-column: 2 / 4; }
          .mo-proj-title { font-size: 17px; grid-column: 2 / 4; }
          .mo-cap-cats { grid-template-columns: 1fr 1fr; gap: 16px; }
          .mo-exp-item { grid-template-columns: 1fr; gap: 10px; padding: 18px; }
          .mo-oss-item { grid-template-columns: 1fr 28px; gap: 12px; padding: 18px; }
          .mo-oss-item > div:not(.mo-oss-arrow) { display: contents; }
          .mo-oss-proj { grid-column: 1 / -1; margin-bottom: 2px; }
          .mo-oss-title { grid-column: 1 / -1; }
          .mo-oss-desc { grid-column: 1 / -1; margin-top: 4px; }
          .mo-contact-box { grid-template-columns: 1fr; padding: 24px; }
        }

        /* Phone */
        @media (max-width: 640px) {
          .mo-root { font-size: 16px; line-height: 1.55; }
          .mo-wrap { padding: 0 18px; }
          .mo-nav { border-bottom-style: solid; border-bottom-color: var(--line-soft); }
          .mo-nav-inner { padding: 12px 18px; padding-right: 58px; font-size: 12px; min-height: 56px; }
          .mo-hero { padding-top: 18px; padding-bottom: 28px; }
          .mo-hero-card { padding: 18px; grid-template-columns: 48px 1fr; gap: 14px; }
          .mo-avatar { width: 48px; height: 48px; font-size: 14px; }
          .mo-hero-name { font-size: 28px; margin-bottom: 6px; line-height: 1.05; }
          .mo-hero-tag { font-size: 12px; margin-bottom: 14px; line-height: 1.45; }
          .mo-hero-intro {
            font-size: 17px;
            line-height: 1.38;
            letter-spacing: 0;
            max-width: 100%;
          }
          .mo-hero-intro .mo-hl { padding: 1px 4px; }
          .mo-hero-side {
            padding-top: 12px;
            gap: 8px 14px;
            font-size: 12px;
            line-height: 1.35;
          }
          .mo-hero-side .dot { width: 5px; height: 5px; margin-right: 5px; }
          .mo-kv { grid-template-columns: 1fr; }
          .mo-kv > div {
            border-right: none !important;
            border-bottom: 1px solid var(--line);
            padding: 12px 14px;
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 16px;
          }
          .mo-kv > div:last-child { border-bottom: none; }
          .mo-kv .k { font-size: 10px; margin-bottom: 0; }
          .mo-kv .v { font-size: 16px; text-align: right; }
          .mo-section { padding-top: 34px; padding-bottom: 34px; }
          .mo-section-head {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: end;
            gap: 8px 14px;
            margin-bottom: 18px;
          }
          .mo-section-head h2 {
            font-size: 25px;
            line-height: 1.08;
            grid-column: 1 / -1;
            grid-row: 2;
            margin-top: 0;
          }
          .mo-section-head .mo-label { padding-top: 0; font-size: 10px; line-height: 1.3; white-space: nowrap; }
          .mo-about { gap: 4px; }
          .mo-about p { font-size: 16px; line-height: 1.62; margin: 0 0 16px; letter-spacing: 0; overflow-wrap: anywhere; }
          .mo-about .lede { font-size: 18px; line-height: 1.45; }
          .mo-proj-list { border-left: 1px solid var(--fg); border-right: 1px solid var(--fg); }
          .mo-proj { grid-template-columns: 28px 1fr 22px; gap: 12px; padding: 16px 14px; align-items: start; }
          .mo-proj-n { padding-top: 3px; font-size: 12px; }
          .mo-proj-title { font-size: 17px; line-height: 1.25; grid-column: auto; }
          .mo-proj-title small { font-size: 12px; line-height: 1.5; margin-top: 5px; overflow-wrap: anywhere; }
          .mo-proj-stack {
            display: flex;
            grid-column: 2 / -1;
            justify-content: flex-start;
            margin-top: 0;
          }
          .mo-proj-stack span { font-size: 10px; padding: 2px 6px; }
          .mo-proj-arrow { padding-top: 3px; }
          .mo-cap-cats { grid-template-columns: 1fr; gap: 10px; }
          .mo-cap-cat { padding: 16px; }
          .mo-cap-cat h4 { font-size: 16px; margin-bottom: 10px; padding-bottom: 10px; }
          .mo-cap-cat ul { font-size: 15px; }
          .mo-cap-cat li { padding: 3px 0; }
          .mo-exp-list { border-left: 1px solid var(--fg); border-right: 1px solid var(--fg); }
          .mo-exp-item { padding: 16px; gap: 6px; }
          .mo-exp-year { font-size: 12px; }
          .mo-exp-role { font-size: 17px; margin-bottom: 2px; line-height: 1.25; }
          .mo-exp-org { font-size: 12px; }
          .mo-exp-note { font-size: 15px; line-height: 1.55; margin-top: 6px; }
          .mo-oss-list { border-left: 1px solid var(--fg); border-right: 1px solid var(--fg); }
          .mo-oss-item { grid-template-columns: 1fr 22px; gap: 12px; padding: 16px 14px; }
          .mo-oss-proj { font-size: 16px; margin-bottom: 2px; }
          .mo-oss-stars { font-size: 11px; }
          .mo-oss-title { font-size: 15px; margin-bottom: 2px; }
          .mo-oss-desc { font-size: 14px; line-height: 1.55; margin-top: 4px; }
          .mo-oss-arrow { grid-column: 1 / -1; text-align: left; padding-top: 4px; }
          .mo-contact { padding-top: 36px; padding-bottom: 36px; }
          .mo-contact h2 { font-size: 34px; margin-bottom: 20px; max-width: 11ch; line-height: 1.05; }
          .mo-contact-box { padding: 18px; gap: 6px; }
          .mo-contact-box .row {
            padding: 10px 0;
            font-size: 14px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 4px;
          }
          .mo-contact-box .row a {
            text-align: left;
            word-break: break-word;
            max-width: 100%;
          }
          .mo-foot { flex-direction: column; gap: 6px; font-size: 11px; padding: 22px 18px; }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .mo-wrap { padding: 0 14px; }
          .mo-nav-inner { padding: 10px 14px; padding-right: 54px; }
          .mo-hero-card { padding: 14px; grid-template-columns: 44px 1fr; gap: 12px; }
          .mo-avatar { width: 44px; height: 44px; font-size: 13px; }
          .mo-hero-name { font-size: 25px; }
          .mo-hero-intro { font-size: 16px; }
          .mo-hero-side {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .mo-section-head h2 { font-size: 23px; }
          .mo-contact h2 { font-size: 30px; }
        }
      `}</style>

      <nav className="mo-nav">
        <div className="mo-nav-inner">
          <div>~/jayesh</div>
          <div className="mo-nav-links">
            <a href="#work">./work</a>
            <a href="#about">./about</a>
            <a href="#experience">./experience</a>
            <a href="#opensource">./opensource</a>
            <a href="#contact">./contact</a>
          </div>
          <div className="mo-nav-spacer" aria-hidden="true"></div>
        </div>
      </nav>

      <section className="mo-wrap mo-hero">
        <div className="mo-hero-card">
          <div className="mo-avatar">JP</div>
          <div className="mo-hero-body">
            <h1 className="mo-hero-name">Jayesh Patel</h1>
            <div className="mo-hero-tag">full-stack engineer · toronto, canada</div>
            <p className="mo-hero-intro">I design and build <span className="mo-hl">calm digital experiences</span> — reliable interfaces, performant services, thoughtful DX.</p>
          </div>
          <div className="mo-hero-side">
            <div className="row"><span className="dot"></span>open to work</div>
            <div className="row mo-dim">canada / remote</div>
            <div className="row mo-dim">v.2026.04</div>
          </div>
        </div>
        <div className="mo-kv">
          {d.stats.map((s, i) => (
            <div key={i}>
              <div className="k">{s.label}</div>
              <div className="v mo-sans">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mo-wrap mo-section" id="about">
        <div className="mo-section-head">
          <span className="mo-label">// 01 · about</span>
          <h2>A brief introduction.</h2>
          <span className="mo-label">read_time: 1m</span>
        </div>
        <div className="mo-about">
          <div>
            <p className="lede">Four years translating ideas into reliable interfaces and performant services.</p>
            <p>{d.about[0]}</p>
          </div>
          <div>
            <p>{d.about[1]}</p>
            <p>{d.about[2]}</p>
          </div>
        </div>
      </section>

      <section className="mo-wrap mo-section" id="work">
        <div className="mo-section-head">
          <span className="mo-label">// 02 · work</span>
          <h2>Selected projects.</h2>
          <span className="mo-label">count: {String(d.projects.length).padStart(2, '0')}</span>
        </div>
        <div className="mo-proj-list">
          {d.projects.map((p) => (
            <a href={p.href} target="_blank" rel="noopener" className="mo-proj" key={p.n}>
              <div className="mo-proj-n">{p.n}</div>
              <div className="mo-proj-year">{p.year}</div>
              <div className="mo-proj-title">
                {p.title}
                <small>{p.blurb}</small>
              </div>
              <div className="mo-proj-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <div className="mo-proj-arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      <section className="mo-wrap mo-section" id="capabilities">
        <div className="mo-section-head">
          <span className="mo-label">// 03 · capabilities</span>
          <h2>Tools & disciplines.</h2>
          <span className="mo-label">stack</span>
        </div>
        <div className="mo-cap-cats">
          {Object.entries(d.capabilities).map(([cat, items]) => (
            <div className="mo-cap-cat" key={cat}>
              <h4>{cat}</h4>
              <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mo-wrap mo-section" id="experience">
        <div className="mo-section-head">
          <span className="mo-label">// 04 · experience</span>
          <h2>Work history.</h2>
          <span className="mo-label">years: 04+</span>
        </div>
        <div className="mo-exp-list">
          {d.experience.map((e, i) => (
            <div className="mo-exp-item" key={i}>
              <div className="mo-exp-year">{e.years}</div>
              <div>
                <div className="mo-exp-role">{e.role}</div>
                <div className="mo-exp-org">{e.org} · {e.place}</div>
              </div>
              <div className="mo-exp-note">{e.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mo-wrap mo-section" id="opensource">
        <div className="mo-section-head">
          <span className="mo-label">// 05 · open source</span>
          <h2>Community contributions.</h2>
          <span className="mo-label">merged: {String(d.opensource.length).padStart(2, '0')}</span>
        </div>
        <div className="mo-oss-list">
          {d.opensource.map((o, i) => (
            <a href={o.href} target="_blank" rel="noopener" className="mo-oss-item" key={i}>
              <div>
                <div className="mo-oss-proj">{o.project}</div>
                <div className="mo-oss-stars">★ {o.stars}</div>
              </div>
              <div>
                <div className="mo-oss-title">{o.title}</div>
                <div className="mo-oss-desc">{o.description}</div>
              </div>
              <div className="mo-oss-arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      <section className="mo-wrap mo-contact" id="contact">
        <h2 className="mo-sans">Let's build something together.</h2>
        <div className="mo-contact-box">
          <div>
            <div className="row"><span>email</span><a href={`mailto:${d.email}`}>{d.email} →</a></div>
            <div className="row"><span>github</span><a href="https://github.com/itsmejay80" target="_blank" rel="noopener">@itsmejay80 →</a></div>
          </div>
          <div>
            <div className="row"><span>linkedin</span><a href={d.linkedin} target="_blank" rel="noopener">/in/jbp7 →</a></div>
            <div className="row"><span>cv</span><a href={d.cv} target="_blank" rel="noopener">view.pdf ↗</a></div>
          </div>
        </div>
      </section>

      <footer className="mo-wrap mo-foot">
        <div>© 2026 · Jayesh Patel</div>
        <div>crafted with care</div>
      </footer>
    </div>
  );
}

window.VariantMono = VariantMono;
