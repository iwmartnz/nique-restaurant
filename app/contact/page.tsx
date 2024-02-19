import ContactForm from "@/components/ContactForm";
import { Heading, SubHeading } from "@/components/Heading";
import Logo from "@/components/Logo";

const ContactPage = () => {
  return (
    <main className="flex flex-col lg:flex-row max-h-screen">
      <div className="bg-[url('/bgContactPage.png')] relative bg-cover bg-center lg:bg-top min-h-[400px] justify-center lg:min-h-screen lg:w-3/6 flex flex-col items-center">
        <Logo className="absolute top-12 pt-0" />
        <Heading className="">Contact</Heading>
        <SubHeading>Get in Touch</SubHeading>
      </div>
      <div className="lg:w-3/6 lg:overflow-y-scroll p-6 pb-20 md:py-20 md:px-12">
        <p className="text-xl text-brand-gray-dark pb-10">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
