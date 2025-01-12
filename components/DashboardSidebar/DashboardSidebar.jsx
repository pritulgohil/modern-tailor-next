"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const DashboardSidebar = () => {
  const { setUser, setUserData, setLoginStatus } = useUser();
  const router = useRouter();
  const handleLogout = () => {
    setUser(null);
    setUserData(null);
    setLoginStatus(false);
    localStorage.clear();
    router.push("/");
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="sidebar-container bg-black w-80 p-4">
          <ul className="text-white font-bold text-xl mt-12 flex flex-col gap-6">
            <li>
              <Link href="/dashboard/appointment">Appointments</Link>
            </li>
            <li>
              <Link href="/measurements">Measurements</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
