"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useUser } from "@/context/UserContext";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { user, setUser, userData, setUserData, setLoginStatus, loginStatus } =
    useUser();

  if (user) {
    setLoginStatus(true);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("userId");
      setUser(userId);
    }
  }, []);
  console.log("Login Status", loginStatus);
  console.log("User", user);

  const fetchUserData = async () => {
    if (user) {
      try {
        const response = await fetch(`/api/users/${user}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data.firstname);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (err) {
        console.error("An error occurred while fetching user data", err);
      }
    }
  };

  fetchUserData();

  return (
    <>
      <div className="top-navbar bg-black h-24 flex items-center justify-between p-4">
        <div className="brand-logo mr-8">
          <Image
            src="/Assets/modern-logo-white.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="call-box text-white border border-slate-50 py-2 px-4 rounded-3xl flex items-center gap-2 cursor-pointer">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <div className="phone-number">
            <p>+91 79 2745 2952</p>
          </div>
        </div>
      </div>
      <div className="nav-container bg-slate-50 h-16 flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black font-black text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/book-appointment" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/book-appointment"
                      ? "h-14 text-md bg-slate-50 underline underline-offset-8 decoration-4 decoration-yellow-400 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                      : "h-14 text-md bg-slate-50 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                  }`}
                >
                  Book Appointment
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/"
                      ? "h-14 text-md bg-slate-50 underline underline-offset-8 decoration-4 decoration-yellow-400 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                      : "h-14 text-md bg-slate-50 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                  }`}
                >
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Store
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Accessories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            {loginStatus ? (
              <NavigationMenuItem className="cursor-pointer">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/dashboard"
                      ? "h-14 text-md bg-slate-50 underline underline-offset-8 decoration-4 decoration-yellow-400 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                      : "h-14 text-md bg-slate-50 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                  }`}
                >
                  {userData ? (
                    <>{userData}'s Dashboard</>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="h-5 w-5 text-black animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname === "/login" || pathname === "/signup"
                        ? "h-14 text-md bg-slate-50 underline underline-offset-8 decoration-4 decoration-yellow-400 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                        : "h-14 text-md bg-slate-50 rounded-none h-16 hover:bg-slate-200 hover:h-16"
                    }`}
                  >
                    Login / Signup
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
