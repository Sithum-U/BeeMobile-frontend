import React, { useEffect, useState } from "react";
// import jspdf from "jspdf";
// import "jspdf-autotable";
import Logo from "../../Layout/Images/backgroundlogo.png";
import Signature from "../../PurchaseOrder/Images/AgroPro signature.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Switch from "@mui/material/Switch";

import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
const icon = (
  <div class="container">
    <h5>Payment and refund policy</h5>
    <br />
    <p>
      Thanks for purchasing our products at [website] operated by [name]. Due to
      the nature of our business and products we sell, items that expire sooner
      than 1 month from the date of the purchase are not eligible for a refund.
      For any other items to be eligible for a refund, you have to return the
      item you have purchased to us within 7 calendar days of the purchase. The
      item must unopened and in its original condition. Contact our customer
      services department to get a free shipping label. If our products arrived
      damaged, rotten or contaminated in any way, please contact us right away
      and we will be happy to send a free replacement regardless of its
      expiration date. If anything is unclear or you have more questions feel
      free to contact our customer support team.
    </p>
  </div>
);
function OrderConfirmationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const result = axios.delete(`http://localhost:8000/cartItem/`);

      console.log(result);
    } catch (err) {
      console.log(err);
    }

    try {
      const result = axios.delete(`http://localhost:8000/payment/`);

      console.log(result);
    } catch (err) {
      console.log(err);
    }
    setOpenOrder(!open);
  };

  const [open, setOpen] = React.useState(false);
  const [openOrder, setOpenOrder] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenOrder(false);
  };
  // --------------------screenshot as a pdf-----------------------------
  const exportPDF = () => {
    const input = document.getElementById("OrderConfirmationForm");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 288;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a3");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Order Details.pdf");
    });
  };
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
  const initialValue = 0;
  const subtotalPrice = cartItems.reduce(
    (accumilator, current) => accumilator + current.price,
    initialValue
  );
  const shippingPrice = 20;
  const totalPrice = subtotalPrice + shippingPrice;

  useEffect(() => {
    fetch("http://localhost:8000/payment/")
      .then((res) => res.json())
      .then((data) => {
        setPaymentDetails(data);
        // console.log(paymentDetails);
      });
  }, []);

  const clickNotify = () => {
    Notification.requestPermission().then((perm) => {
      new Notification("Example", { body: "Thi is kkk" });
    });
  };
  const [checked, setChecked] = React.useState(false);

  const toggleChange = () => {
    setChecked((prev) => !prev);
  };

  // Item Delete
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
    <div className="App" id="OrderConfirmationForm" style={{ zIndex: 4 }}>
      {/* <section class="section-pagetop bg"> */}
      <section>
        <div class="container">
          <center>
            {" "}
            <h2
              class="title-page"
              style={{
                color: "black",
                fontFamily: "Lucida Handwriting",
                marginTop: 30,
              }}
            >
              Order Details Summary
            </h2>
          </center>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              <Typography variant="h5" gutterBottom>
                {" "}
                <b>Product Details</b>
                <hr />
              </Typography>
              <table class="table table-striped">
                <thead class="text-muted">
                  <tr class="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Code</th>
                    <th scope="col" width="120">
                      Category
                    </th>
                    <th scope="col" width="120">
                      Price
                    </th>
                    <th scope="col" class="text-right" width="200">
                      {" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems ? (
                    cartItems.map((item) => (
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
                          </figure>
                        </td>
                        <td>
                          <td>
                            <figcaption class="info">
                              <a href="#" class="title text-dark">
                                <b>{item.productName}</b>
                              </a>
                            </figcaption>
                          </td>
                        </td>
                        <td>
                          {" "}
                          <p class="text-muted small">{item.productCode}</p>
                        </td>
                        <td>
                          <p class="text-muted small">{item.category}</p>
                        </td>
                        <td>
                          <p class="text-muted small">Rs: {item.price} /=</p>
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
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div></div>
                  )}
                </tbody>
              </table>
            </main>
            <aside class="col-md-3">
              {/* <div class="card"> */}
              <div class="card-body" style={{ marginTop: 0 }}>
                <Typography variant="h5" gutterBottom>
                  <center>
                    {" "}
                    <b>Total Amount</b>
                    <hr />
                  </center>
                </Typography>
                <dl class="dlist-align">
                  <dt>Sub Total :</dt>
                  <dd class="text-right">Rs: {subtotalPrice} /=</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Shipping :</dt>
                  <dd class="text-right">Rs: {shippingPrice} /=</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>
                    <b>Total:</b>
                  </dt>
                  <dd class="text-right  h5">
                    <strong>Rs: {totalPrice} /=</strong>
                  </dd>
                </dl>
                <hr />
                <p class="text-center mb-3">
                  <img src="assets/images/misc/payments.png" height="26" />
                </p>
              </div>

              {/* ---------------------------------Generate report---------------------------------  */}
              <div class="card-body border-top">
                {/* <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                  </a> */}

                <div onClick={handleClick(TransitionLeft)}>
                  <button
                    type="button"
                    class="btn btn-primary float-md-right"
                    style={{
                      backgroundColor: "#4834d4",
                      borderColor: "#4834d4",
                    }}
                    // onClick={() => generatePDF(paymentDetails)}
                    onClick={() => exportPDF()}
                  >
                    GenerateReport <i class="bi bi-download"></i>
                  </button>{" "}
                </div>
                <Snackbar
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={transition}
                  message=" Please wait...."
                  key={transition ? transition.name : ""}
                />
                {/* <Link to="/home">
                  <a href="#" class="btn btn-light">
                    {" "}
                    <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                  </a>
                </Link> */}
              </div>
              <div>
                {/* <Alert severity="info" style={{ marginLeft: "50%" }}>
                  This is an info alert — check it out!
                </Alert> */}
                {/* <Alert severity="warning" style={{ marginLeft: "50%" }}>
                  Ckick ,Place order to confrim before next!
                </Alert> */}
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  style={{
                    marginLeft: "50%",
                    marginTop: "20px",
                    backgroundColor: "purple",
                  }}
                >
                  Place Order{" "}
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={openOrder}
                  onClick={handleClose}
                  style={{ transition: "all 0.3s linear" }}
                >
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    style={{ marginLeft: "50px" }}
                  >
                    Done
                  </Button>
                  Your Order is processing .......
                  <CircularProgress color="inherit" />
                </Backdrop>
              </div>
            </aside>

            {/* ...............................Payment Details......................... */}
            {/* <aside class="col-md-3"> */}
            {/* <div class="card mb-3"> */}
            <div class="card-body">
              {paymentDetails.map((payment) => (
                <table key={payment.email} class="table table-striped">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <Typography variant="h6" gutterBottom>
                        {" "}
                        <b>Payment Details</b>
                        <hr />
                      </Typography>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Email Address : {payment.email}</td>
                    </tr>
                    <tr>
                      <td> Card Number : {payment.cardInformation}</td>
                    </tr>

                    <tr>
                      <td> CVV code : {payment.cvc}</td>
                    </tr>
                    <tr>
                      <td>Card Holder Name : {payment.nameOnCard}</td>
                    </tr>
                    <tr>
                      <td>Payment Region : {payment.region}</td>
                    </tr>
                    <tr>
                      <td>Zip Code : {payment.zip}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
        {/* <Alert severity="info" style={{ marginLeft: "50%" }}>
          This is an info alert — check it out!
        </Alert>
        <Alert severity="warning" style={{ marginLeft: "50%" }}>
          Ckick ,Place order to confrim before next!
        </Alert> */}
        <div style={{ marginLeft: "50px" }}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChange} />}
            label="Payment and Refund Policy"
          />

          <Fade in={checked}>{icon}</Fade>
        </div>
      </section>

      {/* <section class="section-name bg padding-y">
        <div class="container">
          <h5>Payment and refund policy</h5>
          <br />
          <p>
            Thanks for purchasing our products at [website] operated by [name].
            Due to the nature of our business and products we sell, items that
            expire sooner than 1 month from the date of the purchase are not
            eligible for a refund. For any other items to be eligible for a
            refund, you have to return the item you have purchased to us within
            7 calendar days of the purchase. The item must unopened and in its
            original condition. Contact our customer services department to get
            a free shipping label. If our products arrived damaged, rotten or
            contaminated in any way, please contact us right away and we will be
            happy to send a free replacement regardless of its expiration date.
            If anything is unclear or you have more questions feel free to
            contact our customer support team.
          </p>
        </div>
      </section> */}
    </div>
  );
}

export default OrderConfirmationForm;
