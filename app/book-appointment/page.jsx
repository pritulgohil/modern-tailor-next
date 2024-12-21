import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import PageDescriptor from "@/components/PageDescriptor/PageDescriptor";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <PageDescriptor />
      <Footer />
    </>
  );
};

export default page;
