import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";

const Navbar = () => {
  const user = true;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">

      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Pizzico</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center md:justify-end flex-1">

        <div className="flex md:absolute top-3 right-2 lg:static items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={"/phone.png"} alt={""} width={20} height={20} />
          <span>123 456 789</span>
        </div>

        {
          !user
            ? <Link href={"/"}>Login</Link>
            : <Link href={"/orders"}>Orders</Link>
        }

        <CartIcon />
      </div>

    </div>
  )
}

export default Navbar