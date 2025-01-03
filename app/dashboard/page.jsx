import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <DashboardSidebar />
      <Footer />
    </>
  );
};

export default page;
