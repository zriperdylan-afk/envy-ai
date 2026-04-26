export default function TermsOfService() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontFamily: "system-ui, sans-serif", color: "#1a1a1a", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Terms of Service</h1>
      <p style={{ color: "#666", fontSize: 14, marginBottom: 40 }}>Last updated: January 2025 · Envy AI</p>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>1. Acceptance of Terms</h2>
        <p>By accessing or using Envy ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service. Envy is an AI-powered livestream assistant designed for TikTok sellers.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>2. Description of Service</h2>
        <p>Envy provides the following features:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Real-time comment reading and AI-generated responses during TikTok Live sessions</li>
          <li>Automated direct messaging to TikTok users who express purchase intent</li>
          <li>Sales and engagement analytics after each live session</li>
          <li>AI-generated livestream scripts and marketing content</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>3. TikTok Integration</h2>
        <p>Envy integrates with TikTok via the TikTok for Developers platform. By using Envy, you authorize the application to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Read live comments from your TikTok Live sessions</li>
          <li>Send automated replies to comments on your behalf</li>
          <li>Send direct messages to users who interact with your live stream</li>
          <li>Access basic analytics data from your TikTok account</li>
        </ul>
        <p style={{ marginTop: 12 }}>You may revoke these permissions at any time through your TikTok account settings.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>4. User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>All content generated through or sent by Envy on your behalf</li>
          <li>Complying with TikTok's Community Guidelines and Terms of Service</li>
          <li>Ensuring that automated messages comply with applicable laws</li>
          <li>Not using the Service for spam, harassment, or deceptive practices</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>5. Prohibited Uses</h2>
        <p>You may not use Envy to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Send unsolicited bulk messages or spam</li>
          <li>Impersonate individuals or entities</li>
          <li>Violate any applicable local, national, or international law</li>
          <li>Engage in any form of misleading advertising or fraud</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>6. Limitation of Liability</h2>
        <p>Envy is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service, including any issues arising from TikTok API availability or changes.</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the updated terms.</p>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>8. Contact</h2>
        <p>For questions about these Terms, contact us at: <a href="mailto:support@envy-ai.vercel.app" style={{ color: "#0070f3" }}>support@envy-ai.vercel.app</a></p>
      </section>
    </main>
  );
}
