"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Play,
  Heart,
  Menu,
  X
} from "lucide-react";

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Arpit Gahlot",
      role: "Founder",
      image: "/ag.png",
      bio: "Guiding the sourcing of high-end developments and investment pipelines."
    },
    {
      name: "Kushal Bhardwaj",
      role: "Founder",
      image: "/kb.png",
      bio: "Leading design-driven real estate advisory and masterplan curation."
    },
    {
      name: "Rajesh Dahiya",
      role: "Founder",
      image: "/outdoor_pool_instagram (1).png",
      bio: "Driving strategic partnerships, investor relations, and capital sourcing."
    },
    {
      name: "xyz Sharma",
      role: "Client Relations Director",
      image: "/centercourt-upscale.webp",
      bio: "Ensuring exceptional buyer service and seamless property handovers."
    },

  ];

  const partners = [1, 2, 3, 4, 5, 6, 7];

  const navItems = ["About", "Blog", "Projects", "Categories", "Gallery", "Invest", "Contact"];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#0b1114] font-sans overflow-x-hidden relative selection:bg-[#ead39a]">
      {/* Mesh Glow Background Top */}
      <div className="absolute top-0 left-0 right-0 h-[900px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[5%] w-[80%] md:w-[60%] aspect-square rounded-full bg-radial from-[#ead39a]/35 via-[#c7a45d]/10 to-transparent blur-[100px] md:blur-[130px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] md:w-[50%] aspect-square rounded-full bg-radial from-[#c7a45d]/20 to-transparent blur-[90px] md:blur-[120px]" />
      </div>

      {/* Mesh Glow Background Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1000px] overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-10%] left-[10%] w-[70%] aspect-square rounded-full bg-radial from-[#ead39a]/25 via-[#c7a45d]/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] aspect-square rounded-full bg-radial from-[#c7a45d]/15 to-transparent blur-[100px]" />
      </div>

      {/* Floating Header Navigation (Matching site-nav from home page) */}
      <header className="site-nav">
        <Link href="/" className="brand" aria-label="NEXT GEN REALTY DEVELOPERS home">
          <Image src="/ngfooter.png" alt="Next Gen Realty Logo" width={132} height={54} priority className="object-contain" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const href = item === "About" ? "/about" : item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`;
            return (
              <Link key={item} href={href} className="hover:text-white transition-colors">
                {item}
              </Link>
            );
          })}
        </nav>
        <Link href="/#contact" className="nav-cta">
          Enquire <ArrowRight size={16} />
        </Link>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="close">
              <X />
            </button>
            {navItems.map((item) => {
              const href = item === "About" ? "/about" : item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`;
              return (
                <Link key={item} href={href} onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-36 md:pt-48 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#c7a45d] block mb-4">Our Vision</span>
          <h1 className="font-serif text-[42px] md:text-[76px] leading-[2.05] tracking-tight font-bold mb-6 text-[#0b1114]" style={{ color: "var(--ink)" }}>
            Personal drive to define luxury living
          </h1>
          <p className="text-[#0b1114]/70 text-base md:text-lg leading-[1.6] max-w-2xl mx-auto mb-12 font-medium">
            Founded by a team of real estate and design pioneers, we're built on a legacy of aesthetic excellence.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden aspect-[16/10] md:aspect-[16/9] shadow-2xl group border border-[#0b1114]/5"
        >
          <Image
            src="/centercourt-upscale.webp"
          
            alt="Premium clubhouse swimming pool area"
            fill
            sizes="100vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 flex flex-col justify-between p-6 md:p-12 text-white" />

          {/* Timeline Overlay Info */}
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-20 text-left grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#ead39a]">2021</span>
                <span className="h-px bg-white/30 flex-grow" />
              </div>
              <p className="text-xs md:text-[13px] text-white/80 leading-[1.6]">
                Founding Vision. Our team began partnering with premium Delhi NCR developments to deliver luxury advisory with a personal service model.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#ead39a]">2022</span>
                <span className="h-px bg-white/30 flex-grow" />
              </div>
              <p className="text-xs md:text-[13px] text-white/80 leading-[1.6]">
                Advisory Expansion. We expanded into Gurugram and Noida, helping owners and investors connect with curated residential and commercial opportunities.
              </p>
            </div>
          </div>

          {/* Carousel Dot Indicators */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 flex gap-2">
            <button
              onClick={() => setActiveTimeline(0)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${activeTimeline === 0 ? "bg-white text-[#0b1114] border-white" : "bg-black/20 text-white border-white/20 hover:bg-black/40"
                }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setActiveTimeline(1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${activeTimeline === 1 ? "bg-white text-[#0b1114] border-white" : "bg-black/20 text-white border-white/20 hover:bg-black/40"
                }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs tracking-wider uppercase font-semibold">
            Premium Real Estate Advisory
          </div>
        </motion.div>
      </section>

      {/* Legacy Text Statement Block */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-2xl md:text-[36px] leading-[1.3] text-[#0b1114] font-medium max-w-3xl mx-auto mb-6">
            “All our team members are united by one common target: keep our legacy of aesthetic architecture.”
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#c7a45d] hover:text-[#0b1114] transition-colors duration-300 group"
          >
            Join our advisory network
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Co-Founders Block */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative rounded-[28px] overflow-hidden min-h-[400px] md:min-h-full flex flex-col justify-end p-8 shadow-xl border border-[#0b1114]/5"
          >
            <Image
              src="/outdoor_pool_instagram (1).png"
              alt="Luxury property amenity pool"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1114]/90 via-[#0b1114]/40 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ead39a] block mb-1">Our Leadership</span>
              <h3 className="text-xl font-serif font-bold mb-4">Arpit, Kushal & Rajesh</h3>
              <Link href="/#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full inline-flex items-center gap-2 transition-all">
                Who we are
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Quotes Grid */}
          <div className="md:col-span-7 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#e5ddd0]/50 border border-[#0b1114]/5 rounded-[24px] p-6 md:p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#0b1114]/90 italic font-medium">
                “Our approach combines market expertise, premium opportunities, and personalized guidance to help clients make confident real estate decisions.”
              </p>
              <div className="flex items-center gap-4 border-t border-[#0b1114]/10 pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-stone-300">
                  <Image
                    src="/ag.png"
                    alt="Arpit Gahlot"
                    fill
                    sizes="48px"
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0b1114]">Arpit Gahlot</h4>
                  <p className="text-xs text-[#0b1114]/60 font-medium">Founder</p>
                </div>
              </div>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#e5ddd0]/50 border border-[#0b1114]/5 rounded-[24px] p-6 md:p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#0b1114]/90 italic font-medium">
                “We work like advisors, design partners, and delivery champions — so our clients can be confident every step of the way.”
              </p>
              <div className="flex items-center gap-4 border-t border-[#0b1114]/10 pt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-stone-300">
                  <Image
                    src="/kb.png"
                    alt="Kushal Bhardwaj"
                    fill
                    sizes="48px"
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0b1114]">Kushal Bhardwaj</h4>
                  <p className="text-xs text-[#0b1114]/60 font-medium">Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        

        {/* Join the Team CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-[#c7a45d]/10 border border-[#c7a45d]/20 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-serif text-lg md:text-xl font-bold mb-1">We're always open to strategic developer partnerships.</h4>
            <p className="text-xs md:text-sm text-[#0b1114]/70 font-medium">Partner with us for premium residential and commercial representation.</p>
          </div>
          <Link href="/#contact" className="bg-[#c7a45d] hover:bg-[#0b1114] text-white hover:text-[white] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 self-start md:self-auto transition-all duration-300">
            Join the network
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Leadership & Team Grid */}
      <section id="team" className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c7a45d] block mb-2">Leadership & Team</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0b1114]">Who we are</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#e5ddd0]/40 border border-[#0b1114]/5 rounded-[20px] p-4 flex flex-col justify-between aspect-[3/4] hover:shadow-lg hover:bg-[#e5ddd0]/80 transition-all duration-300 group"
            >
              <div className="relative w-full aspect-square rounded-[14px] overflow-hidden bg-stone-300/50 mb-4 border border-[#0b1114]/5">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#ead39a]/20 to-[#c7a45d]/20 text-[#c7a45d] font-serif text-2xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-bold text-sm md:text-base text-[#0b1114] line-clamp-1">{member.name}</h4>
                  <p className="text-[11px] md:text-xs text-[#c7a45d] font-bold uppercase tracking-wider mb-2">{member.role}</p>
                </div>
                <p className="text-[11px] md:text-xs text-[#0b1114]/60 leading-[1.4] line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}






        </div>
      </section>

      {/* Core Beliefs Glowing Highlight Section */}
      <section className="relative z-10 py-24 md:py-32 overflow-hidden">
        {/* Soft center glowing orb */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] md:w-[60%] aspect-square rounded-full bg-radial from-[#ead39a]/30 to-transparent blur-[110px] md:blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-[44px] leading-[1.2] text-[#0b1114] font-semibold mb-8">
              “Luxury is engineered long before the marble arrives. Our mission is to make this luxury accessible to every client.”
            </p>
            <p className="text-base md:text-lg text-[#0b1114]/70 leading-[1.7] max-w-2xl mx-auto">
              By choosing our guidance, you're not just selecting a property or lifestyle, but you're active supporter of a refined community.
            </p>
          </motion.div>

          {/* Grayscale partner logos (Using countyplogo) */}
          <div className="mt-16 pt-8 border-t border-[#0b1114]/10 flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((num) => (
              <div key={num} className="relative w-24 h-24 opacity-50 hover:opacity-100 transition-opacity grayscale-100  filter">
                <Image
                  src={`/countyplogo/${num}.png`}
                  alt={`Partner logo ${num}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press / Media Coverage Section */}
      <section id="media" className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12 text-left">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c7a45d] block mb-2">Media Coverage</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0b1114]">As featured in the media</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Large Media Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-[#e5ddd0]/40 border border-[#0b1114]/5 rounded-[28px] p-8 md:p-10 flex flex-col justify-between gap-12 aspect-[4/3]"
          >
            <div className="w-10 h-10 rounded-full bg-[#c7a45d]/10 flex items-center justify-center text-[#c7a45d]">
              <Play size={16} fill="currentColor" />
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl leading-[1.4] text-[#0b1114] font-medium mb-6">
                “Next Gen Realty Developers represents a new standard of advisory in Delhi NCR. Their research-led sourcing is a game-changer for high-net-worth investors.”
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c7a45d]">— Delhi Design Journal</span>
            </div>
          </motion.div>

          {/* Right Media Headlines List */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {[
              {
                title: "Redefining luxury real estate in Noida",
                source: "NCR Times",
                date: "Jan 2026"
              },
              {
                title: "Design-driven property investment trends",
                source: "Realty Insider",
                date: "Nov 2025"
              },
              {
                title: "Why investors are choosing boutique brokerages",
                source: "Property Digest",
                date: "Sep 2025"
              },
              {
                title: "Boutique property advisory sets new benchmark",
                source: "Business Standard",
                date: "Jun 2025"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#e5ddd0]/20 hover:bg-[#e5ddd0]/50 border border-[#0b1114]/5 rounded-[20px] p-5 flex justify-between items-center transition-colors group cursor-pointer"
              >
                <div>
                  <h4 className="font-bold text-[14px] text-[#0b1114] group-hover:text-[#c7a45d] transition-colors leading-[1.4] mb-1">
                    {article.title}
                  </h4>
                  <span className="text-xs text-[#0b1114]/50 font-medium">{article.source}</span>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <span className="text-[10px] text-[#0b1114]/40 font-bold uppercase tracking-wider">{article.date}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c7a45d]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery / Mosaic Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Visual Grid Collage using local assets */}
          <div className="grid grid-cols-12 gap-4 h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-xl border border-[#0b1114]/5 relative">
            <div className="col-span-7 md:col-span-8 relative">
              <Image
                src="/centercourt-upscale.webp"
                alt="Luxury real estate project view"
                fill
                sizes="(max-width: 768px) 70vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-5 md:col-span-4 grid grid-rows-2 gap-4">
              <div className="relative">
                <Image
                  src="/gym.jpg"
                  alt="Fitness amenity"
                  fill
                  sizes="(max-width: 768px) 30vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/yoga.jpg"
                  alt="Wellness deck"
                  fill
                  sizes="(max-width: 768px) 30vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">We’re searching for talent</h3>
              <p className="text-xs md:text-sm text-white/80 max-w-md">Collaborating at the intersection of architecture, landscaping, and investments.</p>
            </div>
            <Link
              href="/#contact"
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white text-[#0b1114] hover:bg-[#c7a45d] hover:text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-md"
            >
              Open roles
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* FAQ & Final CTA */}
        <div className="bg-[#0b1114] text-[#f6f1e8] rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle accent glow in footer card */}
          <div className="absolute inset-0 bg-radial from-[#c7a45d]/15 to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c7a45d] block mb-4">Connect With Us</span>
            <h3 className="font-serif text-2xl md:text-4xl font-semibold leading-[1.3] mb-6">
              We love to communicate and discuss. If you have any questions left on current projects or investments, book a consultation to learn more.
            </h3>
            <Link href="/#contact" className="bg-[#c7a45d] hover:bg-[black] hover:text-white text-[#0b1114] px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3">
              Book a consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Block */}
      <footer className="relative z-10 max-w-5xl mx-auto px-6 pb-12 pt-8">
        <div className="bg-[#0b1114] text-[#f6f1e8]/80 rounded-[32px] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/10">
            
            <div className="col-span-2 flex flex-col justify-between gap-6">
              <div>
                <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-white flex items-center gap-2 mb-4">
                  <Image src="/26.png" alt="Next Gen Logo" width={150} height={60} className="object-contain" />
                </Link>
                <p className="text-xs text-[#f6f1e8]/60 leading-[1.6] max-w-xs">
                  Bespoke residential communities, mixed-use commercial hubs, and strategic investment representation in Gurgaon and Noida.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Properties</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#f6f1e8]/60 font-semibold">
                <li><Link href="/#projects" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="/#projects" className="hover:text-white transition-colors">Commercial</Link></li>
                <li><Link href="/#categories" className="hover:text-white transition-colors">Luxury Villas</Link></li>
                <li><Link href="/#categories" className="hover:text-white transition-colors">Smart Homes</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#f6f1e8]/60 font-semibold">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Our Blog</Link></li>
                <li><Link href="/#invest" className="hover:text-white transition-colors">Investment Model</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-[#f6f1e8]/40 font-bold tracking-wider uppercase">
            <div>
              © 2026 NEXT GEN REALTY DEVELOPERS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
              <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-1.5 text-white/50">
              Made with <Heart size={20} className="fill-[#c7a45d] text-[#c7a45d]" /> in Noida
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
