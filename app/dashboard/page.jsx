import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import DashboardCards from "@/components/DashboardCards/DashboardCards";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="page-container flex">
        <DashboardSidebar />
        <div className="page-content-container p-12 w-full">
          <div className="page-header flex justify-between w-full">
            <h2 className="font-black text-3xl">Dashboard</h2>
          </div>
          <div className="dashboard-card-container mt-10">
            <DashboardCards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
