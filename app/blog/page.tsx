import Link from "next/link";

const featuredArticle = {
  title: "BPTP to invest ₹1,200 crore to develop a residential project in Gurugram",
  tag: "Must Read",
  preview:
    "BPTP, a leading real estate developer, has announced plans to invest ₹1,200 crore in developing a premium residential project in Gurugram. The project will feature state-of-the-art amenities and is expected to set new standards for luxury living in the region.",
  author: "ET Realty",
  role: "Marketing Consultant",
  date: "26 May 2026",
  image: "/27.png",
};

const featuredArticles = [
  {
    slug: "boutique-architecture-luxury-living",
    title: "How curated amenities shape premium communities",
    preview: "An inside look at the amenities buyers now expect from luxury residential developments.",
    tag: "Lifestyle",
    date: "May 2026",
  },
  {
    slug: "noida-premium-market-demand",
    title: "Understanding premium market demand in Noida",
    preview: "What high-net-worth buyers are looking for, and how developers can respond with confidence.",
    tag: "Market Trends",
    date: "April 2026",
  },
  {
    slug: "design-systems-for-future-ready-real-estate",
    title: "Design systems for future-ready real estate",
    preview: "How thoughtful design systems help create experiences that last across years and ownership cycles.",
    tag: "Design",
    date: "March 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="section blog-page" style={{ padding: "60px 24px 80px" }}>
      <div className="blog-logo-wrap">
        <img src="/NGLOGO.png" alt="NG Logo" className="blog-logo" />
      </div>

      <div className="blog-hero-heading">
        <div>
          <p className="eyebrow dark">News & Articles</p>
          <h1>Discover insights, trends, and inspiration.</h1>
        </div>
        <Link href="/blog" className="button secondary blog-view-all">
          View all
        </Link>
      </div>

      <section className="blog-hero">
        <div className="blog-hero-image">
          <img src={featuredArticle.image} alt={featuredArticle.title} />
        </div>
        <div className="blog-hero-copy">
          <span className="blog-chip">{featuredArticle.tag}</span>
          <h2>{featuredArticle.title}</h2>
          <p>{featuredArticle.preview}</p>
          <div className="blog-hero-meta">
            <div className="author-card">
              <div className="author-avatar">E</div>
              <div>
                <strong>{featuredArticle.author}</strong>
                <p>{featuredArticle.role}</p>
              </div>
            </div>
            <span className="blog-tag">{featuredArticle.date}</span>
          </div>
        </div>
      </section>

      <div className="blog-teaser-grid">
        {featuredArticles.map((article) => (
          <article key={article.slug} className="glass-card teaser-card">
            <div className="teaser-meta">
              <span className="eyebrow dark">{article.date}</span>
              <span className="blog-tag">{article.tag}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <div className="teaser-footer">
              <Link href={`/blog/${article.slug}`} className="button secondary small">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
