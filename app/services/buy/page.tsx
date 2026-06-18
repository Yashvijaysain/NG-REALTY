"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { projects, type Project, type Region } from "../../data/projects";

declare global {
  interface Window {
    L?: any;
  }
}

const regions = Array.from(new Set(projects.map((project) => project.region))) as Region[];
const leafletCssId = "leaflet-css";
const leafletScriptId = "leaflet-script";

function loadLeaflet() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.L) return Promise.resolve(window.L);

  if (!document.getElementById(leafletCssId)) {
    const link = document.createElement("link");
    link.id = leafletCssId;
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }

  return new Promise<any>((resolve, reject) => {
    const existingScript = document.getElementById(leafletScriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.L), { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = leafletScriptId;
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function ProjectLocationMap({ location, projects }: { location: Region; projects: Project[] }) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const markerKey = useMemo(() => projects.map((project) => project.id).join("|"), [projects]);

  useEffect(() => {
    if (!mapElementRef.current || projects.length === 0) return;

    let map: any;
    let cancelled = false;
    const center = projects.reduce(
      (average, project) => ({
        lat: average.lat + project.coordinates.lat / projects.length,
        lng: average.lng + project.coordinates.lng / projects.length,
      }),
      { lat: 0, lng: 0 },
    );

    loadLeaflet()
      .then((L) => {
        if (!L || cancelled || !mapElementRef.current) return;

        map = L.map(mapElementRef.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        }).setView([center.lat, center.lng], projects.length === 1 ? 13 : 11);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        const bounds = L.latLngBounds([]);
        projects.forEach((project, index) => {
          const position = [project.coordinates.lat, project.coordinates.lng] as [number, number];
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.address)}`;
          const marker = L.marker(position, {
            title: project.name,
            icon: L.divIcon({
              className: "project-map-marker",
              html: `<span>${index + 1}</span>`,
              iconSize: [34, 34],
              iconAnchor: [17, 34],
              popupAnchor: [0, -34],
            }),
          }).addTo(map);

          marker.bindPopup(`
            <strong>${escapeHtml(project.name)}</strong>
            <small>${escapeHtml(project.address)}</small>
            <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          `);
          bounds.extend(position);
        });

        if (projects.length > 1) {
          map.fitBounds(bounds, { padding: [34, 34], maxZoom: 13 });
        }
      })
      .catch(() => {
        if (mapElementRef.current) {
          mapElementRef.current.dataset.mapError = "true";
        }
      });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [location, markerKey, projects]);

  return (
    <div className="project-map">
      <div ref={mapElementRef} className="project-map-canvas" aria-label={`${location} project map`} />
      <div className="project-map-fallback">
        <MapPin size={18} />
        Loading project locations...
      </div>
    </div>
  );
}

function BuyContent() {
  const searchParams = useSearchParams();
  const requestedLocation = searchParams.get("location");
  const location = regions.includes(requestedLocation as Region) ? (requestedLocation as Region) : "Noida";

  const filtered = projects.filter((project) => project.region === location);

  return (
    <div className="buy-page-wrapper">
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

      <div className="buy-layout">
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

        <div className="buy-map-panel">
          <ProjectLocationMap location={location} projects={filtered} />
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
          Loading properties...
        </div>
      }
    >
      <BuyContent />
    </Suspense>
  );
}
