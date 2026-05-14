"use client";

export default function MindNumberPage() {
  return (
    <iframe
      src="/games/mindnumber.html"
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