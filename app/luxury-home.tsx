"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  Building2,
  ChevronLeft,
  ChevronRight,
  Gem,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  X,
  Zap,
} from "lucide-react";

const assets = {
  logo: "/ngfooter.png",
  hero: "/optimized/club-pool-night.webp",
  tower: "/optimized/skyline-tower.webp",
  club: "/optimized/centercourt-upscale.webp",
  pool: "/optimized/outdoor-pool.webp",
  elevation: "/optimized/apartment-elevation.webp",
  gym: "/optimized/gym.webp",
  yoga: "/optimized/yoga.webp",
};

const navItems = ["About", "Projects", "Categories", "Gallery", "Invest", "Contact"];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10000, suffix: "+", label: "Happy Families" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", label: "Sq Ft Developed" },
];

type Region = "Noida" | "Gurugram";

const projects = [
  {
    id: "ivory-county",
    region: "Noida" as Region,
    name: "Ivory County",
    type: "Premium Residential Development",
    location: "Noida",
    image: assets.elevation,
    detail:
      "Ivory County is positioned as a refined residential address in Noida with premium planning, landscaped community spaces, and a comfortable urban lifestyle.",
    metric: "Noida",
    status: "Ongoing / Select Inventory",
    configuration: "Luxury Apartments",
    address: "Noida, Uttar Pradesh",
    highlights: ["Premium residential towers", "Landscaped central greens", "Clubhouse lifestyle", "Secure gated community"],
    images: [assets.elevation, assets.club, assets.gym, assets.yoga],
  },
  {
    id: "jade-county",
    region: "Noida" as Region,
    name: "Jade County",
    type: "Luxury Residential Community",
    location: "Noida",
    image: assets.club,
    detail:
      "Jade County brings a clean, amenity-rich residential experience to Noida with well-planned residences, leisure facilities, and strong urban connectivity.",
    metric: "Noida",
    status: "Ongoing / Enquire Now",
    configuration: "Premium Residences",
    address: "Noida, Uttar Pradesh",
    highlights: ["Modern residences", "Lifestyle clubhouse", "Fitness and wellness zones", "Family-focused community planning"],
    images: [assets.club, assets.pool, assets.yoga, assets.elevation],
  },
  {
    id: "central-court",
    region: "Gurugram" as Region,
    name: "The Central Court",
    type: "Flagship Luxury Residential Project",
    location: "Gurugram",
    image: assets.tower,
    detail: "A landmark residential address in Gurugram with high-rise residences, a premium clubhouse, pool deck, wellness zones, and lifestyle amenities.",
    metric: "Gurugram",
    status: "Delivered / Ready Lifestyle",
    configuration: "Luxury High-Rise Residences",
    address: "The Central Court, Gurugram, Haryana",
    highlights: ["High-rise residences", "Premium clubhouse", "Pool and wellness deck", "Fitness, yoga, and leisure amenities"],
    images: [assets.tower, assets.club, assets.pool, assets.gym, assets.yoga, assets.elevation],
  },
];

const regions: Region[] = ["Noida", "Gurugram"];

const categories = [
  { title: "Residential", icon: Home, copy: "Signature apartments with crafted amenities and efficient plans." },
  { title: "Commercial", icon: Landmark, copy: "Future-ready business addresses with high street visibility." },
  { title: "Luxury Villas", icon: Trees, copy: "Private estates shaped for privacy, light, and landscape." },
  { title: "Smart Homes", icon: Zap, copy: "Connected residences with intelligent climate, access, and security." },
  { title: "Mixed-Use", icon: Building2, copy: "Live-work-play districts designed for enduring demand." },
];

const why = [
  { icon: ShieldCheck, title: "Transparent Delivery", copy: "Milestone-led execution, clear communication, and quality audits." },
  { icon: Gem, title: "Premium Craft", copy: "Material palettes, lighting, landscape, and arrival moments tuned for luxury." },
  { icon: Sparkles, title: "Smart Living", copy: "Technology-enabled communities that feel effortless day after day." },
  { icon: Award, title: "Enduring Value", copy: "Locations, layouts, and amenity mixes selected for long-term appreciation." },
];

const gallery = projects.flatMap((project) =>
  project.images.map((image, index) => ({
    image,
    project: project.name,
    region: project.region,
    tall: index % 3 === 0,
  })),
);

