import React, { useState, useEffect } from "react";
import Main from "./Main";
import data from "./data";
import Cart from "./Cart";
import Home from "../../Layout/Home/Home";
// import { useParams } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import { useParams } from "react-router-dom";

function CartFunctions() {
  const [cartItems, setCartItems] = useState([]);
  // const { id } = useParams();
  // const { products } = data;

  // const [product, setproduct] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   fetch(`http://localhost:8000/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setproduct(data);
  //       console.log(data);
  //     });
  // }, []);

  // console.log("ddd");

  const onAdd = (product) => {
    // console.log(product);
    const exist = cartItems.find((x) => x.id === product.id);
    // console.log("Exist item");
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
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
      {/* <Header countCartItems={cartItems.length}></Header> */}
      {/* <Main products={products} onAdd={onAdd}></Main> */}
      {/* <Home onAdd={onAdd} cartItems={cartItems} /> */}
      <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
      ></Cart>
    </div>
  );
}

export default CartFunctions;
