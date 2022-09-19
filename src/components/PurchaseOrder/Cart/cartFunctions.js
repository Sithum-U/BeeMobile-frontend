import React, { useState } from "react";
import Main from "./Main";
import data from "./data";
import Cart from "./Cart";
import Header from "../../Layout/Header/Header";

export default function CartFunctions() {
  const [cartItems, setCartItems] = useState([]);

  const { products } = data;

  //   useEffect(() => {
  //     fetch("http://localhost:9000/product/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setpoRequestManage(data);
  //       });
  //   }, []);

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

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));

      console.log("Delete button clicked");
    } else {
      console.log("Id not found");
    }
  };
  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      <Main products={products} onAdd={onAdd}></Main>
      <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
      ></Cart>
    </div>
  );
}
