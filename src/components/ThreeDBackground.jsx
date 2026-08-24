import { useEffect, useRef } from "react";

export default function ThreeDBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Particles / Nodes in 3D Space
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 70);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 100, // Depth
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 1.2,
        color: i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#06b6d4" : "#a855f7",
      });
    }

    // 3D Floating Geometry Cubes
    const cubes = [
      { x: -width * 0.25, y: -height * 0.2, z: 400, rotX: 0, rotY: 0, rotZ: 0, speedX: 0.008, speedY: 0.012, size: 45, color: "#6366f1" },
      { x: width * 0.35, y: -height * 0.1, z: 350, rotX: 0.5, rotY: 0.5, rotZ: 0, speedX: -0.01, speedY: 0.007, size: 55, color: "#06b6d4" },
      { x: -width * 0.3, y: height * 0.3, z: 500, rotX: 1, rotY: 0.2, rotZ: 0.4, speedX: 0.006, speedY: -0.009, size: 40, color: "#a855f7" },
      { x: width * 0.25, y: height * 0.35, z: 450, rotX: 0.2, rotY: 0.8, rotZ: 0, speedX: -0.007, speedY: 0.005, size: 50, color: "#10b981" },
    ];

    // Project 3D coordinate to 2D screen
    const fov = 450;
    const project = (x, y, z) => {
      const scale = fov / (fov + z);
      return {
        x: width / 2 + x * scale,
        y: height / 2 + y * scale,
        scale,
      };
    };

    // Render loop
    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const tiltOffsetX = (mouseX - width / 2) * 0.15;
      const tiltOffsetY = (mouseY - height / 2) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.z < 50) p.z = 800;
        if (p.z > 800) p.z = 50;

        const proj = project(p.x + tiltOffsetX, p.y + tiltOffsetY, p.z);

        if (proj.x > 0 && proj.x < width && proj.y > 0 && proj.y < height) {
          const alpha = (1 - p.z / 900) * 0.65;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.shadowBlur = 12 * proj.scale;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            const proj1 = project(p.x + tiltOffsetX, p.y + tiltOffsetY, p.z);
            const proj2 = project(p2.x + tiltOffsetX, p2.y + tiltOffsetY, p2.z);

            const lineAlpha = (1 - dist / 180) * 0.15;
            ctx.beginPath();
            ctx.moveTo(proj1.x, proj1.y);
            ctx.lineTo(proj2.x, proj2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1 * proj1.scale;
            ctx.stroke();
          }
        }
      }

      // Render 3D Wireframe Floating Cubes
      cubes.forEach((cube) => {
        cube.rotX += cube.speedX;
        cube.rotY += cube.speedY;

        const s = cube.size;
        const vertices = [
          [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
          [-s, -s, s],  [s, -s, s],  [s, s, s],  [-s, s, s],
        ];

        // 3D Rotation Math
        const rotated = vertices.map(([vx, vy, vz]) => {
          // Rotate Y
          let x1 = vx * Math.cos(cube.rotY) + vz * Math.sin(cube.rotY);
          let z1 = -vx * Math.sin(cube.rotY) + vz * Math.cos(cube.rotY);
          // Rotate X
          let y2 = vy * Math.cos(cube.rotX) - z1 * Math.sin(cube.rotX);
          let z2 = vy * Math.sin(cube.rotX) + z1 * Math.cos(cube.rotX);

          return {
            x: cube.x + x1 + tiltOffsetX * 0.5,
            y: cube.y + y2 + tiltOffsetY * 0.5,
            z: cube.z + z2,
          };
        });

        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7],
        ];

        const projectedVertices = rotated.map((v) => project(v.x, v.y, v.z));

        ctx.strokeStyle = cube.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = cube.color;
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 1.6;

        edges.forEach(([i1, i2]) => {
          const p1 = projectedVertices[i1];
          const p2 = projectedVertices[i2];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
}
