import Image from "next/image";

const CartIcon = () => {
  return (
    <>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src={"/cart.png"} alt={""} fill sizes="100%" />
      </div>
      <span>Cart (3)</span>
    </>
  )
}

export default CartIcon