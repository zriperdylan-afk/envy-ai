export const metadata = {
  title: "Envy AI - TikTok Livestream Assistant",
  description: "AI-powered assistant for TikTok Live sellers. Automates comment replies, sends DMs, and analyzes live performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff" }}>{children}</body>
    </html>
  );
}
