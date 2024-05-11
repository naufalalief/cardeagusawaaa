import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div className="absolute flex justify-center space-x-10 mx-auto bg-fuchsia-50 p-10">
      {children}
    </div>
  );
};

export default CardLayout;
