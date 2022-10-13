import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Single = () => {
  const [product, setproduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        // console.log(data);
      });
  }, []);
  console.log(product.data);

  useEffect(() => {
    fetch(`http://localhost:8000/cartItem/`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        // console.log(data);
      });
  }, []);

  console.log();
  console.log(cartItems);
  const onAdd = (item) => {
    // for (let i = 0; i <= cartItems.data.length; i++) {
    //   if (
    //     cartItems.data[i].cartId != product.data._id ||
    //     cartItems.data[i].cartId === undefined
    //   ) {
    //     console.log(i);

    //   } else {
    //     alert("Item Available in cart");
    //     console.log("JKKKK");
    //   }
    // }
    // console.log("product._id", product.data._id);
    // console.log("cartItems.data[0].cartId", cartItems.data);

    try {
      // if (cartItems.data.some((el) => el.cartId != product.data._id)) {
      //   console.log("ture");
      //   axios
      //     .post("http://localhost:8000/cartItem/", product.data)
      //     .then((res) => {
      //       alert("Cart Details Successfully added!");
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       alert(error.message);
      //     });
      // } else {
      //   console.log("false");
      //   if (el) {
      // setCartItems(
      //   cartItems.map((x) =>
      //     x.cartId === product.d ? { ...el, qty: el.qty + 1 } : x
      //   )
      // );
      // } else {
      //   setCartItems([...cartItems, { ...item, qty: 1 }]);
      // }
      // }
      console.log("cartItems", cartItems);
      cartItems.data.forEach((item, index) => {
        console.log("el", item);
        if (item.cartId === product.data._id) {
          console.log("ture");

          console.log("el", cartItems.data[index]);
          console.log("cartItems[index].qty", cartItems.data[index].qty);
          cartItems.data[index].qty++;
          console.log(item.cartId);
          console.log(product.data._id);
          //update
          setCartItems(cartItems.data);

          console.log("cartItems[index].qty", cartItems.data[index].qty);
        } else {
          axios
            .post("http://localhost:8000/cartItem/", product.data)
            .then((res) => {
              alert("Cart Details Successfully added!");
            })
            .catch((error) => {
              console.log(error.message);
              alert(error.message);
            });
        }
      });
    } catch (error) {
      console.log("error", error);
    }

    console.log("TEst", test);

    const exist = cartItems.find((value) => value._id === product.data._id);
    console.log(exist);
    // console.log(product.data._id);
    // console.log(item._id);
    // if (exist) {
    //   setCartItems(
    //     cartItems.map((x) =>
    //       x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { ...item, qty: 1 }]);
    // }
  };
  return (
    <div>
      <div class="masthead">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                {product.data ? (
                  <h1>{product.data.productName}</h1>
                ) : (
                  <div></div>
                )}

                <span class="meta">
                  Category :
                  {product.data ? (
                    <h3>{product.data.category}</h3>
                  ) : (
                    <div></div>
                  )}
                  {product.data ? (
                    <a href="#!"> {product.data.productCode} </a>
                  ) : (
                    <div></div>
                  )}
                  on August 24, 2022
                  <br />
                  {product.data ? (
                    <h3> Rs.{product.data.price} </h3>
                  ) : (
                    <div></div>
                  )}<br />
                  <Link to="/">
                    <Button variant="danger">Pay Now</Button>
                  </Link>
                  &nbsp;&nbsp;
                  <Button onClick={(item) => onAdd(item)} variant="success">
                    Add to Cart
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {product.data ? (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={`${product.data.image}`}
            alt="..."
            position="top"
            style={{ height: "100 px", weight: "100px" }}
          />
        </div>
      ) : (
        <div></div>
      )}

      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              {product.data ? <p>{product.data.description}</p> : <div></div>}
              <p>
                Placeholder text by
                <a href="http://spaceipsum.com/">Space Ipsum</a>
                &middot; Images by
                <a href="https://www.flickr.com/photos/nasacommons/">
                  NASA on The Commons
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Single;
