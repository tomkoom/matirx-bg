import React, { useEffect, useRef } from "react";

export const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const charSize = 10; // Adjust for smaller characters
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const cols = Math.floor(canvas.width / charSize) + 1; // Adjust column count
    const ypos = Array(cols).fill(0);

    const drawMatrix = () => {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${charSize}px monospace`; // Adjust font size

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * charSize; // Adjust column width
        ctx.fillText(text, x, y);
        if (y > canvas.height + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + charSize; // Adjust vertical step
      });
    };

    const intervalId = setInterval(drawMatrix, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", background: "#000", margin: 0, padding: 0 }}
    />
  );
};
