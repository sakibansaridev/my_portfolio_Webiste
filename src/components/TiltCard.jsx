import { useState, useRef } from "react";

/**
 * 3D Tilt Card Wrapper Component
 * Provides real-time 3D perspective tilt on mouse hover with dynamic glare reflection
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 15,
  scale = 1.03,
  perspective = 1000,
  glare = true,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  );
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    x: "50%",
    y: "50%",
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const tiltX = (0.5 - yPct) * maxTilt * 2;
    const tiltY = (xPct - 0.5) * maxTilt * 2;

    setTransform(
      `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      setGlareStyle({
        opacity: 0.35,
        x: `${(xPct * 100).toFixed(1)}%`,
        y: `${(yPct * 100).toFixed(1)}%`,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    if (glare) {
      setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out, box-shadow 0.2s ease-out",
        transformStyle: "preserve-3d",
        position: "relative",
        willChange: "transform",
        ...style,
      }}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare-effect"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            opacity: glareStyle.opacity,
            transition: "opacity 0.3s ease-out",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}
