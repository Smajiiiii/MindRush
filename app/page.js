"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".game-card");
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity .4s ease, transform .4s ease";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 + i * 80);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 16px 48px", minHeight: "100vh" }}>

      {/* LOGO */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "inline-grid", gridTemplateColumns: "repeat(3, 36px)", gap: "5px", verticalAlign: "middle", marginRight: "14px" }}>
            <LogoIcon bg="#185FA5" title="Mind Word">A</LogoIcon>
            <LogoIcon bg="#C9920A" title="Mind Number">7</LogoIcon>
            <LogoIcon bg="#3B6D11" title="MindCode">
              <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="5" cy="5" r="3.5" fill="#fff"/><circle cx="13" cy="5" r="3.5" fill="#fff" opacity=".5"/><circle cx="5" cy="13" r="3.5" fill="#fff" opacity=".5"/><circle cx="13" cy="13" r="3.5" fill="#fff"/></svg>
            </LogoIcon>
            <LogoIcon bg="#534AB7" title="MindLink">
              <svg width="18" height="10" viewBox="0 0 18 10"><line x1="1" y1="5" x2="17" y2="5" stroke="#fff" strokeWidth="2" strokeDasharray="3,3"/></svg>
            </LogoIcon>
            <LogoIcon bg="#A32D2D" title="MindQuiz">?</LogoIcon>
            <LogoIcon bg="#C84B10" title="MindWeb">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <rect x="1" y="1" width="7" height="7" rx="1.5" fill="#fff" opacity=".7"/>
                <rect x="10" y="1" width="7" height="7" rx="1.5" fill="#fff" opacity=".3"/>
                <rect x="1" y="10" width="7" height="7" rx="1.5" fill="#fff" opacity=".3"/>
                <rect x="10" y="10" width="7" height="7" rx="1.5" fill="#fff" opacity=".7"/>
              </svg>
            </LogoIcon>
          </div>
          <div style={{ display: "inline-block", verticalAlign: "middle", textAlign: "left" }}>
            <h1 style={{ fontSize: "42px", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1 }}>
              <span style={{ color: "#ccc" }}>Mind</span>
              <span style={{ color: "#fff" }}>Rush</span>
            </h1>
            <div style={{ fontSize: "13px", letterSpacing: "4px", color: "#888", marginTop: "6px", textTransform: "uppercase", fontWeight: 600 }}>
              6 Games · Infinite Challenge
            </div>
          </div>
        </div>
      </div>

      {/* GAME GRID */}
      <div className="game-grid">
        {/* Mind Word */}
        <GameCard href="/games/mindword" gradient="linear-gradient(145deg,#1e6fbb,#14508a)" label="Word Game" name={["Mind ", "Word"]}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center" }}>
            {["W","O","R"].map(l => <LetterBox key={l}>{l}</LetterBox>)}
            {["D","?"].map(l => <LetterBox key={l} dim>{l}</LetterBox>)}
          </div>
        </GameCard>

        {/* Mind Number */}
        <GameCard href="/games/mindnumber" gradient="linear-gradient(145deg,#d4a010,#a07808)" label="Number Game" name={["Mind ", "Number"]}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div style={{ fontSize: "40px", fontWeight: 900, color: "#fff", lineHeight: 1 }}>138</div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>TARGET</div>
            <div style={{ display: "flex", gap: "6px" }}>
              {[25,6,7,50].map(n => <NumPill key={n}>{n}</NumPill>)}
            </div>
          </div>
        </GameCard>

        {/* MindCode */}
        <GameCard href="/games/mindcode" gradient="linear-gradient(145deg,#4a8518,#2e5a0c)" label="Code Game" name={["Mind", "Code"]}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <CodeRow dots={[1,1,0,1]} pips={[0,1]} />
            <CodeRow dots={[1,0,1,1]} pips={[1,0]} />
            <CodeRow dots={[0,1,0,0]} pips={[0,0]} />
          </div>
        </GameCard>

        {/* MindLink */}
        <GameCard href="/games/mindlink" gradient="linear-gradient(145deg,#6358cc,#4038a0)" label="Word Links" name={["Mind", "Link"]}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <LinkPair left="ACTOR" right="FILM" />
            <LinkPair left="AUTHOR" right="BOOK" />
          </div>
        </GameCard>

        {/* MindQuiz */}
        <GameCard href="/games/mindquiz" gradient="linear-gradient(145deg,#c03838,#8a2222)" label="Trivia Game" name={["Mind", "Quiz"]}>
          <div style={{ fontSize: "72px", fontWeight: 900, color: "rgba(255,255,255,.85)", lineHeight: 1 }}>?</div>
        </GameCard>

        {/* MindWeb */}
        <GameCard href="/games/mindweb" gradient="linear-gradient(145deg,#d8621c,#9a3e0c)" label="Associations" name={["Mind", "Web"]}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "4px" }}>
            {[1,0,1,0, 0,1,0,1, 1,0,1,0, 0,1,0,1].map((on, i) => (
              <div key={i} style={{ width: "16px", height: "16px", borderRadius: "3px", background: on ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.12)" }} />
            ))}
          </div>
        </GameCard>
      </div>

      <div style={{ marginTop: "48px", textAlign: "center", fontSize: "12px", color: "#555", letterSpacing: "1px" }}>
        MindRush © 2026 · Built with 🧠
      </div>

      <style jsx global>{`
        .game-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 820px;
          width: 100%;
        }
        @media (max-width: 700px) {
          .game-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 400px) {
          .game-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
      `}</style>
    </div>
  );
}

