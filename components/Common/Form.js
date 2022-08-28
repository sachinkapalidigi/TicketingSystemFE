const Form = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      {children}
    </form>
  );
};

export default Form;
