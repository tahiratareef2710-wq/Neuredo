import { useEffect, useRef } from "react";

// Ambient constellation field for the hero. Nodes drift slowly and draw a
// connecting edge whenever two of them come within range — a direct callback
// to the node-and-line mark in the Neuredo logo, rendered as living background
// texture rather than a static badge. The field is weighted toward the right
// two-thirds of the canvas (clear of the headline) and carries one larger,
// gently pulsing "hero" node as a focal point.
export default function NodeCanvas({ density = 46 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let nodes = [];
    let heroNode = null;
    let raf;
    let t = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 85% of nodes land in the right ~60% of the canvas; the rest scatter
    // across the full width so the left edge doesn't feel totally bare.
    function biasedX() {
      if (Math.random() < 0.85) {
        return width * 0.4 + Math.random() * width * 0.6;
      }
      return Math.random() * width;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / (15000 / (density / 46)));
      nodes = Array.from({ length: Math.max(20, Math.min(count, 90)) }, () => ({
        x: biasedX(),
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1.1,
      }));

      heroNode = {
        x: width * 0.6 + Math.random() * width * 0.15,
        y: height * 0.34 + Math.random() * height * 0.2,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        baseR: 5,
      };
      nodes.push(heroNode);
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const linkDist = Math.min(width, height) * 0.13;
      t += 0.038;
      const pulse = (Math.sin(t) + 1) / 2; // 0..1

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < -20) a.x = width + 20;
          if (a.x > width + 20) a.x = -20;
          if (a.y < -20) a.y = height + 20;
          if (a.y > height + 20) a.y = -20;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const isHeroLink = a === heroNode || b === heroNode;
          const reach = isHeroLink ? linkDist * 1.6 : linkDist;
          if (dist < reach) {
            const alpha = (1 - dist / reach) * (isHeroLink ? 0.5 : 0.35);
            ctx.strokeStyle = `rgba(79, 143, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        if (n === heroNode) continue;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(143, 182, 255, 0.85)";
        ctx.fill();
      }

      if (heroNode) {
        const r = heroNode.baseR + pulse * 2.2;
        const glow = ctx.createRadialGradient(
          heroNode.x, heroNode.y, 0,
          heroNode.x, heroNode.y, r * 8
        );
        glow.addColorStop(0, `rgba(79, 143, 255, ${0.32 + pulse * 0.18})`);
        glow.addColorStop(1, "rgba(79, 143, 255, 0)");
        ctx.beginPath();
        ctx.arc(heroNode.x, heroNode.y, r * 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(heroNode.x, heroNode.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 220, 255, 0.95)";
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(step);
      }
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="node-canvas" aria-hidden="true" />;
}