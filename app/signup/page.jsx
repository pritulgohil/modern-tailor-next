import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PageDescriptor from "@/components/PageDescriptor/PageDescriptor";
import Signup from "@/components/Signup/Signup";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PageDescriptor
        imageUrl={"/Assets/login.jpg"}
        headingText={"Signup"}
        altText={"modern-tailor-and-cloth-appointment"}
      />
      <Signup />
      <Footer />
    </>
  );
};

export default page;
