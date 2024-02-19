import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div
      className={twMerge("fixed inset-x-0 mx-auto pt-12 max-w-max", className)}
    >
      <Link href="/" className="animate-fade">
        <Image src={logo} alt="Nique Restaurant" width={100} height={30} />
      </Link>
    </div>
  );
};

export default Logo;
