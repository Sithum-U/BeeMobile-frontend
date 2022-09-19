import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img
        className="small"
        src={product.image}
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          flexDirection: "row-reverse",
        }}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
