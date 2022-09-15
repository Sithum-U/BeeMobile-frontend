import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import jspdf from "jspdf";
import "jspdf-autotable";
import Logo from "../../Layout/Images/backgroundlogo.png";
import Signature from "../../PurchaseOrder/Images/AgroPro signature.jpg";

import "./reviewOrder.css";
const rows = [
  {
    id: "itemName",
    label: "Item Name",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "itemPrice",
    label: "Item Price",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "itemQuantity",
    label: "Item Quantity",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "totalItemPrice",
    label: "Total Item Price",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
];

const products = [
  { name: "", desc: "", price: "" },
  { name: "Delivery Type", desc: "", price: "Free" },
];
const addresses = ["No 386", "Kandy", "Road", "Nittabuwa", "SRILANKA"];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function ReviewOrderForm() {
  const classes = useStyles();

  const [poRequestManage, setpoRequestManage] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [itemName, setitemName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/poroutes/")
      .then((res) => res.json())
      .then((data) => {
        setpoRequestManage(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/payment/")
      .then((res) => res.json())
      .then((data) => {
        setPaymentDetails(data);
      });
  }, []);

  const sum = [];

  //genarate pdf

  const generatePDF = (tickets) => {
    const doc = new jspdf();
    const tableColumn = [
      "order ID",
      "Item Name",
      "Item Price",
      "Item Quantity",
      "Item Price",
    ];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    tickets.map((ticket) => {
      const ticketData = [
        ticket._id,
        ticket.itemName,
        ticket.itemPrice,
        ticket.itemQuantity,
        ticket.itemPrice * ticket.itemQuantity,
      ];
      tableRows.push(ticketData);
    });
    tickets.map((payment) => {
      const ticketData = [
        payment.email,
        payment.cardInformation,
        payment.expDate,
        payment.cvc,
        payment.nameOnCard,
        payment.region,
        payment.zip,
      ];
      tableRows.push(ticketData);
    });
    doc.text("WICKRAMA SUPER PLC", 70, 8).setFontSize(13);
    doc.text("Purchase Order Detail Report", 14, 16).setFontSize(13);
    doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
    //right down width height
    doc.addImage(Logo, "JPEG", 170, 8, 25, 25);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    doc.addImage(Signature, "JPEG", 120, 80, 70, 40);
    doc.save("Contract Details Report.pdf");
  };

  return (
    <React.Fragment>
      <div className="signup_container">
        <div className="signup_form_container ">
          <div class="buttonn">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              onClick={() => generatePDF(poRequestManage)}
            >
              GenerateReport
            </button>{" "}
            <br></br>
          </div>
          <br />
          <Typography variant="h6" gutterBottom>
            <u>Order summary</u>
          </Typography>

          <div style={{ display: "none" }}>
            {poRequestManage.map((productPO) =>
              sum.push(productPO.itemPrice * productPO.itemQuantity)
            )}
          </div>

          <List disablePadding>
            {poRequestManage.map((product) => (
              <ListItem className={classes.listItem} key={product.itemName}>
                <ListItemText
                  primary={product.itemName}
                  secondary={
                    "Rs: " +
                    product.itemPrice +
                    " X " +
                    product.itemQuantity +
                    " items"
                  }
                />
                <Typography variant="body2">
                  {"Rs: " + product.itemPrice * product.itemQuantity}
                </Typography>
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {"Rs: " + sum.reduce((a, b) => a + b, 0)}
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                <u>Delivery Details</u>
              </Typography>
              <br />
              <Typography gutterBottom>Wickrama Super</Typography>
              <Typography gutterBottom>{addresses.join(", ")}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                <u>Payment Details</u>
              </Typography>
              <br />
              <Grid container>
                {paymentDetails.map((payment) => (
                  <React.Fragment key={payment.email}>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Email Address : {payment.email}
                      </Typography>
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Card Number : {payment.cardInformation}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Expiry Date : {payment.expDate}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        CVV code : {payment.cvc}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Card Holder Name : {payment.nameOnCard}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Payment Region : {payment.region}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>
                        Zip Code : {payment.zip}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}