"use client";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AppointmentForm from "@/components/AppointmentForm/AppointmentForm";
import AppointmentCards from "@/components/AppointmentCards/AppointmentCards";
import AppointmentTable from "@/components/AppointmentTable/AppointmentTable";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="page-container flex">
        <DashboardSidebar />
        <div className="page-content-container p-12 w-full">
          <div className="page-header flex justify-between w-full">
            <h2 className="font-black text-3xl">Appointments</h2>
            <AppointmentForm />
          </div>
          <div className="appointment-card-container mt-10">
            <AppointmentCards />
          </div>
          <div className="appointment-table mt-10">
            <AppointmentTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
