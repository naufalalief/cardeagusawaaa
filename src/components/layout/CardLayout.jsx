import React, { useRef, useState } from "react";
import Card from "../card/Card.jsx";
import { useAnimate } from "framer-motion";

const CardLayout = () => {
  const scope = useRef(null);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const position = (e) => {
    const rect = scope.current.getBoundingClientRect();

    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.left;

    setPosX(relX);
    setPosY(relY);
  };

  return (
    <div
      ref={scope}
      onMouseMove={position}
      className="absolute flex justify-center items-center space-x-10 mx-auto h-[720px] rounded-3xl bg-fuchsia-50 p-10"
    >
      <Card content={"inverted"} variant={"inverted"} X={posX} Y={posY} />
      <Card content={"normal"} variant={"normal"} X={posX} Y={posY} />
    </div>
  );
};

export default CardLayout;
