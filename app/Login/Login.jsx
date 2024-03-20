"use client";
import UserContext from "../context/userContext";
import { login } from "../services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    //valid data
    //login

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged In");
      //redirect
      context.setUser(result.user);
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <div className="p-6 border-2 border-gray-300 rounded-md w-96">
        <h1 className="block text-xl font-semibold text-center">Login</h1>
        <h3 className="block pt-4 text-lg font-semibold text-center">
          Welcome back to ECOMMERCE
        </h3>
        <p className="pt-3 text-sm text-center ">
          The next gen business marketplace
        </p>
        <form action="#!" onSubmit={loginFormSubmitted}>
          <div className="mt-3">
            <label htmlFor="user_email" className="block mb-1 text-base">
              Email
            </label>
            <input
              type="email"
              className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Email"
              id="user_email"
              name="user_email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="user_password" className="block mb-1 text-base">
              Password
            </label>
            <input
              type="password"
              className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter here"
              id="user_password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-1 text-white bg-black border-2 rounded-md hover:bg-black/90 "
            >
              <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-1 mt-3">
          <div>
            <p className="text-sm">Don’t have an Account?</p>
          </div>
          <div>
            <Link href="/Signup" className="font-semibold text-indigo-800">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
