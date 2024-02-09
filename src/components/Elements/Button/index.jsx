// Pembuatan Component menggunakan Arrow Function
const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-9 px-4 font-semibold rounded-md ${classname} text-white text-sm`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
