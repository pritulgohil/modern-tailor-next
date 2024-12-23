import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import PageDescriptor from "@/components/PageDescriptor/PageDescriptor";
import React from "react";
import Login from "@/components/Login/Login";
const page = () => {
  return (
    <>
      <Navbar />
      <PageDescriptor
        imageUrl={"/Assets/login.jpg"}
        headingText={"Login"}
        altText={"modern-tailor-and-cloth-appointment"}
      />
      <Login />
      <Footer />
    </>
  );
};

export default page;
