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
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [loaderForAppointments, setLoaderForAppointments] = useState(true);
  const [loaderForAppointmentCard, setLoaderForAppointmentCard] =
    useState(true);
  const { user } = useUser();

  // Fetch appointments from the API
  const fetchAppointments = async () => {
    if (!user) return;
    setLoaderForAppointments(true);
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
      setAppointments(data.appointments);
      setLoaderForAppointments(false);
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
    <AppointmentsContext.Provider
      value={{
        appointments,
        addAppointment,
        currentAppointment,
        setCurrentAppointment,
        loaderForAppointments,
        loaderForAppointmentCard,
        setLoaderForAppointmentCard,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
