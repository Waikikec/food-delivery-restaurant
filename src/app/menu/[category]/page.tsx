import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to fetch products for category!");

  return res.json();
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {

  const productsPerCategory: ProductType[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {productsPerCategory.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
        >
          {/* IMAGE CONTAINER */}
          {item.img &&
            <div className="relative h-[80%]">
              <Image
                className="object-contain"
                src={item.img}
                alt={""}
                fill
                sizes="100%"
              />
            </div>
          }

          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden uppercase bg-red-500 text-white p-2 rounded-md group-hover:block">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage