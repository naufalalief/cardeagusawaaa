import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

//tambahono movementDirections bee kepengen gae siji tok terus uncomment en kode seng let offset
//lek seng const offset gae default (gaatek movementDirections)
const Card = ({ content, variant, X, Y }) => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  // const handlePosition = (e) => {
  //   const rect = scope.current.getBoundingClientRect();
  //   const parentRect = scope.current.getBoundingClientRect();
  //   const movedistance = 10;
  //   const relativeX = e.clientX - parentRect.left - rect.width / 2;
  //   const relativeY = e.clientY - parentRect.top - rect.width / 2;

  //   let offsetX, offsetY;

  //   // if (movementDirections === "horizontal") {
  //   //   if (relativeX > 0) {
  //   //     offsetX = Math.min(relativeX, -movedistance);
  //   //   } else if (relativeX < 0) {
  //   //     offsetX = Math.max(relativeX, movedistance);
  //   //   }
  //   // } else if (movementDirections === "vertical") {
  //   //   if (relativeY > 0) {
  //   //     offsetY = Math.min(relativeY, -movedistance);
  //   //   } else if (relativeY < 0) {
  //   //     offsetY = Math.max(relativeY, movedistance);
  //   //   }
  //   // }

  //   if (variant === "normal") {
  //     offsetX =
  //       relativeX > 0
  //         ? Math.min(relativeX, -movedistance)
  //         : Math.max(relativeX, movedistance);

  //     offsetY =
  //       relativeY > 0
  //         ? Math.min(relativeY, -movedistance)
  //         : Math.max(relativeY, movedistance);
  //   } else if (variant === "inverted") {
  //     offsetX =
  //       relativeX < 0
  //         ? Math.max(relativeX, -movedistance)
  //         : Math.min(relativeX, movedistance);

  //     offsetY =
  //       relativeY < 0
  //         ? Math.max(relativeY, -movedistance)
  //         : Math.min(relativeY, movedistance);
  //   }

  //   // const offsetX =
  //   //   relativeX > 0
  //   //     ? Math.min(relativeX, -movedistance)
  //   //     : Math.max(relativeX, movedistance);

  //   // const offsetY =
  //   //   relativeY > 0
  //   //     ? Math.min(relativeY, -movedistance)
  //   //     : Math.max(relativeY, movedistance);

  //   setPosX(offsetX);
  //   setPosY(offsetY);
  // };

  // const handleLeave = () => {
  //   setPosX((prevPosX) => (prevPosX !== undefined ? 0 : prevPosX));
  //   setPosY((prevPosY) => (prevPosY !== undefined ? 0 : prevPosY));
  // };

  const calculated = () => {
    let offsetX, offsetY;
    const movedistance = 10;
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
    calculated();
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
  }, [X, Y, variant]);

  return (
    <div
      //iki absolute e tak pindah nak cardlayout soale 2 card
      className="bg-rose-50 rounded p-10"
      ref={scope}
      // onMouseMove={handlePosition}
      // onMouseLeave={handleLeave}
    >
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
