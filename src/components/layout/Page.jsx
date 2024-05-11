import React from "react";

const Page = ({ children }) => {
  return (
    <div className="relative mx-auto my-52 p-52 h-72 flex items-center justify-center bg-teal-50">
      {children}
    </div>
  );
};

export default Page;
