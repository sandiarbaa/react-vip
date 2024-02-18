import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

// harus menggunakan forwardRef, dan ref nya di masukan ke forwardRef bukan props
const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
