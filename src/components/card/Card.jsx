import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [scope, animate] = useAnimate();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handlePosition = (e) => {
    const rect = scope.current.getBoundingClientRect();
    const parentRect = scope.current.parentElement.getBoundingClientRect();

    const relativeX = e.clientX - parentRect.left - rect.width / 2;
    const relativeY = e.clientY - parentRect.top - rect.height / 2;

    setPosX(relativeX);
    setPosY(relativeY);
  };

  useEffect(() => {
    const element = scope.current;
    const rect = element.getBoundingClientRect();

    const maxX = scope.current.parentElement.offsetWidth - rect.width;
    const maxY = scope.current.parentElement.offsetHeight - rect.height;

    animate("#target", {
      x: Math.max(0, Math.min(maxX, posX)),
      y: Math.max(0, Math.min(maxY, posY)),
    });
  }, [posX, posY]);

  return (
    <div className="absolute p-10" ref={scope}>
      <div
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        id="target"
        onMouseMove={handlePosition}
      >
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="/"
          className="inline-flex 
items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