/* ===== Sub-components ===== */

function LogoIcon({ bg, title, children }) {
  return (
    <div title={title} style={{
      width: "36px", height: "36px", borderRadius: "7px",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: "15px", color: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,.35)", background: bg
    }}>{children}</div>
  );
}

function GameCard({ href, gradient, label, name, children }) {
  return (
    <Link href={href} className="game-card" style={{
      borderRadius: "14px", padding: "28px 20px 22px", textAlign: "center",
      cursor: "pointer", position: "relative", overflow: "hidden",
      textDecoration: "none", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", minHeight: "200px",
      background: gradient, transition: "transform .2s, box-shadow .2s"
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,.5)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(255,255,255,.08) 0%,transparent 60%)", pointerEvents: "none" }} />
      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,.75)", marginBottom: "14px" }}>{label}</div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", minHeight: "80px" }}>{children}</div>
      <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff", letterSpacing: ".5px" }}>
        <span style={{ opacity: .8 }}>{name[0]}</span><span style={{ opacity: 1 }}>{name[1]}</span>
      </div>
    </Link>
  );
}

function LetterBox({ children, dim }) {
  return (
    <div style={{
      width: "32px", height: "32px", borderRadius: "5px",
      background: "rgba(255,255,255,.18)", border: "1.5px solid rgba(255,255,255,.35)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: "16px", color: "#fff",
      opacity: dim ? .5 : 1
    }}>{children}</div>
  );
}

function NumPill({ children }) {
  return (
    <div style={{
      width: "30px", height: "26px", borderRadius: "13px",
      background: "rgba(255,255,255,.18)", border: "1px solid rgba(255,255,255,.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: "13px", color: "#fff"
    }}>{children}</div>
  );
}

function CodeRow({ dots, pips }) {
  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {dots.map((on, i) => <div key={i} style={{ width: "18px", height: "18px", borderRadius: "50%", background: on ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.15)" }} />)}
      {pips.map((on, i) => <div key={"p"+i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: on ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.15)" }} />)}
    </div>
  );
}

function LinkPair({ left, right }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ padding: "4px 10px", borderRadius: "5px", background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", fontSize: "11px", fontWeight: 700, color: "#fff" }}>{left}</div>
      <span style={{ color: "rgba(255,255,255,.4)", fontSize: "14px", letterSpacing: "-2px" }}>···→</span>
      <div style={{ padding: "4px 10px", borderRadius: "5px", background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", fontSize: "11px", fontWeight: 700, color: "#fff" }}>{right}</div>
    </div>
  );
}