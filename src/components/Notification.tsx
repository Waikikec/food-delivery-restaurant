import Image from "next/image"

const Notification = () => {
  return (
    <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>
      Free delivery for all orders over $50. Order your food now!

      <div className="hidden md:flex md:absolute top-3 right-2 items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md lg:mr-20 xl:mr-40">
        <Image src={"/phone.png"} alt={""} width={20} height={20} />
        <span>+359 123 456 789</span>
      </div>
    </div>
  )
}

export default Notification