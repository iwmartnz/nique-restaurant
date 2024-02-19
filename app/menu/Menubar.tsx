import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type MenuBarProps = {
  className?: string;
};
const menuCategories = [
  { id: 1, route: "#starters", name: "Starters" },
  { id: 2, route: "#breakfast", name: "Breakfast" },
  { id: 3, route: "#dinner", name: "Dinner" },
  { id: 4, route: "#drinks", name: "Drinks" },
];

const Menubar = ({ className }: MenuBarProps) => {
  return (
    <nav className={twMerge("flex items-center gap-4", className)}>
      {menuCategories.map((category) => (
        <Link key={category.id} href={category.route}>
          {category.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menubar;
