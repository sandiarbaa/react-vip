// Pembuatan Component menggunakan Arrow Function
const Button = (props) => {
  // ada parameter props (object) di setiap component di react, dan bisa diberi nilai default tiap key object nya, dengan destructuring
  const { children, classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
