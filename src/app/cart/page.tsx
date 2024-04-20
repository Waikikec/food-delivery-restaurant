"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import { useEffect } from "react";

const CartPage = () => {

  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])

  return (
    <div className="h-[calc(100vh-9rem)] md:h-[calc(100vh-12rem)] flex flex-col lg:flex-row text-red-500">

      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">

        {/* SINGLE ITEM */}
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between mb-4">
            {product.img &&
              <Image
                width={100}
                height={100}
                src={"/temporary/p1.png"}
                alt={""}
              />
            }
            <div className="">
              <h1 className="uppercase text-xl font-bold">{product.title}</h1>
              <span>{product.optionTitle} x {totalItems}</span>
            </div>
            <h2 className="font-bold">${product.price}</h2>
            <span className="cursor-pointer" onClick={() => removeFromCart(product)}>X</span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">

        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">Free</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <span className="">Total (incl. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>

        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>

      </div>

    </div>
  )
}

export default CartPage