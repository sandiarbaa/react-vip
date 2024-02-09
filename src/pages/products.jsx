import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    descrption: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et,
    fugiat deserunt magnam incidunt facilis cupiditate qui perferendis
    illo odit, dicta, enim suscipit ad ab distinctio totam quos quam
    iusto!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    descrption: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Super",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    descrption: `Ini adalah sepatu super dari brand SarungMan.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.descrption}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center">
        <Counter />
      </div>
    </Fragment>
  );
};

export default ProductPage;
