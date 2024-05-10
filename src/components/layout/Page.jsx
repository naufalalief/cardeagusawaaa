import React from "react";

const Page = ({ children }) => {
  return (
    <div className="relative w-32 mx-auto my-52 p-52 h-72 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Page;
