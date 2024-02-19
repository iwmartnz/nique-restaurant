import Logo from "@/components/Logo";
import { Heading, SubHeading } from "@/components/Heading";

export default function Home() {
  return (
    <main className="relative bg-[url('/bgHomePage.png')] min-h-screen w-full bg-cover bg-center top-0 flex flex-col items-center">
      <Logo />
      <Heading className=" pt-60 animate-fade-down">The pure taste of</Heading>
      <SubHeading className="text-6xl sm:text-8xl md:text-9xl lg:text-[160px] animate-fade-up">
        Thailand
      </SubHeading>
      <p className="text-center max-w-md text-brand-gray-dark px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </main>
  );
}
