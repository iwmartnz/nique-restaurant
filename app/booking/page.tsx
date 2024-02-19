import BookingForm from "@/components/BookingForm";
import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";
import { menu } from "@/lib/data";
import React from "react";

const BookingPage = () => {
  return (
    <main className="flex flex-col lg:flex-row max-h-screen">
      <div className="bg-[url('/bgBookingPage.png')] relative bg-cover bg-bottom min-h-[400px] justify-center lg:min-h-screen lg:w-3/6 flex flex-col items-center">
        <Logo className="absolute top-12 pt-0" />
        <Heading className="">Book a table</Heading>
        <SubHeading>Reservation</SubHeading>
      </div>
      <div className="lg:w-3/6 lg:overflow-y-scroll p-4 pb-20 md:py-20 md:px-12">
        <SubHeading className="text-2xl md:text-3xl lg:text-4xl pt-4 pb-4">
          Book a table
        </SubHeading>
        <p className="text-lg text-brand-gray-dark pb-4">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>
        <BookingForm />
      </div>
    </main>
  );
};

export default BookingPage;
