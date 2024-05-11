import React from "react";

const Page = ({ children }) => {
  return (
    <div className="relative mx-auto p-52 h-screen flex items-center justify-center bg-teal-50">
      {children}
    </div>
  );
};

export default Page;
