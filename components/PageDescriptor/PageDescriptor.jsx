import React from "react";
import Image from "next/image";

const PageDescriptor = ({ imageUrl, altText, headingText }) => {
  return (
    <div className="page-descriptor-container relative">
      <Image
        src={imageUrl}
        alt={altText}
        width={1200}
        height={1000}
        className="w-full h-60 object-cover opacity-50"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">
        {headingText}
      </h1>
    </div>
  );
};

export default PageDescriptor;
