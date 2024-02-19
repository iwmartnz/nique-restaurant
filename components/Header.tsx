"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { ClockIcon, MenuIcon, ArrowRightIcon } from "./Icons";

const links = [
  { id: 1, label: "Menu", route: "/menu" },
  { id: 2, label: "Restaurant", route: "/restaurant" },
  { id: 3, label: "Classes", route: "/classes" },
  { id: 4, label: "Contact", route: "/contact" },
];

const Header = () => {
  const activeRoute = usePathname();
  return (
    <header className=" fixed bottom-6 z-50 w-full pointer-events-none">
      <nav className=" bg-brand-white rounded-full pointer-events-auto gap-2 md:gap-0 flex items-center p-2 text-brand-black w-fit mx-auto">
        <MobileNav />
        <HoursTooltip />
        <ul className="hidden md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.route}
                className={twMerge(
                  "px-4 py-3 rounded-full text-sm flex items-center font-medium",
                  activeRoute == link.route && " bg-brand-gray-light "
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/booking"
          className="px-4 py-3 rounded-full flex items-center text-sm bg-brand-black text-brand-white"
        >
          BOOK A TABLE
        </Link>
      </nav>
    </header>
  );
};

export default Header;

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" md:hidden" asChild>
        <Button variant="ghost" size="icon" className=" rounded-xl">
          <MenuIcon size="20" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mb-2 rounded-xl z-50">
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        {links.map((link) => (
          <div key={link.id}>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={link.route}
                className=" font-medium flex w-full gap-4 justify-between items-center"
              >
                {link.label} <ArrowRightIcon size="16" />
              </Link>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HoursTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="">
            <ClockIcon size="20" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className=" mb-2 p-3 rounded-xl">
          <h3 className=" text-xl font-medium pb-3">Opening Hours</h3>
          <ul className=" flex flex-col gap-2">
            <li className="text-base font-medium gap-12 w-full flex items-center justify-between">
              Mon <span className=" font-light">Closed</span>
            </li>
            <li className="text-base font-medium gap-12 w-full flex items-center justify-between">
              Tue - Fri <span className=" font-light">4pm - 8pm</span>
            </li>
            <li className="text-base font-medium gap-12 w-full flex items-center justify-between">
              Sat - Sun <span className=" font-light">5pm - 11pm</span>
            </li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
