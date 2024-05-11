import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const Card = ({ content, variant, X, Y }) => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const animated = () => {
    let offsetX, offsetY;
    const movedistance = 50;
    if (variant === "normal") {
      offsetX = X > 0 ? Math.min(X, -movedistance) : Math.max(X, movedistance);
      offsetY = Y > 0 ? Math.min(Y, -movedistance) : Math.max(Y, movedistance);
    } else if (variant === "inverted") {
      offsetX = X < 0 ? Math.max(X, -movedistance) : Math.min(X, movedistance);
      offsetY = Y < 0 ? Math.max(Y, -movedistance) : Math.min(Y, movedistance);
    }

    setPosX(offsetX);
    setPosY(offsetY);
  };

  useEffect(() => {
    animated();
    animate(
      scope.current,
      {
        x: posX,
        y: posY,
      },
      {
        duration: 0.2,
        delay: 0.1,
        type: "spring",
        damping: 100,
      }
    );
  }, [X, Y, variant]);

  return (
    <div className="bg-rose-50 rounded p-4" ref={scope}>
      <div
        className="w-64 p-6 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow "
        id="target"
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/49366696?v=4"
            alt="avatar"
            className="rounded-full"
          />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