const testimonials = [
  {
    name: "Yash",
    role: "nothing",
    quote: "good experience.",
  },
  {
    name: "lakshay",
    role: "Resident",
    quote: "It has the polish of a luxury hotel, but the planning of a home built for real everyday comfort.",
  },
 
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const target = { count: 0 };
    const tween = gsap.to(target, {
      count: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        once: true,
      },
      onUpdate: () => {
        const number = Math.round(target.count).toLocaleString("en-IN");
        if (ref.current) ref.current.textContent = `${number}${suffix}`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

export default function LuxuryHome() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<Region>("Noida");
  const filteredProjects = projects.filter((project) => project.region === selectedRegion);
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "NEXT GEN REALTY DEVELOPERS",
      description: "Luxury residences, commercial spaces, smart developments, and investment opportunities.",
      areaServed: "India",
      url: "https://nextgenrealtydevelopers.com",
    }),
    [],
  );

  useEffect(() => {
    if (heroVideoRef.current) {
      const playPromise = heroVideoRef.current.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay may be blocked on some devices; the video remains muted and will still be ready.
        });
      }
    }

    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;
    const lenis = !reduceMotion && isDesktop ? new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, smoothWheel: true }) : null;
    let rafId = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    if (lenis) rafId = requestAnimationFrame(raf);

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        },
      );
    });

    if (isDesktop && !reduceMotion) {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: { trigger: element, scrub: 0.4 },
        });
      });
    }

    gsap.to(".scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
    });

    const timer = window.setTimeout(() => setLoading(false), 1250);
    return () => {
      window.clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonial((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AnimatePresence>
        {loading && (
          <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Image src={assets.logo} alt="NEXT GEN REALTY DEVELOPERS logo" width={180} height={80} priority />
            <motion.div className="loader-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="scroll-progress" aria-hidden />

      <header className="site-nav">
        <a href="#hero" className="brand" aria-label="NEXT GEN REALTY DEVELOPERS home">
          <Image src={assets.logo} alt="" width={132} height={54} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">
          Enquire <ArrowRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X />
            </button>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="hero" className="hero">
          <div className="hero-media">
            <video
              ref={heroVideoRef}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={assets.hero}
            >
              <source src="/ivory.mp4" type="video/mp4" />
              <source src="/ivary.mov" type="video/quicktime" />
            </video>
          </div>
          <div className="hero-shade" />
          <motion.div className="hero-content" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
            
            
         
            <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <a className="button primary" href="#projects">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Contact Us <Phone size={17} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="section logo-marquee" aria-label="Partner logos">
          <div className="marquee-track" aria-hidden="true">
            {Array.from({ length: 9 }, (_, index) => (
              <div className="logo-cell" key={`logo-${index}`}>
                <Image src={`/countyplogo/${index + 1}.png`} alt={`Partner logo ${index + 1}`} fill sizes="120px" />
              </div>
            ))}
            {Array.from({ length: 9 }, (_, index) => (
              <div className="logo-cell" key={`logo-dup-${index}`}>
                <Image src={`/countyplogo/${index + 1}.png`} alt={`Partner logo ${index + 1}`} fill sizes="120px" />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-copy-wrap">
            <div className="section-copy" data-reveal>
              <p className="eyebrow dark">About Us</p>
              <h2>Brokering premium properties for buyers and investors across Noida and Gurugram.</h2>
              <p>
                NEXT GEN REALTY DEVELOPERS is a trusted brokering company that connects clients to the right properties and helps
                sellers find the best buyers. We guide clients through property selection, negotiation, and closing for our
                featured opportunities in Noida and Gurugram.
              </p>
            </div>

            <div className="about-highlights" data-reveal>
              {[
                "Site intelligence shaping every masterplan.",
                "Design engineering for premium living.",
                "Luxury execution with transparent delivery.",
                "Community handover built for lasting value.",
              ].map((item, index) => (
                <div className="highlight-pill" key={item}>
                  <strong>0{index + 1}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="about-values" data-reveal>
              
            </div>
          </div>

          <div className="about-image" data-reveal data-parallax>
            <Image src={assets.elevation} alt="Premium high-rise development elevation" fill sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading" data-reveal>
            <p className="eyebrow dark">Featured Projects</p>
            <h2>Explore landmark projects by location.</h2>
          </div>
          <div className="region-grid" data-reveal>
            {regions.map((region) => {
              const count = projects.filter((project) => project.region === region).length;
              return (
                <button
                  className={`region-card ${selectedRegion === region ? "active" : ""}`}
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  type="button"
                >
                  <span>{count} Projects</span>
                  <strong>{region}</strong>
                  <ArrowRight size={20} />
                </button>
              );
            })}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <MagneticCard className="project-card" key={project.name}>
                <button onClick={() => setActiveProject(project)} aria-label={`Open ${project.name} details`}>
                  <Image src={project.image} alt={project.name} fill sizes="(max-width: 800px) 100vw, 33vw" />
                  <span className="project-metric">{project.metric}</span>
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                    <span>{project.location}</span>
                  </div>
                </button>
              </MagneticCard>
            ))}
          </div>
        </section>

        <section id="categories" className="section categories">
          <div className="section-heading" data-reveal>
            <p className="eyebrow dark">Property Categories</p>
            <h2>Every asset class, held to one premium standard.</h2>
          </div>
          <div className="category-grid">
            {categories.map(({ title, icon: Icon, copy }) => (
              <MagneticCard className="glass-card" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </MagneticCard>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="section-heading" data-reveal>
            <p className="eyebrow dark">Project Gallery</p>
            <h2>Properties across Noida and Gurugram.</h2>
          </div>
          <div className="masonry">
            {gallery.map((item, index) => (
              <button
                className={item.tall ? "tall" : ""}
                key={`${item.project}-${item.image}-${index}`}
                onClick={() => setLightbox(item.image)}
                data-reveal
              >
                <Image src={item.image} alt={`${item.project} project gallery`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                <span>
                  {item.project}
                  <small>{item.region}</small>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section why">
          <div className="section-heading" data-reveal>
            <p className="eyebrow dark">Why Choose Us</p>
            <h2>Luxury is engineered long before the marble arrives.</h2>
          </div>
          <div className="why-grid">
            {why.map(({ icon: Icon, title, copy }) => (
              <div className="feature-card" key={title} data-reveal>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="testimonial-shell" data-reveal>
            <p className="eyebrow">Testimonials</p>
            <AnimatePresence mode="wait">
              <motion.div key={testimonial} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }}>
                <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" size={20} />)}</div>
                <blockquote>&ldquo;{testimonials[testimonial].quote}&rdquo;</blockquote>
                <p>{testimonials[testimonial].name}</p>
                <span>{testimonials[testimonial].role}</span>
              </motion.div>
            </AnimatePresence>
            <div className="carousel-controls">
              <button onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">
                <ChevronLeft />
              </button>
              <button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>

        <section id="invest" className="section investment">
          <div className="section-copy" data-reveal>
            <p className="eyebrow dark">Investment Opportunities</p>
            <h2>Designed for lifestyle today and disciplined returns tomorrow.</h2>
            <p>Our Noida and Gurugram portfolio is shaped around strong connectivity, premium residential demand, and long-term end-user value.</p>
          </div>
          <div className="investment-grid">
            {[
              ["xx-xx%", "Target appreciation corridor"],
              ["xx%", "Projected rental yield"],
              ["2x", "Growth node infrastructure"],
            ].map(([value, label]) => (
              <MagneticCard className="investment-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </MagneticCard>
            ))}
          </div>
        </section>

        <section className="section awards">
          <div data-reveal>
            <p className="eyebrow dark">Awards & Recognition</p>
            <h2>Recognized for delivery, design quality, and community impact.</h2>
          </div>
          <div className="award-row">
            {['Luxury Habitat Award', 'Smart Township Citation', 'Green Planning Merit', 'Customer Trust Badge'].map((award) => (
              <div className="award-badge" key={award}>
                <Award />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2>Begin a private consultation.</h2>
            <form>
              <input aria-label="Name" placeholder="Name" />
              <input aria-label="Email" type="email" placeholder="Email" />
              <input aria-label="Phone" placeholder="Phone" />
              <select aria-label="Interest">
                <option>Luxury Residence</option>
                <option>Commercial Space</option>
                <option>Investment Opportunity</option>
              </select>
              <textarea aria-label="Message" placeholder="Message" rows={4} />
              <button type="button" className="button primary">
                Send Enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
          <div className="map-panel" data-reveal>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps?q=Wave+Silver+Tower+Sector+18+Noida&output=embed"
                title="Corporate Office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-grid" />
            <div>
              <MapPin />
              <h3>Corporate Office</h3>
              <p>Wave Silver Tower, Sector 18, Noida, Uttar Pradesh</p>
            </div>
            <p><Phone size={16} /> +91 98765 43210</p>
            <p><Mail size={16} /> hello@nextgenrealty.in</p>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <Image src={assets.logo} alt="NEXT GEN REALTY DEVELOPERS" width={150} height={60} />
          <p>Luxury Residences • Commercial Spaces • Smart Developments</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <div>
          <h3>Newsletter</h3>
          <div className="newsletter">
            <input aria-label="Newsletter email" placeholder="Email address" />
            <button aria-label="Subscribe"><ArrowRight /></button>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}>
            <motion.div className="project-modal" initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
              <button className="close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button>
              <div className="property-hero">
                <Image src={activeProject.image} alt={activeProject.name} fill sizes="(max-width: 900px) 92vw, 860px" />
                <div>
                  <p className="eyebrow">{activeProject.region}</p>
                  <h2>{activeProject.name}</h2>
                  <span>{activeProject.type}</span>
                </div>
              </div>
              <div className="property-content">
                <div>
                  <p className="eyebrow dark">About Property</p>
                  <p>{activeProject.detail}</p>
                  <div className="detail-list">
                    <div>
                      <span>Location</span>
                      <strong>{activeProject.address}</strong>
                    </div>
                    <div>
                      <span>Status</span>
                      <strong>{activeProject.status}</strong>
                    </div>
                    <div>
                      <span>Configuration</span>
                      <strong>{activeProject.configuration}</strong>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="eyebrow dark">Highlights</p>
                  <ul className="highlight-list">
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="property-gallery">
                {activeProject.images.map((image, index) => (
                  <button key={`${activeProject.id}-${image}-${index}`} onClick={() => setLightbox(image)} type="button">
                    <Image src={image} alt={`${activeProject.name} gallery image`} fill sizes="(max-width: 760px) 45vw, 220px" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
        {lightbox && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
            <button className="close floating" onClick={() => setLightbox(null)} aria-label="Close image"><X /></button>
            <motion.div className="lightbox" initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }}>
              <Image src={lightbox} alt="Expanded project gallery view" fill sizes="90vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
