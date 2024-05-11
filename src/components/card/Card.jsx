import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handlePosition = (e) => {
    const rect = scope.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;
    const padding = 10;

    if (clientX < rect.left + padding) {
      setPosX(2);
    } else if (clientX > rect.right - padding) {
      setPosX(-2);
    } else if (clientY < rect.top + padding) {
      setPosY(2);
    } else if (clientY > rect.bottom - padding) {
      setPosY(-2);
    }
  };

  const handleLeave = () => {
    setPosX((prevPosX) => (prevPosX !== undefined ? 0 : prevPosX));
    setPosY((prevPosY) => (prevPosY !== undefined ? 0 : prevPosY));
  };

  useEffect(() => {
    animate("#target", {
      x: posX,
      y: posY,
    });
  }, [posX, posY]);

  return (
    <div
      className="absolute bg-rose-50 p-6 rounded"
      ref={scope}
      onMouseMove={handlePosition}
      onMouseLeave={handleLeave}
    >
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        id="target"
      >
        Test
      </div>
    </div>
  );
};

export default Card;
