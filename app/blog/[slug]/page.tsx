import Link from "next/link";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="section blog-article-page" style={{ padding: "90px 24px 80px" }}>
      <div className="section-heading">
        <p className="eyebrow dark">Article</p>
        <h1>{slug.replace(/-/g, " ")}</h1>
      </div>

      <section className="glass-card" style={{ maxWidth: "960px", margin: "0 auto", padding: "32px" }}>
        <p>
          This is a placeholder page for the selected article. Replace this content with a full article layout and copy when ready.
        </p>
        <p className="section-intro">
          The URL slug is <strong>{slug}</strong>. Use this route to build a proper article details page later.
        </p>
        <div style={{ marginTop: "24px" }}>
          <Link href="/blog" className="button secondary">
            Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
