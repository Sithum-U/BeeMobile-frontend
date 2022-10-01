import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cartstyle.css";
import { Link, useNavigate } from "react-router-dom";
import myGif from "../Images/Emptypreview.gif";

export default function Cart(props) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/cartItem/")
      .then((res) => res.json())
      .then((res) => {
        setCartItems(res.data);
      });
  });
  console.log(cartItems);
  const { onAdd, onRemove, onDelete } = props;
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const itemsPrice = 0;

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartItems.length === 0
                            ? "No Items in the list"
                            : cartItems.length + " Items"}
                        </MDBTypography>
                      </div>
                      {/* ------------------------cart details display--------------------------------------------------------- */}
                      <hr className="my-4" />

                      <MDBRow>
                        {/* {cartItems.length === 0 && (
                          <div className="center">
                            <img src={myGif} />
                            <h3 className="emptyCartMain">
                              Your Cart is Empty
                            </h3>
                            <h4 className="emptyCartSecond">
                              Looks like you haven't added anything to your cart
                              yet
                            </h4>
                          </div>
                        )} */}
                        {cartItems ? (
                          cartItems.map((item) => (
                            <div
                              key={item.productId}
                              className="mb-4 d-flex justify-content-between align-items-center"
                            >
                              <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage
                                  src={item.image}
                                  fluid
                                  className="cartImage"
                                  alt="Cotton T-shirt"
                                />
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography tag="h6" className="text-muted">
                                  {item.productName}
                                </MDBTypography>
                                <MDBTypography
                                  tag="h6"
                                  className="text-black mb-0"
                                >
                                  {item.category}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                              >
                                <div
                                  onClick={() => onRemove(item)}
                                  color="link"
                                  className="px-2"
                                >
                                  <i class="bi bi-dash-circle-fill"></i>
                                </div>

                                <MDBInput
                                  type="number"
                                  min="0"
                                  max="10"
                                  defaultValue={1}
                                  onChange={cartItems.length}
                                  size="sm"
                                />

                                <div
                                  onClick={() => onAdd(item)}
                                  color="link"
                                  className="px-2"
                                >
                                  <i class="bi bi-plus-circle-fill"></i>
                                </div>
                              </MDBCol>
                              <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                  {/* Rs: {item.qty * item.price.toFixed(2)} /= */}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="1" lg="1" xl="1" className="text-end">
                                <MDBBtn
                                  onClick={() => onDelete(item)}
                                  color="link"
                                  className="px-2"
                                >
                                  <i class="bi bi-trash"></i>
                                </MDBBtn>
                              </MDBCol>
                            </div>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </MDBRow>

                      <hr className="my-4" />
                      {/* ----------------------------- Back To shop Button------------------------------------------------------- */}
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText
                            tag="a"
                            href="/productDetails/innovation"
                            className="text-body"
                          >
                            <i className="bi bi-skip-backward-fill"></i> Back to
                            shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  {/* ----------------------------- Side pane summary---------------------------------------------------------- */}
                  <MDBCol lg="4" className="bg-grey">
                    {cartItems.length === 0 && (
                      <div className="center">Cart is empty</div>
                    )}
                    {cartItems.map((item) => (
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            {item.length}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            Rs: {itemsPrice.toFixed(2)} /=
                          </MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Shipping
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">
                              Standard-Delivery- Rs200.00
                            </option>
                            <option value="2">Quick-Delivery- Rs500.00</option>
                            <option value="3">Smart-Delivery- Rs300.00</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Voucher Code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ${totalPrice.toFixed(2)}
                          </MDBTypography>
                        </div>
                        <Link to="/checkout" style={{ textDecoration: "none" }}>
                          <MDBBtn color="dark" block size="lg">
                            Proceed To Checkout
                          </MDBBtn>
                        </Link>
                      </div>
                    ))}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
