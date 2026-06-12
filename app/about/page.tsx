import Link from "next/link";

const aboutHighlights = [
  "We connect buyers and investors with premium residential and commercial opportunities in Noida and Gurugram.",
  "Our team delivers seamless advisory, transparent negotiation support, and end-to-end handover services.",
  "Design-led property sourcing and community planning are at the heart of our luxury real estate offering.",
];

const coreValues = [
  "Luxury-first curation across every project.",
  "Transparent guidance from first inquiry to handover.",
  "Local market expertise for smarter investment decisions.",
  "Design-forward communities built for lasting comfort.",
];

const serviceList = [
  "Property sourcing and portfolio review",
  "Luxury residential and commercial advisory",
  "Investment insights for Noida and Gurugram markets",
  "Customer-first handover and delivery support",
];

export default function AboutPage() {
  return (
    <main className="section about-page" style={{ padding: "120px 24px 80px" }}>
      <div className="section-heading">
        <p className="eyebrow dark">About Us</p>
        <h1>About NEXT GEN REALTY DEVELOPERS</h1>
        <p className="section-intro">
          We are a boutique property advisory and development consultancy focused on premium residential, mixed-use and smart living destinations across the Delhi NCR region.
          Our approach blends market insight, location strategy, and design-led thinking so every project delivers exceptional lifestyle appeal and confident handover outcomes.
        </p>
      </div>

      <div className="about-grid">
        <section className="glass-card">
          <h2>Who We Are</h2>
          <p>
            NEXT GEN REALTY DEVELOPERS provides boutique advisory for premium residential and commercial clients in Noida and Gurugram.
            We combine research, planning, and execution support to help each project feel thoughtfully designed, valued, and future-ready.
          </p>
        </section>

        <section className="glass-card">
          <h2>How We Work</h2>
          <ul className="list-bullet">
            {serviceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <aside className="glass-card">
          <h3>Our Mission</h3>
          <p>
            To create curated real estate experiences that feel effortless to live in, invest in, and grow with over time.
          </p>
        </aside>

        <aside className="glass-card">
          <h3>Why Choose Us</h3>
          <p>
            We deliver service that is local, transparent and driven by premium design principles — from property sourcing through to delivery and handover.
          </p>
        </aside>

        <section className="glass-card highlight-group">
          <h3>Highlights</h3>
          <div className="about-highlights">
            {aboutHighlights.map((highlight) => (
              <div key={highlight} className="highlight-pill">
                <span>•</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card">
          <h3>Core Values</h3>
          <ul className="list-bullet">
            {coreValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="section-actions">
        <Link href="/" className="button secondary">
          Back to Home
        </Link>
        <Link href="/blog" className="button primary">
          Read Our Insights
        </Link>
      </div>
    </main>
  );
}
