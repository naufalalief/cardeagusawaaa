import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const Card = ({}) => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handlePosition = (e) => {
    const rect = scope.current.getBoundingClientRect();
    const parentRect = scope.current.parentElement.getBoundingClientRect();
    const movedistance = 10; // aturen jarak e mek
    const relativeX = e.clientX - parentRect.left - rect.width / 2;
    const relativeY = e.clientY - parentRect.top - rect.width / 2;

    // let offsetX, offsetY;

    // if (movementDirections === "horizontal") {
    //   if (relativeX > 0) {
    //     offsetX = Math.min(relativeX, -movedistance);
    //   } else if (relativeX < 0) {
    //     offsetX = Math.max(relativeX, movedistance);
    //   }
    // } else if (movementDirections === "vertical") {
    //   if (relativeY > 0) {
    //     offsetY = Math.min(relativeY, -movedistance);
    //   } else if (relativeY < 0) {
    //     offsetY = Math.max(relativeY, movedistance);
    //   }
    // }

    const offsetX =
      relativeX > 0
        ? Math.min(relativeX, -movedistance)
        : Math.max(relativeX, movedistance);

    const offsetY =
      relativeY > 0
        ? Math.min(relativeY, -movedistance)
        : Math.max(relativeY, movedistance);

    setPosX(offsetX);
    setPosY(offsetY);
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
        <img
          src="https://avatars.githubusercontent.com/u/49366696?v=4"
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Card;
