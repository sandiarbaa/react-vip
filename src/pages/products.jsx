import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

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
  // NOTE_1 : ini membuat state cart, jadi jika membuat state dengan useState, itu statenya bisa di isi apa saja, di contohnya di isi dengan array of object, dan object nya baru ada 1.
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  // jadi untuk fungsi add to cart nya itu kita butuh buat event nya di sini lalu kirim ke childnya yaitu component button
  const handleAddToCart = (id) => {
    // ini jika di cart ada item yang sama dengan product yg d products maka kita set cart nya dengan ini...
    if (cart.find((item) => item.id === id)) {
      // set cart nya disamakan dulu id product di cart  dengan id product yg sama (jujur saya jg ini masih belum paham karena ini ambigu, kan tadi sudah di cek ya kalau id yg di cart sama dengan id yg di product id, kenapa di cek lagi di cart ini?hehe).
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // kalau item nya belum ada maka tambahkan ke cart nya, atau buat objek baru dengan key "id: id" (atau kalau key dari object sama value nya sama cukup tulis aja id) dari product id yg di event handle add to cart, lalu buat juga key "qty: 1"
      setCart([...cart, { id, qty: 1 }]);
    }
    // jadi semua data di cart sebelumnya itu dimasukan lagi ke cart yg akan di ubah.
    // setCart([
    //   // menggunakan spread operator, membawa data cart sebelumnya, lalu di tambah dengan data cart yg baru sesuai id product.
    //   ...cart,
    //   {
    //     id,
    //     qty: 1,
    //   },
    // ]);
    // alur nya gini: kan ada banyak card product, dan masing2-nya mempunyai product id sendiri dan juga pasti ada button add to cart nya sendiri kan tiap card product, nah kita pake product id itu, jadi ketika salah satu button add to cart nya di klik maka akan mengirim id product yg sesuai(ini mengirim nya dari component cardProduct ya event nya di sana). Dan id itu di pakai untuk menampilkan data ke cart, jadi data yang di kirim ke cart itu id productnya dan tampilkan itu.
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
          {/* Lanjutan NOTE_1 : dan di sini mencoba menampilkankan isi dari state cart, yang dimana state cart ini adalah array of object, dan baru ada 1 object. */}
          {/* <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul> */}
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
                // buat variabel product lalu ambil product id dari variabel products di atas halaman ini lalu cari berdasarkan kesamaan id nya (item.id itu adalah id di dalam cart nya ya).
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
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
