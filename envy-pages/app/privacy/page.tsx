export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontFamily: "system-ui, sans-serif", color: "#1a1a1a", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 40 }}>Last updated: January 2025 · Envy AI</p>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>1. Information We Collect</h2>
        <p>When you use Envy, we collect the following types of information:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li><strong>TikTok account data:</strong> Your TikTok username, display name, and account ID — used to identify your account and connect to TikTok APIs.</li>
          <li><strong>Live session data:</strong> Comments, viewer counts, and engagement metrics from your TikTok Live sessions.</li>
          <li><strong>Message data:</strong> Content of automated replies and direct messages sent through Envy on your behalf.</li>
          <li><strong>Usage data:</strong> How you interact with the Envy dashboard (mode selections, script history, etc.).</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Provide AI-generated responses to TikTok Live comments</li>
          <li>Automate direct messages to potential buyers on your behalf</li>
          <li>Generate post-live analytics reports</li>
          <li>Improve the accuracy and quality of Envy's AI responses</li>
          <li>Ensure compliance with TikTok's platform policies</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>3. TikTok Data</h2>
        <p>Envy accesses TikTok data strictly through TikTok's official API. We access:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li><code style={{ background: "#f4f4f4", padding: "1px 6px", borderRadius: 4 }}>live.comments.read</code> — to read live comments during your broadcast</li>
          <li><code style={{ background: "#f4f4f4", padding: "1px 6px", borderRadius: 4 }}>dm.messages.send</code> — to send direct messages to interested buyers</li>
        </ul>
        <p style={{ marginTop: 12 }}>We do not store raw TikTok user data beyond what is necessary to operate the Service. You can revoke access at any time via TikTok Settings → Security → Apps and websites.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>4. AI Processing</h2>
        <p>Envy uses Anthropic's Claude AI to generate responses. Comment text and context may be processed by Anthropic's API to generate replies. Anthropic's data handling is governed by their <a href="https://www.anthropic.com/privacy" style={{ color: "#0070f3" }}>Privacy Policy</a>. We do not share personally identifiable information with Anthropic beyond what is required for response generation.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>5. Data Sharing</h2>
        <p>We do not sell, trade, or rent your data to third parties. We may share data only with:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li><strong>TikTok:</strong> As required to operate the integration</li>
          <li><strong>Anthropic:</strong> For AI response generation (anonymized where possible)</li>
          <li><strong>Vercel:</strong> Our hosting provider, for app operation</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>6. Data Retention</h2>
        <p>Live session data and analytics are retained for up to 90 days to provide historical reporting. Message logs are retained for 30 days. You may request deletion of your data at any time by contacting us.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Access the data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent and revoke TikTok API access at any time</li>
          <li>Export your data in a portable format</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>8. Security</h2>
        <p>We use industry-standard security practices including encrypted connections (HTTPS), secure environment variable storage for API keys, and access controls. API credentials are never stored in code or exposed publicly.</p>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>9. Contact</h2>
        <p>For privacy-related requests or questions, contact: <a href="mailto:privacy@envy-ai.vercel.app" style={{ color: "#0070f3" }}>privacy@envy-ai.vercel.app</a></p>
      </section>
    </main>
  );
}
