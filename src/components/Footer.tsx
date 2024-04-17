import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex gap-4 items-center justify-between">
      <Link href={"/"} className="font-bold text-xl">Pizzico</Link>
      <p>&#169; ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer