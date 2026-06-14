import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

export default function AgentPage() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Link href="/" className="buy-back-btn" style={{ justifySelf: "center" }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <Users size={56} strokeWidth={1.2} className="placeholder-icon" />
        <p className="eyebrow dark" style={{ margin: 0 }}>
          Our Services
        </p>
        <h1>Agent</h1>
        <p>
          Partner with our network of verified real estate agents across
          Gurugram and Noida. Our agent portal is launching soon.
        </p>
        <Link
          href="/#contact"
          className="button primary"
          style={{
            marginTop: "8px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 32px",
            minHeight: "52px",
            borderRadius: "8px",
            fontWeight: 800,
          }}
        >
          Join as Agent
        </Link>
      </div>
    </div>
  );
}
