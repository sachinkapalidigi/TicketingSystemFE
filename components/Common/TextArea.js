const TextArea = ({ label, id, placeholder, value, onChange }) => {
  return (
    <div id="input" className="flex flex-col w-full my-5">
      <label htmlFor="name" className="text-gray-500 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
        id={id}
      ></textarea>
    </div>
  );
};

export default TextArea;
