import { ArrowRight, BrainCircuit, ChartNoAxesCombined, Crosshair, Menu, MoveUpRight, Play, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";

const pillars = [
  { icon: BrainCircuit, number: "01", title: "Understand your game", text: "Turn the moments in your match into clear insights about how you see, decide and play." },
  { icon: Target, number: "02", title: "Train with purpose", text: "Get focused training recommendations built around the parts of your midfield game you want to improve." },
  { icon: ChartNoAxesCombined, number: "03", title: "Track your growth", text: "Build better habits, revisit your progress and see where your next level can come from." },
];

const skills = ["Scanning & awareness", "First touch", "Passing decisions", "Positioning", "Composure under pressure"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#" aria-label="PitchIQ home"><span className="brand-mark">P<span>Q</span></span><span>pitch<span className="brand-iq">iq</span></span></a>
        <div className="nav-links"><a href="#how-it-works">How it works</a><a href="#midfielder">For midfielders</a><a href="#approach">Our approach</a></div>
        <a className="nav-cta" href="#get-started">Get early access <ArrowRight size={15}/></a>
        <button className="mobile-menu" aria-label="Menu"><Menu size={22}/></button>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> THE NEXT GENERATION OF PLAYER DEVELOPMENT</div>
          <h1>Think faster.<br/><em>Play smarter.</em></h1>
          <p className="hero-sub">Your game has another level. PitchIQ helps midfielders understand their performance, sharpen their decisions and train with a plan.</p>
          <div className="hero-actions"><a className="button button-primary" href="#get-started">Start your development <ArrowRight size={17}/></a><a className="text-link" href="#how-it-works"><span className="play-icon"><Play size={13} fill="currentColor"/></span> See how it works</a></div>
          <div className="hero-proof"><div className="avatar-stack"><i>8</i><i>10</i><i>6</i></div><span>Built around the details<br/><b>that change a game.</b></span></div>
        </div>

        <div className="hero-visual" aria-label="Abstract football pitch visualization">
          <div className="visual-top"><span><span className="live-dot"/> PITCHIQ / PLAYER DEVELOPMENT</span><span>01 — 05</span></div>
          <div className="pitch-wrap">
            <div className="pitch">
              <div className="halfway"/><div className="center-circle"/><div className="box left-box"/><div className="box right-box"/><div className="goal left-goal"/><div className="goal right-goal"/>
              <div className="route route-one"/><div className="route route-two"/>
              <span className="player p1">6</span><span className="player p2">8</span><span className="player p3">10</span><span className="player p4">7</span><span className="ball">●</span>
              <span className="scan-tag">SCAN <b>✓</b></span><span className="decision-tag">NEXT ACTION <b>PLAY FORWARD</b></span>
            </div>
          </div>
          <div className="visual-bottom"><div><span className="metric-label">THE MIDFIELDER MINDSET</span><b>See it. Read it. Own it.</b></div><div className="visual-index">P<span>Q</span> <small>FIELD NOTES / 001</small></div></div>
          <div className="glow"/>
        </div>
        <div className="hero-orbit">IQ <span>+</span> GAME</div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>SCAN EARLY</span><b>✳</b><span>DECIDE WITH PURPOSE</span><b>✳</b><span>PLAY FORWARD</span><b>✳</b><span>OWN THE MIDFIELD</span><b>✳</b><span>SCAN EARLY</span><b>✳</b><span>DECIDE WITH PURPOSE</span><b>✳</b><span>PLAY FORWARD</span></div></section>

      <section className="section shell" id="midfielder">
        <div className="section-heading"><div><div className="eyebrow">01 / THE PITCHIQ EDGE</div><h2>Great midfielders<br/>make the <em>game look simple.</em></h2></div><p className="section-intro">The best players do more than work hard. They scan, anticipate and make the right choice before the pressure arrives. That's what we're here to help you develop.</p></div>
        <div className="pillar-grid">{pillars.map((item) => <article className="pillar" key={item.number}><div className="pillar-top"><item.icon size={22}/><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="pillar-line"/></article>)}</div>
      </section>

      <section className="midfield-band" id="approach"><div className="shell midfield-inner"><div><div className="eyebrow">BUILT FOR THE ENGINE ROOM</div><h2>Own the space<br/>between the lines.</h2><p>PitchIQ starts with one position: the midfielder. Every insight and recommendation is designed around the decisions that define the role.</p><a className="button button-outline" href="#get-started">Explore midfielder development <ArrowRight size={16}/></a></div><div className="skill-panel"><div className="skill-panel-head"><span>THE MIDFIELDER TOOLKIT</span><Sparkles size={17}/></div>{skills.map((skill, i) => <div className="skill-row" key={skill}><span className="skill-num">0{i+1}</span><span>{skill}</span><MoveUpRight size={15}/></div>)}<div className="skill-foot"><span>5 CORE DEVELOPMENT AREAS</span><span>MORE TO COME ↗</span></div></div></div></section>

      <section className="section shell" id="how-it-works"><div className="center-heading"><div className="eyebrow">02 / YOUR DEVELOPMENT, REIMAGINED</div><h2>From match day to<br/><em>your next breakthrough.</em></h2><p>A simple loop that turns reflection into progress.</p></div><div className="steps"><div className="step"><span>01</span><div className="step-icon"><Crosshair/></div><h3>Share your game</h3><p>Tell us about your role, goals and the moments you want to improve.</p></div><div className="step-connector">················→</div><div className="step"><span>02</span><div className="step-icon"><BrainCircuit/></div><h3>Get your insights</h3><p>Receive focused feedback that helps you understand the why behind your decisions.</p></div><div className="step-connector">················→</div><div className="step"><span>03</span><div className="step-icon"><Zap/></div><h3>Train your next level</h3><p>Take your personalized next steps onto the training pitch and into your next match.</p></div></div></section>

      <section className="cta-section shell" id="get-started"><div className="cta-card"><div className="cta-glow"/><div className="eyebrow"><span className="pulse"/> THE FIRST WHISTLE IS YOURS</div><h2>Your next level<br/>starts <em>with a decision.</em></h2><p>Be part of the first group of players shaping PitchIQ.</p><a className="button button-primary" href="mailto:hello@pitchiq.com?subject=PitchIQ%20Early%20Access">Get early access <ArrowRight size={17}/></a><span className="cta-note"><ShieldCheck size={14}/> Early access interest · No commitment</span></div></section>

      <footer className="footer shell"><a className="brand" href="#"><span className="brand-mark">P<span>Q</span></span><span>pitch<span className="brand-iq">iq</span></span></a><span>DEVELOP YOUR GAME. OWN YOUR NEXT LEVEL.</span><span>© 2026 PITCHIQ</span></footer>
    </main>
  );
}
