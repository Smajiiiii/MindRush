"use client";

export default function MindQuizPage() {
  return (
    <iframe
      src="/games/mindquiz.html"
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