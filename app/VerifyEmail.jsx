export default function VerifyEmail() {
  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <div className="p-6 border-2 border-gray-300 rounded-2xl w-96">
        <div className="w-[90]">
          <h1 className="block text-xl font-semibold text-center">
            Verify your email
          </h1>
          <p className="flex justify-center pt-4">
            Enter the 8 digit code you have received on
          </p>
          <p className="flex justify-center">Exa***gmail.com</p>
          <div className="pt-6">
            <p className="text-sm font-medium">Code</p>
            <div className="flex justify-start gap-2 pt-1 align-top">
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
              <input
                type="text"
                maxLength={1}
                className="w-8 h-8 border-2 border-gray-400 rounded-md "
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-2 text-sm font-light text-white bg-black border-2 rounded-md hover:bg-black/90 "
            >VERIFY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
