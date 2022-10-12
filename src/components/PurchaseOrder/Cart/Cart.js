import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Layout/Images/backgroundlogo.png";
import Signature from "../../PurchaseOrder/Images/AgroPro signature.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import axios from "axios";
import SoloAlert from "soloalert";
import styles from "./styles.module.css";
import myGif from "../Images/Emptypreview.gif";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function OrderConfirmationForm() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

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
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
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
      onOk: async function () {
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
    // <div className={styles.signup_container}>
    <div className={styles.signup_form_container}>
      {/* <div> */}
      <div>
        <div className="App" id="OrderConfirmationForm">
          {/* <section class="section-pagetop bg"> */}

          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#fdcb6e" }}>
              <Toolbar>
                {/* <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton> */}
                <section>
                  <div class="container">
                    <h3 class="title-page">Review Your Order</h3>
                  </div>
                </section>
                <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
                  <input
                    type="text"
                    className={styles.search}
                    name="search"
                    placeholder="Search.."
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
              </Toolbar>
            </AppBar>
          </Box>

          <section class="section-content padding-y">
            <div class="container">
              <div class="row">
                <main class="col-md-9">
                  {/* <div class="card"> */}
                  <table class="table table-borderless table-shopping-cart">
                    {/* <thead class="text-muted">
                      <tr class="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" class="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead> */}
                    <tbody>
                      {cartItems.length === 0 && (
                        <div className={styles.emptyCart_container}>
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
                            <div className={styles.productCart_container}>
                              <tr key={item.productId}>
                                <td>
                                  <figure class="itemside">
                                    <div class="aside">
                                      <img
                                        src={item.image}
                                        // src="assets/images/items/1.jpg"
                                        class="img-sm"
                                      />
                                    </div>
                                    <figcaption class="info">
                                      <a href="#" class="title text-dark">
                                        {item.productName}
                                      </a>
                                      <p class="text-muted small">
                                        Product Code: {item.productCode} <br />{" "}
                                        Category: {item.category}
                                      </p>
                                    </figcaption>
                                  </figure>
                                </td>
                                {/* <td>
                                    <Select
                                      placeholder="1"
                                      // name="role"
                                      onChange={handleQtyChange}
                                      value={cartItems.qty}
                                      required
                                      // className={styles.dropdown}
                                    >
                                      <MenuItem value={1}>1</MenuItem>
                                      <MenuItem value={2}>2</MenuItem>
                                      <MenuItem value={3}>3</MenuItem>
                                      <MenuItem value={4}>4</MenuItem>
                                      <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                  
                                  </td> */}
                                <td>
                                  <div class="price-wrap">
                                    <var class="price">
                                      Rs : {item.price} /=
                                    </var>
                                    <small class="text-muted">
                                      {" "}
                                      {/* Rs: {item.price} each{" "} */}
                                    </small>
                                  </div>
                                </td>
                                <td class="text-right">
                                  <a
                                    data-original-title="Save to Wishlist"
                                    title=""
                                    href=""
                                    class="btn btn-light mr-2"
                                    data-toggle="tooltip"
                                  >
                                    {" "}
                                    <i class="fa fa-heart"></i>
                                  </a>
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
                              </tr>
                            </div>
                          ))
                      ) : (
                        <div></div>
                      )}
                    </tbody>
                  </table>
                  {/* </div> */}
                </main>
                {cartItems ? (
                  cartItems.map((item) => (
                    <aside class="col-md-3">
                      <div class="card mb-3">
                        <div class="card-body">
                          <form>
                            <div class="form-group">
                              <label>Have coupon?</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name=""
                                  placeholder="Coupon code"
                                />
                                <span class="input-group-append">
                                  <button class="btn btn-primary">Apply</button>
                                </span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body">
                          <dl class="dlist-align">
                            <dt>Total price:</dt>
                            <dd class="text-right">{item.totalPrice}</dd>
                          </dl>
                          <dl class="dlist-align">
                            <dt>Discount:</dt>
                            <dd class="text-right">USD 658</dd>
                          </dl>
                          <dl class="dlist-align">
                            <dt>{}</dt>
                            <dd class="text-right  h5">
                              <strong>$1,650</strong>
                            </dd>
                          </dl>
                          <hr />
                          <p class="text-center mb-3">
                            <img
                              src="assets/images/misc/payments.png"
                              height="26"
                            />
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link to="/home">
                          <button className={styles.button62} role="button">
                            <i class="bi bi-arrow-left-square"></i>Back To Home
                          </button>
                        </Link>
                        <Link to="/checkout">
                          <button className={styles.button62} role="button">
                            Proceed To Payment{""}
                            <i class="bi bi-arrow-right-square"></i>
                          </button>
                        </Link>
                      </div>
                    </aside>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationForm;
