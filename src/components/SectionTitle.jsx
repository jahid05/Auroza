import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="md:py-10 py-6 flex justify-center items-center">
      <p className="h-1 w-14 mx-5 bg-theme-1"></p>
      <h1 className="text-center md:text-4xl text-2xl font-bold">{title}</h1>
      <p className="h-1 w-14 mx-5 bg-theme-1"></p>
    </div>
  );
};

export default SectionTitle;
