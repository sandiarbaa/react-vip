import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    descrption: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et,
    fugiat deserunt magnam incidunt facilis cupiditate qui perferendis
    illo odit, dicta, enim suscipit ad ab distinctio totam quos quam
    iusto!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/shoes-1.jpg",
    descrption: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Super",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    descrption: `Ini adalah sepatu super dari brand SarungMan.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ini akan memasukan sesuatu ke dalam state cart, setelah componentnya dibuat.
  useEffect(() => {
    // ini maksudnya dia itu jadi product default kalau component product page baru di mounting, lalu akan kembali ke componentDidMount untuk mengecek apakah ada perubahan dalama state cart(karena ini kan ngarahnya ke state cart), nah kalau ada perubahan, perubahan tersebut taro lagi atau render lagi, jadi itulah didMount di bawah ini
    // btw useEffet bisa buat componentDidMount dan componentDidUpdate yah, nah ini contoh componentDidMount nya ya.
    // karena sebelum componentDidMount kan ke constructor lalu ke render, setelah render baru ke componentDidMount ini, nah ternyata si useEffect ini memberikan nilai default untuk state cart, maka jadi deh pas pertama kalau di render component ProductPage ini langsung ada product nya, jadi tidak kosong (ini sewaktu-waktu kalau saya lupa, kenapa pas pertama website nya di render ko langsung ada default product nya, padahal belum di pilih productnya atau belum di jalankan event addToCart nya).
    setCart(JSON.parse(localStorage.getItem("cart")) || []); // ambil dari localStorage kalau tidak ada ya biarkan saja cart nya kosong
    // kalau ini untuk mengubah string yg di dapat dari localstorage menjadi JSON
  }, []);

  useEffect(() => {
    // karena kalau dilihat di cart nya itu isinya hanya id dan qty, nah untuk mendapatkan price nya itu harus di cari dulu di array products
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart)); // ini ubah JSOn ke string agar bisa disimpan ke localStorage, karena di local storage hanya bisa menyimpan string
    }
    // lalu ketika ada perubahan di cart nya, maka diubahlah total price nya dan juga ubah yg ada di database nya atau localStorage
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-14 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-9/12 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.descrption}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-3/12 -ml-12">
          <h1 className="text-xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="text-left text-xs table-auto border-separate border-spacing-x-5 -ml-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="my-5 flex justify-center">
        <Counter />
      </div> */}
    </Fragment>
  );
};

export default ProductPage;

// jadi commit kali ini intinya untuk melihat peng-implementasian hooks useEffect yg dimana ini merepresentasikan lifecycle component pada functional component pada react.
