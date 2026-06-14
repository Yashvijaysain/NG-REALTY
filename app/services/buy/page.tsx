"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { projects } from "../../data/projects";

function BuyContent() {
  const searchParams = useSearchParams();
  const location = (searchParams.get("location") as "Gurugram" | "Noida") || "Noida";

  const filtered = projects.filter((p) => p.region === location);

  const mapSrc =
    location === "Gurugram"
      ? "https://maps.google.com/maps?q=Gurugram+Haryana+India&output=embed"
      : "https://maps.google.com/maps?q=Noida+Uttar+Pradesh+India&output=embed";

  return (
    <div className="buy-page-wrapper">
      {/* Header bar */}
      <div className="buy-page-header">
        <Link href="/" className="buy-back-btn">
          <ArrowLeft size={18} /> Home
        </Link>
        <div className="buy-header-info">
          <p className="eyebrow dark" style={{ margin: 0 }}>
            Properties for Sale
          </p>
          <h1 className="buy-page-title">
            <MapPin size={20} />
            {location}
          </h1>
        </div>
      </div>

      {/* Split layout */}
      <div className="buy-layout">
        {/* Left — property cards */}
        <div className="buy-prop-list">
          {filtered.length === 0 ? (
            <p style={{ padding: "24px", color: "var(--muted)" }}>
              No properties found for {location}.
            </p>
          ) : (
            filtered.map((project) => (
              <Link
                key={project.id}
                href={`/services/buy/${project.id}`}
                className="buy-prop-card"
              >
                <div className="buy-prop-card-img">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 600px) 100vw, 400px"
                  />
                  <span className="buy-prop-badge">{project.status}</span>
                </div>
                <div className="buy-prop-card-info">
                  <p className="buy-prop-type">{project.type}</p>
                  <h3 className="buy-prop-name">{project.name}</h3>
                  <p className="buy-prop-location">
                    <MapPin size={13} />
                    {project.address}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Right — sticky map */}
        <div className="buy-map-panel">
          <iframe
            src={mapSrc}
            title={`Map of ${location}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default function BuyPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100svh",
            display: "grid",
            placeItems: "center",
            background: "var(--paper)",
            fontSize: "1.1rem",
            color: "var(--muted)",
          }}
        >
          Loading properties…
        </div>
      }
    >
      <BuyContent />
    </Suspense>
  );
}
