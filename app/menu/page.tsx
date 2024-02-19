import React from "react";
import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";
import { menu } from "@/lib/data";
import Menu from "./Menu";

const MenuPage = () => {
  return (
    <main className="flex flex-col lg:flex-row max-h-screen">
      <div className="bg-[url('/bgMenuPage.png')] relative bg-cover bg-bottom min-h-[400px] lg:min-h-screen lg:w-3/6 flex flex-col items-center justify-center">
        <Logo className="absolute top-12 pt-0" />
        <Heading className="">Check Out</Heading>
        <SubHeading>Our Menus</SubHeading>
      </div>
      <div className="lg:w-3/6 lg:overflow-y-scroll">
        <Menu menu={menu} />
      </div>
    </main>
  );
};

export default MenuPage;
