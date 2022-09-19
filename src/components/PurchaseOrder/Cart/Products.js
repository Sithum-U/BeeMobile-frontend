import React, { useState } from "react";
import Main from "./Main";
import data from "./data";
import Header from "../../Layout/Header/Header";

export default function CartFunctions(props) {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      <Main products={products} onAdd={onAdd}></Main>
    </div>
  );
}
