import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et,
          fugiat deserunt magnam incidunt facilis cupiditate qui perferendis
          illo odit, dicta, enim suscipit ad ab distinctio totam quos quam
          iusto!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque et,
          fugiat deserunt magnam incidunt facilis cupiditate qui perferendis
          illo odit, dicta, enim suscipit ad ab distinctio totam quos quam
          iusto!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
