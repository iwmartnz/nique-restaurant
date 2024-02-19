import { Heading } from "@/components/Heading";
import Dish from "./Dish";
import Menubar from "./Menubar";

type MenuProps = {
  menu: {
    id: number;
    category: string;
    list: {
      id: number;
      name: string;
      regularPrice: string;
      discountedPrice?: string;
      ingredients?: string[];
      image: string;
    }[];
  }[];
};

const Menu = ({ menu }: MenuProps) => {
  return (
    <>
      <Menubar className="w-full justify-center z-50 pt-8 pb-16 via-brand-black lg:pb-16 sticky top-0 bg-gradient-to-b from-brand-black to-brand-black/0" />
      {menu.map((section) => (
        <div
          key={section.id}
          id={section.category.toLowerCase()}
          className="pl-4 md:pl-12 pb-20 scroll-mt-20 last:pb-40"
        >
          <Heading className="py-8 animate-fade">{section.category}</Heading>
          <ul className=" flex flex-col gap-4">
            {section.list.map((dish) => (
              <Dish key={dish.id} dish={dish} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Menu;
