"use client";
import { ProductOptionType } from "@/types.ts/types";
import { useEffect, useState } from "react";

interface PriceProps {
  id: number;
  price: number;
  options?: ProductOptionType[]
}

const Price = ({ id, price, options }: PriceProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(price);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(quantity * (options ? price + options[selectedOption].additionalPrice : price));
  }, [quantity, selectedOption, options, price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>

      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
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
            <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}            >
              {'>'}
            </button>
          </div>
        </div>

        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">Add to Cart</button>
      </div>

    </div>
  )
}

export default Price