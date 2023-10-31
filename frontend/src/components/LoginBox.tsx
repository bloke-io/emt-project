"use client";

const LoginBox = () => {
  const handleLogin = () => {
    console.log("Implement login here");
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-2/4 w-2/4 bg-gray-600 rounded-3xl flex flex-col items-center p-4">
        <header className="text-white text-3xl font-semibold">Sign in</header>
        <div className="h-full w-full flex flex-col justify-center items-center p-4 gap-16">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-2/4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-200 w-full p-1.5"
              />
            </div>
            <div className="w-2/4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-200 w-full p-1.5"
              />
            </div>
          </div>
          <button
            onClick={() => handleLogin()}
            className="bg-green-300 rounded-xl p-4"
          >
            <label className="text-white font-bold text-xl">Log In</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
