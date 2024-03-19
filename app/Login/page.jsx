import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <div className="p-6 border-2 border-gray-300 rounded-md w-96">
        <h1 className="block text-xl font-semibold text-center">
           Login
        </h1>
        <h3 className="block pt-4 text-lg font-semibold text-center">Welcome back to ECOMMERCE</h3>
        <p className="pt-3 text-sm text-center ">The next gen business marketplace</p>
        <div className="mt-3">
          <label for="email" className="block mb-1 text-base">
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
          <label for="password" className="block mb-1 text-base">
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
            type="submit"
            className="w-full py-1 text-white bg-black border-2 rounded-md hover:bg-black/90 "
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 mt-3">
          <div>
            <p className="text-sm">Don’t have an Account?</p>
          </div>
          <div>
            <Link href="/Singup" className="font-semibold text-indigo-800">
               Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
