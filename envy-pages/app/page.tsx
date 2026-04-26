export default function Home() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui, sans-serif", color: "#1a1a1a", textAlign: "center" }}>
      <div style={{ width: 64, height: 64, background: "#1A1A2E", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28, fontWeight: 800, color: "#F5A623" }}>
        HB
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, letterSpacing: -1 }}>Envy</h1>
      <p style={{ fontSize: 18, color: "#555", marginBottom: 8 }}>Honey Badger AI · Livestream Sales Assistant</p>
      <p style={{ fontSize: 15, color: "#888", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.6 }}>
        AI-powered assistant for TikTok Live sellers. Automates comment replies, sends DMs to buyers, and analyzes your live performance.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/terms" style={{ padding: "10px 20px", border: "1px solid #ddd", borderRadius: 8, textDecoration: "none", color: "#555", fontSize: 14 }}>Terms of Service</a>
        <a href="/privacy" style={{ padding: "10px 20px", border: "1px solid #ddd", borderRadius: 8, textDecoration: "none", color: "#555", fontSize: 14 }}>Privacy Policy</a>
      </div>
      <p style={{ marginTop: 48, fontSize: 12, color: "#bbb" }}>© 2025 Envy AI. Powered by Claude (Anthropic) · TikTok for Developers</p>
    </main>
  );
}
