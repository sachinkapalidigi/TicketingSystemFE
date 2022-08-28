const InputEmail = ({ value, onChange }) => {
  return (
    <div id="input" className="flex flex-col w-full my-5">
      <label htmlFor="email" className="text-gray-500 mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        placeholder="Please insert your email"
        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
      />
    </div>
  );
};

export default InputEmail;
