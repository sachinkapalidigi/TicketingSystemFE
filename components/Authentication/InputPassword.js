import React from "react";

const InputPassword = () => {
  return (
    <div id="input" className="flex flex-col w-full my-5">
      <label htmlFor="password" className="text-gray-500 mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Please insert your password"
        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
      />
    </div>
  );
};

export default InputPassword;
