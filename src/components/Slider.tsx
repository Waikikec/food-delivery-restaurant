"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() =>
      setSlideIndex(prev =>
        (prev === data.length - 1 ? 0 : prev + 1)
      ), 10000);

    return () => clearInterval(interval);
  }, [])


  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] bg-fuchsia-50">

      {/* TEXT CONTAINER */}
      <div className="flex flex-1 items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[slideIndex].title}
        </h1>

        <button className="bg-red-500 text-white px-8 py-4">
          Order Now
        </button>
      </div>


      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[slideIndex].image}
          alt={""}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Slider