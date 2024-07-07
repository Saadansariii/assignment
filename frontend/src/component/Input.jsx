const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className="focus:outline-none border px-2 text-sm py-1 rounded-lg"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
