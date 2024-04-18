import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src={"/cart.png"} alt={""} fill sizes="100%" />
      </div>
      <Link href={'/cart'}>Cart (3)</Link>
    </>
  )
}

export default CartIcon