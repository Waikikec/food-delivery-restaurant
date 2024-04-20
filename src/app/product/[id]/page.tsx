import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch product!");
  }

  return res.json();
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {

  const singleProduct: ProductType = await getData(params.id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-12rem)] flex flex-col md:flex-row justify-around text-red-500 md:gap-8 md:items-center relative">

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

        <Price product={singleProduct} />

      </div>

      <DeleteButton id={singleProduct.id} />
    </div>
  )
}

export default SingleProductPage