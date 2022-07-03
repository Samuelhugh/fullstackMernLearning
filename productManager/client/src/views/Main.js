import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
  const [products, setProducts] = useState([]);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <DisplayAll
        products={products}
        setProducts={setProducts}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};

export default Main;
