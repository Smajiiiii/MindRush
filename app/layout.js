import "./globals.css";

export const metadata = {
  title: "MindRush — 6 Games · Infinite Challenge",
  description: "Web game inspired by the Serbian TV quiz show Slagalica, adapted for English speakers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}