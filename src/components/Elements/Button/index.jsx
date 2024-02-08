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
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => onClick()} //ini belum digunakan sebetulnya, jadi dihapus juga tidak apa
    >
      {children}
    </button>
  );
};

export default Button;
