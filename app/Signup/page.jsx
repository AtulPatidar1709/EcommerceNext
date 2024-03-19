"use client"
import Link from "next/link";

export default function Signup() {

  const handleSignup = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <form className="p-6 border-2 border-gray-300 rounded-md w-96">
        <h1 className="block text-3xl font-semibold text-center">
          <i className="fa-solid fa-user"></i> Create your account
        </h1>
        <hr className="mt-3" />
        <div className="mt-6">
          <label for="username" className="block mb-2 text-base">
            Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Name"
          />
        </div>
        <div className="mt-3">
          <label for="email" className="block mb-2 text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email"
          />
        </div>
        <div className="mt-3">
          <label for="password" className="block mb-2 text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
          />
        </div>
        <div className="mt-5">
          <button
            onClick={handleSignup}
            type="submit"
            className="w-full py-1 text-white bg-black border-2 rounded-md hover:bg-black/90 "
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 mt-3">
          <div>
            <p className="text-sm">Have an Account?</p>
          </div>
          <div>
            <Link href="/Login" className="font-semibold text-indigo-800">
              LOGIN
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
