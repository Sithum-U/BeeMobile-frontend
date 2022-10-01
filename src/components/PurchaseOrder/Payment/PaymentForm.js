import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [cardInformation, setCardInformation] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  // const [region, setRegion] = useState("");
  const [zip, setzip] = useState("");
  const [payments, setPayments] = useState("");

  // useEffect(() => {
  //   fetch(`http://localhost:8000/payment/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUpdatePanelDetails(data);
  //       console.log(data);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentObj = {
      email,
      cardInformation,
      expDate,
      cvc,
      nameOnCard,
      // region,
      zip,
    };

    axios
      .post("http://localhost:8000/payment/add", paymentObj)
      .then((res) => {
        alert("Payment Details Successfully added!");
        axios.get("http://localhost:8000/payment/").then((res) => {
          setPayments(res.data);
        });
        setEmail("");
        cardInformation("");
        expDate("");
        cvc("");
        nameOnCard("");
        // region("");
        zip("");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h2 className={styles.paymentHeadingStyle}>Agro Pro </h2>
          <h1 className={styles.paymentStyles}>Secure Payments</h1>
        </div>
        <div className={styles.right}>
          <form
            className={styles.form_container}
            noValidate
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            {/* <Grid container spacing={2}> */}
            <div
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  autoComplete="cardInformation"
                  name="cardInformation"
                  variant="outlined"
                  required
                  fullWidth
                  id="cardInformation"
                  label="CardInformation"
                  autoFocus
                  onChange={(e) => setCardInformation(e.target.value)}
                />
              </Grid>
              <Grid
                container
                spacing={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "20ch" },
                }}
              >
                <Grid
                  item
                  xs={4}
                  sx={{
                    "& > :not(style)": { m: 1, width: "20ch" },
                  }}
                >
                  <TextField
                    name="expDate"
                    variant="outlined"
                    id="expDate"
                    label="ExpDate"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    autoFocus
                    onChange={(e) => setExpDate(e.target.value)}
                  />
                  <p class="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height="26" />
                  </p>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                >
                  <TextField
                    autoComplete="cvc"
                    name="cvc"
                    type="number"
                    variant="outlined"
                    required
                    fullWidth
                    id="cvc"
                    label="cvc"
                    sx={{
                      "& > :not(style)": { width: "29ch" },
                    }}
                    autoFocus
                    onChange={(e) => setcvc(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  autoComplete="nameOnCard"
                  name="nameOnCard"
                  variant="outlined"
                  required
                  fullWidth
                  id="nameOnCard"
                  label="NameOnCard"
                  autoFocus
                  onChange={(e) => setNameOnCard(e.target.value)}
                />
              </Grid>

              {/* <Grid
                item
                xs={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  autoComplete="region"
                  name="region"
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  label="Region"
                  autoFocus
                  onChange={(e) => setRegion(e.target.value)}
                />
              </Grid> */}
              <Grid
                item
                xs={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  autoComplete="zip"
                  name="zip"
                  variant="outlined"
                  required
                  fullWidth
                  id="zip"
                  label="ZIP"
                  autoFocus
                  onChange={(e) => setzip(e.target.value)}
                />
              </Grid>
            </div>

            <div class={styles.alert}>
              <button type="submit" className={styles.blue_btn}>
                Add Payment Details
              </button>
              <Alert severity="info" className={styles.info_alert}>
                Info Alert — payment details will taken in to process!
              </Alert>
              {/* <span class={styles.tooltiptext}>Tooltip text</span> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
