import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";

const images = [
  { id: 1, src: "/restaurantbg1.png" },
  { id: 2, src: "/restaurantbg2.png" },
  { id: 3, src: "/restaurantbg3.png" },
  { id: 4, src: "/bgContactPage.png" },
  { id: 5, src: "/bgMenuPage.png" },
  { id: 6, src: "/restaurantbg4.png" },
  { id: 7, src: "/bgHomePage.png" },
];

const RestaurantPage = () => {
  return (
    <main className="min-h-screen w-full relative">
      <Logo />
      <div className="z-50 fixed w-full h-full flex flex-col pointer-events-none items-center justify-center">
        <Heading className="animate-fade-down">Discover</Heading>
        <SubHeading className="animate-fade-up text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
          nique.
        </SubHeading>
      </div>

      <ul className="flex w-full h-full">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt=""
            className="h-screen object-contain min-w-max"
          />
        ))}
      </ul>
    </main>
  );
};

export default RestaurantPage;
