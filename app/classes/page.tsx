import React from "react";
import Image from "next/image";

import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";
import { classes } from "@/lib/data";

const ClassesPage = () => {
  return (
    <main className="">
      <Logo className="fixed top-8 inset-x-0 mx-auto max-w-max" />
      <ul className=" lg:flex lg:overflow-x-scroll scroll-smooth overscroll-contain">
        {classes.map((classItem) => (
          <li
            key={classItem.id}
            className="min-h-screen w-full relative lg:min-w-[560px] flex flex-col items-center justify-center text-center"
          >
            <Heading className="">{classItem.name}</Heading>
            <SubHeading className=" whitespace-pre-wrap">
              {classItem.category.replace(" ", "\n")}
            </SubHeading>
            <p className=" text-brand-white/50">{classItem.date}</p>
            <Image
              src={classItem.image}
              alt=""
              fill
              className="w-full -z-10 absolute h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ClassesPage;
