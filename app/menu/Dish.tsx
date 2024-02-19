import Image from "next/image";

type DishProps = {
  dish: {
    id: number;
    name: string;
    regularPrice: string;
    discountedPrice?: string;
    ingredients?: string[];
    image: string;
  };
};

const Dish = ({ dish }: DishProps) => {
  return (
    <li className="flex gap-4 items-center">
      <figure className="relative rounded-xl min-w-20 h-[72px] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          width={90}
          height={72}
          className=""
          priority
        />
      </figure>
      <div>
        <div className=" flex justify-between items-center">
          <h3 className=" text-lg">{dish.name}</h3>
          {dish.discountedPrice ? (
            <p>
              <span className=" text-brand-gray-dark line-through">{`$ ${dish.regularPrice}`}</span>
              {` $ ${dish.discountedPrice}`}
            </p>
          ) : (
            <p>{`$ ${dish.regularPrice}`}</p>
          )}
        </div>
        <ul className=" flex gap-2 flex-wrap basis-0">
          {dish.ingredients?.map((ingredient, i) => (
            <li key={i} className=" text-brand-gray-dark text-sm">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Dish;
