import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    cardInformation: "",
    expDate: "",
    cvc: "",
    nameOnCard: "",
    region: "",
    zip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/payment/add", data)
      .then((res) => {
        alert("Payment Details Successfully added!");
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
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                  onChange={(e) =>
                    setData({ ...data, cardInformation: e.target.value })
                  }
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
                    onChange={(e) =>
                      setData({ ...data, expDate: e.target.value })
                    }
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
                    onChange={(e) => setData({ ...data, cvc: e.target.value })}
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
                  onChange={(e) =>
                    setData({ ...data, nameOnCard: e.target.value })
                  }
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
                  autoComplete="region"
                  name="region"
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  label="Region"
                  autoFocus
                  onChange={(e) => setData({ ...data, region: e.target.value })}
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
                  autoComplete="zip"
                  name="zip"
                  variant="outlined"
                  required
                  fullWidth
                  id="zip"
                  label="ZIP"
                  autoFocus
                  onChange={(e) => setData({ ...data, zip: e.target.value })}
                />
              </Grid>
            </div>
            <button type="submit" className={styles.blue_btn}>
              Add Payment Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
