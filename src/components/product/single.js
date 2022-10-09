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

  const onAdd = (item) => {
    // console.log(item._id);

    console.log(product);
    console.log(item);
    console.log(item.id);
    const exist = cartItems.find((x) => x.data._id === product.data._id);
    console.log(exist);
    console.log(product.data._id);
    console.log(item.data.id);
    console.log(item._id);
    axios
      .post("http://localhost:8000/cartItem/", product.data)
      .then((res) => {
        alert("Cart Details Successfully added!");
        // axios.get("http://localhost:8000/cartItem/").then((res) => {
        //   setPayments(res.data);
        // });
        // productCode("");
        // productName("");
        // description("");
        // category("");
        // price("");
        // image("");
        // countInStock("");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });

    // const exist = cartItems.find((x) => x._id === item._id);
    // console.log(exist);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    console.log(cartItems);
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
            height= "300 px" width= "700px"
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
