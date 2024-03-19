import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";


export default function Header() {
  return (
    <>
      <div className="px-8">
        <div className="flex justify-end">
          <ul className="flex gap-4 py-2 font-normal">
            <Link href="/">Help</Link>
            <Link href="/">Orders & Returns</Link>
            <Link href="/">Hi, Atul</Link>
          </ul>
        </div>
        <div className="flex items-center justify-between pt-2 pb-4">
          <div>
            <h1 className="text-3xl font-extrabold">
              <Link href="/">ECOMMERCE</Link>
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 font-bold">
              <Link href="/">Categories</Link>
              <Link href="/">Sale</Link>
              <Link href="/">Clearance</Link>
              <Link href="/">New Stock</Link>
              <Link href="/">Trending</Link>
            </ul>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <IoIosSearch className="w-8 h-8" />
            </Link>
            <Link href="/"><CiShoppingCart className="w-8 h-8"  /></Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4]">
        <div className="flex items-center justify-center gap-4 py-1">
          <FaAngleLeft />
          <p>Get 10% off on business sign up</p>
          <FaAngleRight />
        </div>
      </div>
    </>
  );
}
