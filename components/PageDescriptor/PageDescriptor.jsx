import React from "react";
import Image from "next/image";

const PageDescriptor = () => {
  return (
    <div className="page-descriptor-container relative">
      <Image
        src="/Assets/book-appointment.jpg"
        alt="Logo"
        width={700}
        height={500}
        className="w-full h-60 object-cover opacity-50"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">
        Book Appointment
      </h1>
    </div>
  );
};

export default PageDescriptor;
