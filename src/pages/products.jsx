import CardProduct from "../components/Fragments/CardProduct";

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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.descrption}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
