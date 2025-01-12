"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import PageDescriptor from "@/components/PageDescriptor/PageDescriptor";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm/AppointmentForm";

const Page = () => {
  return (
    <>
      <Navbar />
      <PageDescriptor
        imageUrl={"/Assets/book-appointment.jpg"}
        headingText={"Book Appointment"}
        altText={"modern-tailor-and-cloth-appointment"}
      />
      <AppointmentForm />

      <Footer />
    </>
  );
};

export default Page;
