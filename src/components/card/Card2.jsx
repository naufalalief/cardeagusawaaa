import React from "react";

const Card2 = () => {
  return (
    <div
      className="absolute rounded left-10"
      // onMouseMove={handlePosition}
      // onMouseLeave={handleLeave}
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
        a
      </div>
    </div>
  );
};

export default Card2;
