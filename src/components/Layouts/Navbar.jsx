import React, { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between h-14 bg-blue-600 text-white items-center px-10">
      <div className="-ml-6">
        <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5 text-sm px-5">
          Item : {totalCart} | Price : $ {total}
        </div>
      </div>
      <div className="-mr-2">
        <span className="mr-5 font-semibold">{username}</span>
        <Button
          className={`bg-black px-10 mx-5 text-white rounded ${
            isDarkMode ? "hover:bg-blue-700" : "hover:bg-blue-500"
          }`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
