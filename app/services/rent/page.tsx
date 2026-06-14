import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function RentPage() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Link href="/" className="buy-back-btn" style={{ justifySelf: "center" }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <Clock size={56} strokeWidth={1.2} className="placeholder-icon" />
        <p className="eyebrow dark" style={{ margin: 0 }}>
          Our Services
        </p>
        <h1>Rent</h1>
        <p>
          Our curated rental listings across Gurugram and Noida are coming
          soon. Our team is carefully handpicking premium rental properties for
          you.
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
          Get Notified
        </Link>
      </div>
    </div>
  );
}
