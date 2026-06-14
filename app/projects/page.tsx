import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "../data/projects";

export const metadata = {
  title: "All Projects — NG Realty Developers",
  description: "Browse all luxury residential projects by NG Realty Developers across Noida and Gurugram.",
};

export default function AllProjectsPage() {
  return (
    <div className="all-projects-wrapper">
      {/* Header */}
      <div className="all-projects-header">
        <Link href="/" className="buy-back-btn">
          ← Home
        </Link>
        <div>
          <p className="eyebrow dark" style={{ margin: 0 }}>
            Our Portfolio
          </p>
          <h1 className="all-projects-title">All Projects</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="all-projects-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/services/buy/${project.id}`}
            className="all-proj-card"
          >
            <div className="all-proj-card-img">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="all-proj-region-badge">{project.region}</span>
            </div>
            <div className="all-proj-card-body">
              <p className="all-proj-type">{project.type}</p>
              <h2 className="all-proj-name">{project.name}</h2>
              <p className="all-proj-location">
                <MapPin size={13} />
                {project.address}
              </p>
              <div className="all-proj-footer">
                <span className="all-proj-status">{project.status}</span>
                <span className="all-proj-cta">
                  View Details <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
