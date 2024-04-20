"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface PriceProps {
  product: ProductType;
}

const Price = ({ product }: PriceProps) => {

  const { id, price, title, desc, img, options } = product;

  const [totalPrice, setTotalPrice] = useState<number>(price);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      img,
      price: totalPrice,
      optionTitle: options && options[selectedOption].title,
      quantity
    });

    toast.success('The products is added to cart!');
  }

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])

  useEffect(() => {
    if (product.options?.length) {
      setTotalPrice(quantity * price + product.options[selectedOption].additionalPrice)
    }
  }, [price, product.options, quantity, selectedOption])


  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice}</h2>

      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.length && options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md"
            style={{
              background: selectedOption === index ? "rgb(248 113 113)" : "white",
              color: selectedOption === index ? "white" : "red"
            }}
            onClick={() => setSelectedOption(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY CONTAINER */}
      <div className="flex justify-between items-center">

        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity:</span>
          <div className="flex gap-4 items-center">
            <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>
              {'<'}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>
              {'>'}
            </button>
          </div>
        </div>

        <button
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default Price