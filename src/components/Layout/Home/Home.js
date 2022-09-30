import React, { useEffect, useState } from "react";
import Cart from "../../PurchaseOrder/Cart/Cart";
import axios from "axios";
import agri from "../../product/home.png";
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
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => {
  const [product, setproduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/product/")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        // console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:8000/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setproduct(data);
  //       // console.log(data);
  //     });
  // }, []);
  // // console.log(product);
  // // console.log("ddd");

  // const onAdd = (item) => {
  //   // console.log(item._id);

  //   const exist = cartItems.find((x) => x._id === item._id);
  //   console.log(exist);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...item, qty: 1 }]);
  //   }
  //   console.log(cartItems);
  // };

  return (
    <div>
      <h2>Products</h2>
      {/* <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        // onRemove={onRemove}
        // onDelete={onDelete}
      /> */}
      {/* <div className="row">
        {product.data ? (
          product.data.map((item) => (
            <div key={item._id}>
              <img
                className="small"
                src={item.image}
                style={{
                  width: "300px",
                  height: "300px",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
                alt={item.productName}
              />
              <h3>{item.productCode}</h3>
              <div>${item.price}</div>

              <div>
                <button onClick={() => onAdd(item)}>Add To Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div> */}
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={agri} width="1500" height="400" />
      </div>
      {product.data ? (
        product.data.map((item) => {
          return (
            <div className="container" key={item._id}>
              <br />

              <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                <MDBCol>
                  <MDBCard style={{ width: "400px" }}>
                    <MDBCardTitle>{item.productName}</MDBCardTitle>
                    <img src={`${item.image}`} alt="..." position="top" />
                    <MDBCardBody>
                      <p>{item.description}</p>
                      <MDBCardText>
                        <Link to={"/product/single/" + item._id}>
                          <Button variant="success" style={{ width: "300px" }}>
                            Read More{" "}
                          </Button>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
