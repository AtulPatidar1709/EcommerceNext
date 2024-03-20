"use client";
import Link from "next/link";
import React, { useState } from "react";
import  {toast}  from "react-toastify";
import { signUp } from "../services/userService";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
    });

  const doSignup = async (event) => {
    event.preventDefault();

    console.log(event);
    console.log(data);
    if (data.name.trim() === "" || data.name == null) {
        toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }

    // form submit
    try {
      const result = await signUp(data);

      console.log(result);

      toast.success("User is registered !!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: ""
    });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast .error("Signup Error !! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <form className="p-6 border-2 border-gray-300 rounded-md w-96" onSubmit={doSignup}>
        <h1 className="block text-3xl font-semibold text-center">
          <i className="fa-solid fa-user"></i> Create your account
        </h1>
        <hr className="mt-3" />
        <div className="mt-6">
          <label htmlFor="user_name" className="block mb-2 text-base">
            Name
          </label>
          <input
            type="text"
            id="username"
            name="user_name"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Name"
            onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
              value={data.name}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="user_email" className="block mb-2 text-base">
            Email
          </label>
          <input
            type="email"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email"
            id="user_email"
                name="user_email"
                onChange={(event) => {
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="user_password" className="block mb-2 text-base">
            Password
          </label>
          <input
            type="password"
            className="w-full px-2 py-1 text-base border rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
            id="user_password"
                onChange={(event) => {
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full py-1 text-white bg-black border-2 rounded-md hover:bg-black/90 "
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;SignUp
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
