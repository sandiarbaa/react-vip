import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here..."
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button
        classname={`bg-blue-600 w-full ${
          isDarkMode && "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
