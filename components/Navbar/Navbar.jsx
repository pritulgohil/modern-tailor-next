"use client";

import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
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
          <span class="relative flex h-3 w-3 items-center justify-center">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <div className="phone-number">
            <p>+91 79 2745 2952</p>
          </div>
        </div>
      </div>
      <div className="nav-container bg-slate-50 h-14 flex items-center justify-between px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black font-black text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Book Appointment
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
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
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-black  text-md bg-slate-50 rounded-none h-14 hover:bg-slate-200 hover:h-14`}
                >
                  Login / Signup
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
