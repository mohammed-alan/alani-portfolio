import React, { useEffect, useState } from "react";

export default function AnimatedBackground({
  orbs = 8,
  colorPalette = [
    "rgba(255, 255, 255, 0.018)",
    "rgba(255, 255, 255, 0.014)",
    "rgba(82, 82, 91, 0.16)",
    "rgba(39, 39, 42, 0.18)",
    "rgba(24, 24, 27, 0.24)",
    "rgba(113, 113, 122, 0.12)",
    "rgba(63, 63, 70, 0.16)",
    "rgba(255, 255, 255, 0.01)",
  ],
  sizeRange = [200, 500],
  durationRange = [25, 45],
  delayRange = [0, 15],
  moveDistance = 60,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const [minSize, maxSize] = sizeRange;
    const [minDuration, maxDuration] = durationRange;
    const [minDelay, maxDelay] = delayRange;

    const newItems = Array.from({ length: orbs }).map(() => ({
      size: minSize + Math.random() * (maxSize - minSize),
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: minDelay + Math.random() * (maxDelay - minDelay),
      duration: minDuration + Math.random() * (maxDuration - minDuration),
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      dx1: (Math.random() - 0.5) * moveDistance * 2,
      dy1: (Math.random() - 0.5) * moveDistance * 2,
      dx2: (Math.random() - 0.5) * moveDistance * 2,
      dy2: (Math.random() - 0.5) * moveDistance * 2,
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden pointer-events-none bg-black">
      {items.map(({ size, top, left, delay, duration, color }, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            backgroundColor: color,
            filter: "blur(80px)",
            animation: `drift${i} ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            willChange: "transform",
          }}
        />
      ))}

      <style>
        {items
          .map(
            (item, i) => `
            @keyframes drift${i} {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33%  { transform: translate(${item.dx1}px, ${item.dy1}px) scale(1.05); }
              66%  { transform: translate(${item.dx2}px, ${item.dy2}px) scale(0.95); }
            }
          `
          )
          .join("\n")}
      </style>
    </div>
  );
}
