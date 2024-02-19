import Image from "next/image";

import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";
import bg1 from "../../public/restaurantbg1.png";
import bg2 from "../../public/restaurantbg2.png";
import bg3 from "../../public/restaurantbg3.png";
import bg4 from "../../public/bgContactPage.png";
import bg5 from "../../public/bgMenuPage.png";
import bg6 from "../../public/restaurantbg4.png";
import bg7 from "../../public/bgHomePage.png";

const images = [
  { id: 1, src: bg1 },
  { id: 2, src: bg2 },
  { id: 3, src: bg3 },
  { id: 4, src: bg4 },
  { id: 5, src: bg5 },
  { id: 6, src: bg6 },
  { id: 7, src: bg7 },
];

const RestaurantPage = () => {
  return (
    <main className="min-h-screen w-full relative">
      <Logo className=" z-50" />
      <div className="z-50 fixed w-full h-full flex flex-col pointer-events-none items-center justify-center">
        <Heading className="animate-fade-down">Discover</Heading>
        <SubHeading className="animate-fade-up text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
          nique.
        </SubHeading>
      </div>

      <ul className="flex flex-col relative min-h-screen w-full lg:overflow-x-scroll lg:flex-row">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt=""
            priority
            className=" min-w-full h-auto object-contain lg:h-screen lg:w-fit lg:min-w-fit "
          />
        ))}
      </ul>
    </main>
  );
};

export default RestaurantPage;
