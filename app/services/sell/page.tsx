import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function SellPage() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Link href="/" className="buy-back-btn" style={{ justifySelf: "center" }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <TrendingUp size={56} strokeWidth={1.2} className="placeholder-icon" />
        <p className="eyebrow dark" style={{ margin: 0 }}>
          Our Services
        </p>
        <h1>Sell</h1>
        <p>
          Ready to sell your property? Our expert team will connect you with
          the right buyers and ensure you get the best value for your asset.
          This page is coming soon.
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
          Talk to Us
        </Link>
      </div>
    </div>
  );
}
