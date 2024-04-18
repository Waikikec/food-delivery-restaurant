import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import UserLinks from "./UserLinks";

const Navbar = () => {


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

        <UserLinks />

        <CartIcon />

      </div>

    </div>
  )
}

export default Navbar