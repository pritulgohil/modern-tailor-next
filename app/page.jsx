"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BespokeVideo from "@/components/BespokeVideo";
import OurServices from "@/components/OurServices";
import WorkGallery from "@/components/WorkGallery";
import AnimatedTestimonialsDemo from "@/components/Testimonials";
import VisitUs from "@/components/Visit";

const AuroraBackgroundDemo = () => {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="flex items-center justify-center company-logo w-60">
            <Image
              src="/Assets/modern-logo-black.png"
              alt="Logo"
              width={300}
              height={250}
            />
          </div>
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            A Bespoke Experience Beyond Expectations.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Crafting Timeless Elegance, One Stitch at a Time.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex gap-1 items-center">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </motion.div>
      </AuroraBackground>
      <BespokeVideo />
      <OurServices />
      <WorkGallery />
      <VisitUs />
      <AnimatedTestimonialsDemo />
    </>
  );
};

export default AuroraBackgroundDemo;
