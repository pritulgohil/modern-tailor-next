// src/context/AppointmentsContext.js
"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useUser } from "@/context/UserContext";

const AppointmentsContext = createContext(null);

export const useAppointments = () => {
  return useContext(AppointmentsContext);
};

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const { user } = useUser();

  // Fetch appointments from the API
  const fetchAppointments = async () => {
    if (!user) return;

    try {
      const response = await fetch(`/api/appointments/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch appointments");
      }

      const data = await response.json();
      console.log(data);
      setAppointments(data.appointments);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  // Fetch appointments when the user changes
  useEffect(() => {
    fetchAppointments();
  }, [user]);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
