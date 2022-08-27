const AuthBody = ({ children }) => {
  return (
    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
      <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthBody;
