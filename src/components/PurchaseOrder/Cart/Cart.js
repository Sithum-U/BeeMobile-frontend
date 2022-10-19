import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";
import SoloAlert from "soloalert";
import styles from "./styles.module.css";
import myGif from "../Images/Emptypreview.gif";
import { Link } from "react-router-dom";
import cart from "../../Layout/Images/cart.png";
import Badge from "@mui/material/Badge";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const [paymentDetails, setPaymentDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [itemName, setitemName] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/cartItem/")
      .then((res) => res.json())
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);
  console.log(cartItems);

  useEffect(() => {
    fetch("http://localhost:8000/payment/")
      .then((res) => res.json())
      .then((data) => {
        setPaymentDetails(data);
        // console.log(paymentDetails);
      });
  }, []);
  const initialValue = 0;
  const subtotalPrice = cartItems.reduce(
    (accumilator, current) => accumilator + current.price,
    initialValue
  );
  const shippingPrice = 20;
  const totalPrice = subtotalPrice + shippingPrice;
  const handleQtyChange = (e) => {
    e.preventDefault();
    setCartItems(e.target.value);
  };

  const clickNotify = () => {
    Notification.requestPermission().then((perm) => {
      new Notification("Example", { body: "Thi is kkk" });
    });
  };

  // ----------------------------Item Delete----------------------------------------
  async function delet(id) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function (e) {
        e.preventDefault();
        try {
          const result = await (
            await axios.delete(`http://localhost:8000/cartItem/${id}`)
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/cart";
              },
            });
          }
        } catch (err) {
          SoloAlert.alert({
            title: "Oops!",
            body: "Something went wrong",
            icon: "error",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }
  return (
    <div class="container mt-5 p-3 rounded cart">
      <Box sx={{ flexGrow: 1 }}>
        {/* <AppBar position="static" style={{ backgroundColor: "blue" }}> */}
        {/* <Toolbar> */}
        <div style={{ display: "flex" }}>
          <div class="container">
            <center>
              {" "}
              <h2>CHECK YOUR PRODUCTS HERE 🤠</h2>
            </center>
          </div>

          <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-12">
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Search Product..."
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <span class="left-pan">
                    <i class="fa fa-microphone"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Badge
            className="zoomBadge"
            badgeContent={cartItems.length}
            color="success"
          >
            <li>
              <a href="/Cart">
                <img
                  className="zoomCart"
                  src={cart}
                  width="50px"
                  height="50px"
                  color="#fff"
                />
              </a>
            </li>
          </Badge>
        </div>
        {/* </Toolbar> */}
        {/* </AppBar> */}
      </Box>
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="product-details mr-2">
            <div class="d-flex flex-row align-items-center">
              <i class="fa fa-long-arrow-left"></i>
              <Link to="/home">
                {" "}
                <span class="ml-2">Continue Shopping</span>
              </Link>
            </div>

            <div class="d-flex justify-content-between">
              <span>You have {cartItems.length} items in your cart</span>
              <div class="d-flex flex-row align-items-center">
                <span class="text-black-50">Sort by:</span>
                <div class="price ml-2">
                  <span class="mr-1">price</span>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <hr />
            {/* ......................................product items........................................................ */}

            {cartItems.length === 0 && (
              <div className={styles.emptyCart_container}>
                <div className="center">
                  <center>
                    <img src={myGif} />

                    <Typography variant="h5" gutterBottom>
                      Your Cart is Empty
                    </Typography>

                    <Typography variant="h7" gutterBottom>
                      Looks like you haven't added <br />
                      anything to your cart yet
                    </Typography>
                  </center>
                </div>
              </div>
            )}
            {cartItems ? (
              cartItems
                .filter((value) => {
                  if (searchTerm === "") {
                    return value;
                  } else if (
                    value.productName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item) => (
                  <tr key={item.productId}>
                    <div class="d-flex justify-content-between align-items-center mt-1 p-5 items rounded">
                      <div class="d-flex flex-row">
                        <td>
                          <figure class="itemside">
                            <div class="aside">
                              <img
                                src={item.image}
                                width="150px"
                                className="cartImg"
                              />
                            </div>
                            <figcaption class="ml-2">
                              <span class="font-weight-bold d-block">
                                <a href="#" class="title text-dark ml-4">
                                  {item.productName}
                                </a>
                              </span>
                              <p class="text-muted small ml-4">
                                Product Code: {item.productCode} <br />{" "}
                                {/* Category: {item.category} */}
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <td>
                          <figcaption class="ml-2">
                            <p class="text-muted small ml-4">
                              Category: {item.category}
                            </p>
                          </figcaption>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="d-block ml-5 font-weight-bold">
                              Rs: {item.price}.00
                            </var>
                            <small class="text-muted">
                              {" "}
                              {/* Rs: {item.price} each{" "} */}
                            </small>
                          </div>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="d-block ml-5 font-weight-bold"></var>
                            <small class="text-muted">
                              {" "}
                              {/* Rs: {item.price} each{" "} */}
                            </small>
                          </div>
                        </td>
                        <td class="text-right">
                          <button
                            class="btn btn-light"
                            style={{
                              color: "#ff7979",
                              borderColor: "#ff7979",
                            }}
                            onClick={(e) => {
                              delet(item._id);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </div>
                    </div>
                  </tr>
                ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div class="col-md-4">
          <div class="payment-info">
            <div class="d-flex justify-content-between align-items-center">
              <span>Card details</span>
              <img
                class="rounded"
                src="https://i.imgur.com/WU501C8.jpg"
                width="30"
              />
            </div>
            <span class="type d-block mt-3 mb-1">Card type</span>

            <p class="text-center mb-3" style={{ margin: "25px 0px 0px 50px" }}>
              <img
                src="assets/images/misc/payments.png"
                styles={{ height: "25px", marginTop: "50px" }}
              />
            </p>

            <hr class="line" />
            <div class="d-flex justify-content-between information">
              <span>Subtotal</span>
              <span>Rs :{subtotalPrice}.00 /=</span>
            </div>
            <div class="d-flex justify-content-between information">
              <span>Shipping</span>
              <span>Rs :{shippingPrice}.00 /=</span>
            </div>
            <div class="d-flex justify-content-between information">
              <span>Total(Incl. taxes)</span>
              <span>Rs :{totalPrice}.00 /=</span>
            </div>
            <button
              class="btn  btn-block d-flex justify-content-between mt-3"
              type="button"
              style={{ backgroundColor: "#2d3436" }}
            >
              <span style={{ color: "white" }}>Rs :{totalPrice}.00 /=</span>
              <Link to="/checkout">
                <span style={{ color: "white" }}>
                  Checkout<i class="fa fa-long-arrow-right ml-1"></i>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
