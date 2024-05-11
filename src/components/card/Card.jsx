import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  // const handlePosition = (e) => {
  //   const rect = scope.current.getBoundingClientRect();
  //   const clientX = e.clientX;
  //   const clientY = e.clientY;
  //   const padding = 50;

  //   if (clientX < rect.left + padding) {
  //     setPosX(10);
  //   } else if (clientX > rect.right - padding) {
  //     setPosX(-10);
  //   } else if (clientY < rect.top + padding) {
  //     setPosY(10);
  //   } else if (clientY > rect.bottom - padding) {
  //     setPosY(-10);
  //   }
  // };

  const handlePosition = (e) => {
    const rect = scope.current.getBoundingClientRect();
    const parentRect = scope.current.parentElement.getBoundingClientRect();
    const movespeed = 10; // aturen speed e mek
    const relativeX = e.clientX - parentRect.left - rect.width / 2;
    const relativeY = e.clientY - parentRect.top - rect.width / 2;
    const movementX =
      relativeX > 0
        ? Math.min(relativeX, -movespeed)
        : Math.max(relativeX, movespeed);

    const movementY =
      relativeY > 0
        ? Math.min(relativeY, -movespeed)
        : Math.max(relativeY, movespeed);
    setPosX(movementX);
    setPosY(movementY);
  };

  const handleLeave = () => {
    setPosX((prevPosX) => (prevPosX !== undefined ? 0 : prevPosX));
    setPosY((prevPosY) => (prevPosY !== undefined ? 0 : prevPosY));
  };

  useEffect(() => {
    animate(
      "#target",
      {
        x: posX,
        y: posY,
      },
      {
        duration: 1,
      }
    );
  }, [posX, posY]);

  return (
    <div
      className="absolute bg-rose-50 p-10 rounded"
      ref={scope}
      onMouseMove={handlePosition}
      onMouseLeave={handleLeave}
    >
      <div
        className="w-64 h-64 p-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        id="target"
      >
        Test
      </div>
    </div>
  );
};

export default Card;
