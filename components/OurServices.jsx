"use client";

import React from "react";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-zinc-50 px-8 flex flex-col items-center justify-center py-24">
      <div className="service-header">
        <h2 className="text-black font-medium text-5xl">Our Services</h2>
      </div>
      <div className="service-body">
        <div className="service-tagline mt-6 flex justify-center">
          <p className="text-black text-l text-center w-full sm:w-1/2">
            We believe that your clothing should be as unique as you are. Our
            services are designed to bring unparalleled craftsmanship, personal
            style, and a perfect fit to each client. Explore our expertly
            tailored services:
          </p>
        </div>
        <div className="service-grid-container mt-10 flex flex-col gap-8 items-center justify-center">
          <div className="first-row sm:h-80 flex flex-col items-center gap-8 max-w-7xl sm:flex-row">
            <div className="left-side w-full sm:w-9/12 border-solid border-black-100 border-2 rounded-xl h-full flex sm:flex-row flex-col gap-5 items-center p-8">
              <div className="service-image-container h-full">
                <Image
                  src="/Assets/custom-tailoring.jpg"
                  alt="Description of image"
                  width={350}
                  height={100}
                  className="h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="service-text-container w-full sm:w-9/12">
                <div className="service-heading">
                  <h3 className="text-black text-xl font-semibold">
                    Custom Tailoring
                  </h3>
                </div>
                <div className="service-description text-l mt-2">
                  <p className="text-black">
                    Our custom tailoring service provides a truly bespoke
                    experience. From suits to evening wear, each piece is made
                    to measure and handcrafted with meticulous attention to
                    detail. Choose from a wide array of premium fabrics,
                    linings, and finishes to create something that is
                    exclusively yours.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side w-full sm:w-3/12 border-solid border-black-100 border-2 rounded-xl h-full p-8 flex flex-col items-center justify-between">
              <div className="service-image-container h-4/5 w-full">
                <Image
                  src="/Assets/alterations.jpg"
                  alt="Description of image"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="service-text-container mt-5">
                <div className="service-heading">
                  <h3 className="text-black text-xl font-semibold text-center">
                    Alterations and Repairs
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row flex flex-col sm:flex-row w-full gap-8 max-w-7xl">
            <div className="service-card border-solid border-black-100 border-2 rounded-xl w-full sm:w-1/3 p-8 flex flex-col justify-between">
              <div className="service-image-container h-4/5 w-full">
                <Image
                  src="/Assets/personal-styling.jpg"
                  alt="Description of image"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="service-text-container mt-5">
                <div className="service-heading">
                  <h3 className="text-black text-xl font-semibold text-center">
                    Personal Styling
                  </h3>
                </div>
              </div>
            </div>
            <div className="service-card border-solid border-black-100 border-2 rounded-xl w-full sm:w-1/3 p-8 flex flex-col justify-between">
              <div className="service-image-container h-4/5 w-full">
                <Image
                  src="/Assets/business.jpg"
                  alt="Description of image"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="service-text-container mt-5">
                <div className="service-heading">
                  <h3 className="text-black text-xl font-semibold text-center">
                    Corporate and Group Services
                  </h3>
                </div>
              </div>
            </div>
            <div className="service-card border-solid border-black-100 border-2 rounded-xl w-full sm:w-1/3 p-8 flex flex-col justify-between">
              <div className="service-image-container h-4/5 w-full">
                <Image
                  src="/Assets/wedding.jpg"
                  alt="Description of image"
                  width={100}
                  height={100}
                  className="text-black h-full w-full object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="service-text-container mt-5">
                <div className="service-heading">
                  <h3 className="text-black text-xl font-semibold text-center">
                    Wedding Attire
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
