import { MenuType } from "@/types.ts/types";
import Link from "next/link";

const MenuPage = () => {

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-12rem)] flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2`}>

            <h1 className="uppercase font-bold text-xl md:text-3xl">
              {item.title}
            </h1>

            <p className="text-sm my-2 sm:my-8">
              {item.desc}
            </p>

            <button className={`bg-${item.color} text-${item.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>
              Explore
            </button>

          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage

const menu: MenuType[] = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];