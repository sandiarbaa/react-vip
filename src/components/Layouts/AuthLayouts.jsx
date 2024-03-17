import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <button
        className={`absolute right-2 top-2 bg-blue-600 p-2 text-white rounded font-semibold ${
          isDarkMode ? "hover:bg-blue-700" : "hover:bg-blue-500"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
      <div className="w-full max-w-xs">
        <h1
          className={`text-3xl font-bold mb-2 text-blue-600 ${
            isDarkMode && "text-blue-500"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium text-slate-500 mb-8 ${
            isDarkMode && "text-white"
          }`}
        >
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const { isDarkMode } = useContext(DarkMode);
  if (type === "login") {
    return (
      <p className={`ext-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Don't have an account?{" "}
        <Link
          to="/register"
          className={`font-bold text-blue-600 ${isDarkMode && "text-blue-500"}`}
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Already have an account?{" "}
        <Link
          to="/login"
          className={`font-bold text-blue-600 ${isDarkMode && "text-blue-500"}`}
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
