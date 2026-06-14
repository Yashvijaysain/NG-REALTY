import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="prop-detail-wrapper">
      {/* Topbar */}
      <div className="prop-detail-topbar">
        <Link
          href={`/services/buy?location=${project.region}`}
          className="buy-back-btn"
        >
          <ArrowLeft size={18} /> Back to {project.region} Properties
        </Link>
      </div>

      {/* Hero */}
      <div className="prop-detail-hero">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="100vw"
          priority
        />
        <div className="prop-detail-hero-overlay">
          <p className="eyebrow" style={{ margin: 0 }}>
            {project.region}
          </p>
          <h1>{project.name}</h1>
          <p className="prop-detail-type">{project.type}</p>
        </div>
      </div>

      {/* Body */}
      <div className="prop-detail-body">
        {/* Info + Highlights */}
        <div className="prop-detail-content">
          <div className="prop-detail-info">
            <p className="eyebrow dark" style={{ margin: 0 }}>
              About this Property
            </p>
            <p className="prop-detail-description">{project.detail}</p>

            <div className="prop-detail-meta">
              <div>
                <span>Location</span>
                <strong>
                  <MapPin size={14} />
                  {project.address}
                </strong>
              </div>
              <div>
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>
              <div>
                <span>Configuration</span>
                <strong>{project.configuration}</strong>
              </div>
            </div>
          </div>

          <div className="prop-detail-highlights">
            <p className="eyebrow dark" style={{ margin: 0 }}>
              Highlights
            </p>
            <ul className="prop-highlight-list">
              {project.highlights.map((h) => (
                <li key={h}>
                  <CheckCircle size={16} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="prop-detail-gallery-section">
          <p className="eyebrow dark" style={{ margin: "0 0 4px" }}>
            Gallery
          </p>
          <div className="prop-detail-gallery">
            {project.images.map((img, i) => (
              <div key={i} className="prop-gallery-item">
                <Image
                  src={img}
                  alt={`${project.name} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 600px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="prop-detail-cta">
          <h2>Interested in {project.name}?</h2>
          <p>
            Connect with our team for a private consultation and site visit.
          </p>
          <Link
            href="/#contact"
            className="button primary"
            style={{
              display: "inline-flex",
              gap: "10px",
              alignItems: "center",
              padding: "0 32px",
              minHeight: "52px",
              borderRadius: "8px",
              fontWeight: 800,
            }}
          >
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
