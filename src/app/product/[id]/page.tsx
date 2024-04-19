import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-12rem)] flex flex-col md:flex-row justify-around text-red-500 md:gap-8 md:items-center">

      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        {singleProduct.img &&
          <Image
            src={singleProduct.img}
            alt={""}
            fill
            sizes="100%"
            className="object-contain"
          />
        }
      </div>

      {/* TEXT CONTAINER */}
      <div className="flex flex-col gap-4 h-1/2 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p className="">{singleProduct.desc}</p>
        <Price
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        />
      </div>
    </div>
  )
}

export default SingleProductPage

export const singleProduct: ProductType = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};