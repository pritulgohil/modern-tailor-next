"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BespokeVideo from "@/components/BespokeVideo";
import OurServices from "@/components/OurServices";
import WorkGallery from "@/components/WorkGallery";
import AnimatedTestimonialsDemo from "@/components/Testimonials";
import VisitUs from "@/components/Visit";
import Footer from "@/components/Footer";

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
          <Link href="/book-appointment">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex gap-1 items-center">
              Book Appointment
            </button>
          </Link>
        </motion.div>
      </AuroraBackground>
      <BespokeVideo />
      <OurServices />
      <WorkGallery />
      <VisitUs />
      <AnimatedTestimonialsDemo />
      <Footer />
    </>
  );
};

export default AuroraBackgroundDemo;
