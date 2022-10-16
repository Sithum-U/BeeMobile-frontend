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

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function OrderConfirmationForm() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
  // console.log(paymentDetails);

  //genarate pdf

  // const generatePDF = (tickets) => {
  //   const doc = new jspdf();
  //   const tableColumn = [
  //     "order ID",
  //     "Item Name",
  //     "Item Price",
  //     "Item Quantity",
  //     "Item Price",
  //   ];
  //   const tableRows = [];
  //   const date = Date().split(" ");
  //   const dateStr = date[1] + "-" + date[2] + "-" + date[3];

  //   tickets.map((ticket) => {
  //     const ticketData = [
  //       ticket._id,
  //       ticket.itemName,
  //       ticket.itemPrice,
  //       ticket.itemQuantity,
  //       ticket.itemPrice * ticket.itemQuantity,
  //     ];
  //     tableRows.push(ticketData);
  //   });
  //   tickets.map((payment) => {
  //     const ticketData = [
  //       payment.email,
  //       payment.cardInformation,
  //       payment.expDate,
  //       payment.cvc,
  //       payment.nameOnCard,
  //       payment.region,
  //       payment.zip,
  //     ];
  //     tableRows.push(ticketData);
  //   });
  //   doc.text("AgroPro Solution Provider", 70, 8).setFontSize(13);
  //   doc.text("Order Confirmation Report", 14, 16).setFontSize(13);
  //   doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
  //   //right down width height
  //   doc.addImage(Logo, "JPEG", 170, 8, 25, 25);
  //   doc.autoTable(tableColumn, tableRows, {
  //     styles: { fontSize: 8 },
  //     startY: 35,
  //   });
  //   doc.addImage(Signature, "JPEG", 120, 80, 70, 40);
  //   doc.save("Contract Details Report.pdf");
  // };

  const clickNotify = () => {
    Notification.requestPermission().then((perm) => {
      new Notification("Example", { body: "Thi is kkk" });
    });
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
    <div className="App" id="OrderConfirmationForm">
      {/* <section class="section-pagetop bg"> */}
      <section>
        <div class="container">
          <center>
            {" "}
            <h3
              class="title-page"
              style={{
                color: "black",
                fontFamily: "Lucida Handwriting",
                marginTop: 30,
              }}
            >
              Order Details Summary
            </h3>
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
                          {/* <button
                            class="btn btn-light"
                            style={{
                              color: "#ff7979",
                              borderColor: "#ff7979",
                            }}
                            onClick={() => onDelete(item)}
                          >
                            {" "}
                            Remove
                          </button> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div></div>
                  )}
                </tbody>
              </table>

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
                  message="Report Generated Successfully .. Please wait...."
                  key={transition ? transition.name : ""}
                />
                <a href="#" class="btn btn-light">
                  {" "}
                  <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                </a>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
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
              {/* </div> */}
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
            {/* </div> */}
            {/* </aside> */}

            {/* <aside class="col-md-3">
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
            </aside> */}
          </div>
        </div>
      </section>

      <section class="section-name bg padding-y">
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
      </section>
    </div>
  );
}

export default OrderConfirmationForm;
