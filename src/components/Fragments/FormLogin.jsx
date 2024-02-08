import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  // ini cara menghandle suatu event yang di mana kita mendefinisikan sebuah event di parent componentnya, lalu mengirimkannya ke childnya, yaitu di component button.
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login");
  };
  // NOTE: diatas itu adalah sebuah function yang kita buat sendiri di dalam component ini. lalu di kirim ke childnya, yaitu ketika form nya di submit, jadi penulisan sintaks nya cukup nama functionnya saja, tidak pake embel-embel yg lain, seperti misal tambahkan ().
  return (
    // pemanggilan handleLogin di sini tidak perlu menggunakan (), karena ini event nya onSubmit, soalnya kalau langsung pakai (), maka akan langsung error
    <form onSubmit={handleLogin}>
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
      {/* kirim props type submit ke button, karena elemennya form jadi type button nya harus submit */}
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
