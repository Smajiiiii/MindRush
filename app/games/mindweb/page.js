"use client";

export default function MindWebPage() {
  return (
    <iframe
      src="/games/mindweb.html"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  );
}