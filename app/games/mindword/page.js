"use client";

export default function MindWordPage() {
  return (
    <iframe
      src="/games/mindword.html"
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