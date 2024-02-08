import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
        {/* <p className="text-sm mt-5 text-center"> */}
        {/* Ternary | rendering */}
        {/* {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "} */}

        {/* Operator AND | rendering */}
        {/* {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )} */}

        {/* Operator AND | rendering */}
        {/* {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )} */}
        {/* </p> */}

        {/* Operator AND | rendering */}
        {/* ini pemisalan aja untuk logout, */}
        {/* {type === "logout" && (
            <Link to="/home" className="font-bold text-blue-600">
              Home
            </Link>
          )} */}
        {/* </p> */}

        {/*NOTE : Jadi kalau kondisi nya hanya 2 lebih baik gunakan ternary saja, kalau lebih dari 2 baru gunakan operator AND atau if else */}
      </div>
    </div>
  );
};

// Rendering menggunakan if else
// Dan juga kita bisa membuat component lain di dalam 1 file yg sama, jika tidak ingin membuat component baru di file lain, tetapi yg di export default hanya boleh 1 component saja.
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
