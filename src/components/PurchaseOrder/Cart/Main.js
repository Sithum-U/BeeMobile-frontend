import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

export default function Main(props) {
  const { products, onAdd } = props;

  // const [product, setproduct] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   fetch("http://localhost:8000/product/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setproduct(data);
  //       //console.log(data);
  //     });
  // }, []);
  // console.log(product);
  return (
    <main className="block col-2">
      {/* <h2>Products</h2>
      <div className="row">
        {product.data.map((products) => (
          <div key={products.id}>
            <img
              className="small"
              src={products.image}
              style={{
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "row-reverse",
              }}
              alt={products.productName}
            />
            <h3>{products.productCode}</h3>
            <div>${products.price}</div>
            <div>
              <button onClick={() => onAdd(products)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div> */}
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
