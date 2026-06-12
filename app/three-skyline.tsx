"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeSkyline() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 720px)").matches;
    if (reduceMotion || isSmallScreen) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.1, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.15));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const gold = new THREE.MeshBasicMaterial({ color: 0xd7b56d, transparent: true, opacity: 0.2, wireframe: true });
    const glass = new THREE.MeshBasicMaterial({ color: 0x7de8ff, transparent: true, opacity: 0.11, wireframe: true });

    const buildingGeometries: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 12; i += 1) {
      const height = 0.6 + Math.random() * 2.5;
      const geometry = new THREE.BoxGeometry(0.18 + Math.random() * 0.34, height, 0.18);
      buildingGeometries.push(geometry);
      const building = new THREE.Mesh(geometry, i % 3 === 0 ? gold : glass);
      building.position.set((i - 5.5) * 0.62, -1.2 + height / 2, -Math.random() * 1.7);
      group.add(building);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(140 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ size: 0.018, color: 0xf4d58d, transparent: true, opacity: 0.55 }),
    );
    scene.add(particles);

    const resize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    let frame = 0;
    let lastRender = 0;
    let running = true;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!running || document.hidden) return;
      const now = performance.now();
      if (now - lastRender < 42) return;
      lastRender = now;
      group.rotation.y = Math.sin(Date.now() * 0.00035) * 0.08;
      particles.rotation.y += 0.0007;
      particles.rotation.x += 0.00025;
      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });

    window.addEventListener("resize", resize);
    observer.observe(mount);
    renderer.render(scene, camera);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      renderer.dispose();
      particlesGeometry.dispose();
      buildingGeometries.forEach((geometry) => geometry.dispose());
      gold.dispose();
      glass.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-layer" ref={mountRef} aria-hidden />;
}
