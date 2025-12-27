import { useEffect, useRef, useState } from "react";
import "./GameScreen.scss";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const MAX_SCALE = 2;

export default function GameScreen({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate scale based on viewport dimensions
      // We need to fit the game screen within the viewport
      const scaleX = viewportWidth / GAME_WIDTH;
      const scaleY = viewportHeight / GAME_HEIGHT;

      // Use the smaller scale to ensure the game fits in both dimensions
      let optimalScale = Math.min(scaleX, scaleY);

      // Clamp to max scale
      optimalScale = Math.min(optimalScale, MAX_SCALE);

      // Ensure minimum scale of 1 for readability
      optimalScale = Math.max(optimalScale, 0.5);

      setScale(optimalScale);
    };

    // Calculate initial scale
    calculateScale();

    // Recalculate on window resize
    window.addEventListener("resize", calculateScale);

    return () => {
      window.removeEventListener("resize", calculateScale);
    };
  }, []);

  return (
    <div className="game-screen-wrapper" ref={containerRef}>
      <div
        className="game-screen"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}