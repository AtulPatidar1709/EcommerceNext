"use client";
import UserContext from "@/app/context/userContext";
import { logout } from "@/app/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <>
      <div className="px-8">
        <div className="flex justify-end">
          <ul className="flex gap-4 py-2 font-normal">
          {context.user && (
              <>
            <Link href="/">Help</Link>
            <Link href="/">Orders & Returns</Link>
            <Link href="/">Hi, {context.user.name}</Link>
              </>
            )}
            {!context.user && (
              <>
            <Link href="/Login">Login</Link>
            <Link href="/Signup">Signup</Link>
              </>
            )}
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
              {context.user && (
                <>
                  <Link href="/">Categories</Link>
                  <Link href="/">Sale</Link>
                  <Link href="/">Clearance</Link>
                  <Link href="/">New Stock</Link>
                  <Link href="/">Trending</Link>
                </>
              )}
            </ul>
          </div>
          <div className="flex gap-4">
          {context.user && (
            <>
            <Link href="/">
              <button onClick={doLogout}>Logout</button></Link>
            </>
          )}
            <Link href="/">
              <IoIosSearch className="w-8 h-8" />
            </Link>
            <Link href="/">
              <CiShoppingCart className="w-8 h-8" />
            </Link>
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
