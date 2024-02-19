import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

const bitterRoseFont = localFont({
  src: "../assets/Bitter-Rose.woff2",
  display: "swap",
});

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        bitterRoseFont.className,
        " text-brand-accent text-5xl md:text-6xl lg:text-[80px] animate-fade-down",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        "text-5xl font-medium md:text-6xl lg:text-7xl animate-fade-up",
        className
      )}
    >
      {children}
    </h1>
  );
};
