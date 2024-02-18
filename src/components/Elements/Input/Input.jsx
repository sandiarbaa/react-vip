import { forwardRef } from "react";

// harus menggunakan forwardRef, dan ref nya di masukan ke forwardRef bukan props
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, id } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={id}
      ref={ref}
    />
  );
});

export default Input;
