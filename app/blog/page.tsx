import Link from "next/link";

const articles = [
  {
    title: "Market Pulse: Noida Luxury Demand",
    date: "June 2026",
    preview: "Discover the latest trends shaping premium residential demand in Noida and what investors should watch next.",
    tag: "Market Trends",
  },
  {
    title: "Why Smart Homes Matter in Gurugram",
    date: "May 2026",
    preview: "Smart home features are now a core part of buyer expectations in luxury real estate. Learn how we package them.",
    tag: "Smart Living",
  },
  {
    title: "Designing the Perfect Community",
    date: "April 2026",
    preview: "From landscaped courtyards to wellness amenities, a successful luxury community blends comfort with connection.",
    tag: "Community Design",
  },
];

export default function BlogPage() {
  return (
    <main className="section blog-page" style={{ padding: "120px 24px 80px" }}>
      <div className="section-heading">
        <p className="eyebrow dark">News & Articles</p>
        <h1>Latest Insights from NEXT GEN REALTY DEVELOPERS</h1>
        <p className="section-intro">
          Explore market outlook, smart living trends, and design perspectives that shape premium residential and commercial development in Delhi NCR.
        </p>
      </div>

      <div className="blog-layout">
        <div className="blog-list">
          {articles.map((article) => (
            <article key={article.title} className="glass-card blog-card">
              <div className="blog-card-header">
                <span className="eyebrow dark">{article.date}</span>
                <span className="blog-tag">{article.tag}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.preview}</p>
              <div className="blog-card-actions">
                <Link href="/about" className="button secondary">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <aside className="glass-card blog-sidebar">
          <h3>Stay Informed</h3>
          <p>
            Follow our latest commentary for expert insight into luxury real estate demand, buyer behavior, and premium placemaking in Noida and Gurugram.
          </p>
          <div className="sidebar-section">
            <strong>Topics</strong>
            <ul className="list-bullet">
              <li>Luxury market updates</li>
              <li>Smart home experiences</li>
              <li>Design & community strategy</li>
            </ul>
          </div>
          <Link href="/about" className="button primary">
            Meet Our Team
          </Link>
        </aside>
      </div>

      <div className="section-actions">
        <Link href="/" className="button secondary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
