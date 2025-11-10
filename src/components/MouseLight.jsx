import React, { useEffect, useState } from "react";

function MouseLight() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mouse]);

  return (
    <div
      style={{
        position: "fixed",
        transform: `translate(${pos.x - 50}px, ${pos.y - 50}px)`,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,0,255,0.3) 0%, rgba(0,255,255,0.1) 50%, transparent 80%)",
        pointerEvents: "none",
        zIndex: 50,
        willChange: "transform",
      }}
    />
  );
}

export default MouseLight;
