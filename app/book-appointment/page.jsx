"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import PageDescriptor from "@/components/PageDescriptor/PageDescriptor";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm/AppointmentForm";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login"); // Redirect to the login page if localStorage is empty
    }
  }, []);

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
