import React, { useEffect, useState } from "react";

export default function AnimatedBackground({
  circles = 15,
  colorPalette = [
    "rgba(23, 15, 42, 0.4)",
    "rgba(139, 28, 31, 0.45)",
    "rgba(10, 10, 223, 0.55)",
    "rgba(179, 115, 32, 0.69)",
    "rgba(134, 25, 109, 0.52)",
    "rgba(184, 189, 205, 0.35)",
    "rgba(48, 48, 52, 0.4)",
    "rgba(30, 30, 35, 0.4)",
    "rgba(60, 58, 54, 0.45)",
    "rgba(35, 41, 52, 0.4)",
  ],
  sizeRange = [40, 100],
  durationRange = [10, 20], // very slow animation
  delayRange = [0, 10],
  moveDistance = 30,
  blurClass = "blur-sm", // less or no blur
  background = "bg-black",
}) {
  const [items, setItems] = useState([]);

 useEffect(() => {
  const [minSize, maxSize] = sizeRange;
  const [minDuration, maxDuration] = durationRange;
  const [minDelay, maxDelay] = delayRange;

  const newItems = Array.from({ length: circles }).map(() => ({
    size: minSize + Math.random() * (maxSize - minSize),
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: minDelay + Math.random() * (maxDelay - minDelay),
    duration: minDuration + Math.random() * (maxDuration - minDuration),
    color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
  }));
  setItems(newItems);
}, []); // run once only


  return (
    <div className={`fixed inset-0 z-0 w-screen h-screen overflow-hidden pointer-events-none ${background}`}>
      {items.map(({ size, top, left, delay, duration, color }, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${blurClass}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            backgroundColor: color,
            animation: `float${i} ${duration}s cubic-bezier(0.42, 0, 0.58, 1) infinite`,
            animationDelay: `${delay}s`,
            willChange: "transform",
          }}
        />
      ))}

      <style>
        {items
          .map(
            (_, i) => `
            @keyframes float${i} {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(${moveDistance}px, ${-moveDistance}px); }
              50%  { transform: translate(0px, ${moveDistance}px); }
              75%  { transform: translate(${-moveDistance}px, ${-moveDistance}px); }
              100% { transform: translate(0, 0); }
            }
          `
          )
          .join("\n")}
      </style>
    </div>
  );
}
