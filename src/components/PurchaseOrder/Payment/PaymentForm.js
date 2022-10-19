import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import { red } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [cardInformation, setCardInformation] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [zip, setzip] = useState("");

  const [payments, setPayments] = useState([]);
  const [isEditClick, setIsEditClick] = useState(false);
  const [editId, setEditId] = useState("");

  const [editEmail, seteditEmail] = useState("");
  const [editCardInformation, seteditCardInformation] = useState("");
  const [editExpDate, seteditExpDate] = useState("");
  const [editcvc, seteditcvc] = useState("");
  const [editNameOnCard, seteditNameOnCard] = useState("");
  const [editZip, seteditZip] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    axios.get("http://localhost:8000/payment/").then((res) => {
      setPayments(res.data);
    });
  }, []);

  const saveData = (e) => {
    // if (!isValidEmail(e.target.value.email)) {
    //   setError("Email is invalid");
    // } else {
    //   setError(null);
    // }

    // setMessage(e.target.value);

    // e.preventDefault();
    // if (cardInformation.length == 0 || nameOnCard.length == 0) {
    //   setError(true);
    // }
    // if (cardInformation && nameOnCard) {
    //   console.log("First Name: ", cardInformation, "\nLast Name: ", nameOnCard);
    // }
    const paymentObj = {
      email,
      cardInformation,
      expDate,
      cvc,
      nameOnCard,
      zip,
    };

    axios
      .post("http://localhost:8000/payment/", paymentObj)
      .then((res) => {
        alert("Payment Details Successfully added!");
        axios.get("http://localhost:8000/payment/").then((res) => {
          setPayments(res.data);
        });
        setEmail("");
        setCardInformation("");
        setExpDate("");
        setcvc("");
        setNameOnCard("");
        setzip("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const updateData = (e) => {
    e.preventDefault();
    const paymentObj = {
      email: editEmail,
      cardInformation: editCardInformation,
      expDate: editExpDate,
      cvc: editcvc,
      nameOnCard: editNameOnCard,
      zip: editZip,
    };
    axios
      .put(`http://localhost:8000/payment/${editId}`, paymentObj)
      .then((res) => {
        alert("Payment Updated");
        axios.get("http://localhost:8000/payment/").then((res) => {
          setPayments(res.data);
        });
        setIsEditClick(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteCourse = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/payment/deletePayment/${e.target.id}`)
      .then(() => {
        axios.get("http://localhost:8000/payment/").then((res) => {
          setPayments(res.data);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onEditClick = (e) => {
    e.preventDefault();
    setEditId(e.target.id);
    setIsEditClick(!isEditClick);

    const payment = payments.find((payment) => payment._id === e.target.id);
    seteditEmail(payment.email);
    seteditCardInformation(payment.cardInformation);
    seteditExpDate(payment.expDate);
    seteditcvc(payment.cvc);
    seteditNameOnCard(payment.nameOnCard);
    seteditZip(payment.zip);
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        {/* <h1>Course Page</h1> */}
        <div className={styles.left}>
          {/* <h2 className={styles.paymentHeadingStyle}>Agro Pro </h2> */}
          <h1 className={styles.paymentStyles}>Secure Payments</h1>
        </div>

        <div className={styles.right}>
          <br />
          <br />
          <br />
          {payments.length === 0 || payments.length > 2 ? (
            <div
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  <TextField
                    id="email"
                    iname="email"
                    variant="outlined"
                    required
                    fullWidth
                    label="Email"
                    autoFocus
                    type="email"
                    placeholder=" Your Email"
                    value={email}
                    style={{ margin: 5 }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {error && <h2 style={{ color: "red" }}>{error}</h2>} */}
                </Grid>

                {/* <input
                type="text"
                placeholder="Enter course name"
                value={email}
                style={{ margin: 5 }}
                onChange={(e) => setEmail(e.target.value)}
              /> */}

                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  {nameOnCard.length <= 22 ? (
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="NameOnCard"
                      autoFocus
                      type="text"
                      value={nameOnCard}
                      style={{ margin: 5 }}
                      onChange={(e) => setNameOnCard(e.target.value)}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      label="NameOnCard"
                      helperText="Must be less than 22"
                      value={nameOnCard}
                      style={{ margin: 5 }}
                      onChange={(e) => setNameOnCard(e.target.value)}
                    />
                  )}
                </Grid>
                {/* <input
                type="text"
                placeholder="Enter course name"
                value={nameOnCard}
                style={{ margin: 5 }}
                onChange={(e) => setNameOnCard(e.target.value)}
              /> */}

                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Card Number"
                    autoFocus
                    type="number"
                    placeholder="Card Number"
                    value={cardInformation}
                    style={{ margin: 5 }}
                    onChange={(e) => setCardInformation(e.target.value)}
                  />
                  {/* {error && cardInformation.length <= 0 ? (
                    <label>Last Name can't be Empty</label>
                  ) : (
                    ""
                  )} */}
                </Grid>
                <p
                  class="text-center mb-3"
                  style={{ margin: "25px 0px 0px 50px" }}
                >
                  <img
                    src="assets/images/misc/payments.png"
                    styles={{ height: "25px", marginTop: "50px" }}
                  />
                </p>
                {/* <input
                type="number"
                placeholder="Enter course free"
                value={cardInformation}
                style={{ margin: 5 }}
                onChange={(e) => setCardInformation(e.target.value)}
              /> */}
                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  <TextField
                    name="expDate"
                    variant="outlined"
                    label="ExpDate"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    autoFocus
                    value={expDate}
                    style={{ margin: 5 }}
                    onChange={(e) => setExpDate(e.target.value)}
                  />
                </Grid>
                {/* <input
                type="number"
                placeholder="Enter course free"
                value={expDate}
                style={{ margin: 5 }}
                onChange={(e) => setExpDate(e.target.value)}
              /> */}
                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  {cvc.length == 3 || cvc.length == 0 ? (
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="CVC"
                      autoFocus
                      type="number"
                      placeholder="CVC"
                      value={cvc}
                      style={{ margin: 5 }}
                      onChange={(e) => setcvc(e.target.value)}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      label="CVC"
                      helperText="Must be a 3 digit number"
                      value={cvc}
                      style={{ margin: 5 }}
                      onChange={(e) => setcvc(e.target.value)}
                    />
                  )}
                </Grid>
                {/* <input
                type="number"
                placeholder="Enter course free"
                value={cvc}
                style={{ margin: 5 }}
                onChange={(e) => setcvc(e.target.value)}
              /> */}

                <Grid
                  item
                  xs={6}
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "35ch",
                      marginLeft: "10px",
                    },
                  }}
                >
                  {zip.length == 5 || zip.length == 0 ? (
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="zip"
                      autoFocus
                      type="number"
                      placeholder="Enter Zip code"
                      value={zip}
                      style={{ margin: 5 }}
                      onChange={(e) => setzip(e.target.value)}
                    />
                  ) : (
                    <TextField
                      error
                      id="outlined-error-helper-text"
                      label="ZIP"
                      helperText="Must be a 5 digit number"
                      value={zip}
                      style={{ margin: 5 }}
                      onChange={(e) => setzip(e.target.value)}
                    />
                  )}
                </Grid>
              </Grid>
              {/* <input
                type="number"
                placeholder="Enter course free"
                value={zip}
                style={{ margin: 5 }}
                onChange={(e) => setzip(e.target.value)}
              /> */}

              <div class={styles.alert}>
                <button
                  onClick={(e) => saveData(e)}
                  style={{
                    margin: 5,
                    marginLeft: "20%",
                    marginTop: "50px",
                  }}
                  className={styles.blue_btn}
                >
                  Add Payment Details
                </button>
                <Alert severity="info" className={styles.info_alert}>
                  Info Alert — payment details will taken in to process!
                </Alert>
                {/* <span class={styles.tooltiptext}>Tooltip text</span> */}
              </div>

              <br />
            </div>
          ) : (
            //............................................... edit process..............................................
            <table>
              {/* <tr>
                <th>Course Name</th>
                <th>Course Fee</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
              </tr> */}
              <div className={styles.right}>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ marginBottom: "80px" }}
                >
                  Edit Payment Details
                </Typography>
                {payments &&
                  payments.length > 0 &&
                  payments.map((course, index) => (
                    <tr key={index}>
                      <div
                        sx={{
                          "& > :not(style)": {
                            m: 1,
                            width: "20ch",
                            paddingLeft: "20%",
                          },
                        }}
                      >
                        <Grid container spacing={2}>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="text"
                              //   value={editEmail}
                              //   onChange={(e) => seteditEmail(e.target.value)}
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "20px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  label="Email"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="text"
                                  value={editEmail}
                                  onChange={(e) => seteditEmail(e.target.value)}
                                />
                              </Grid>
                            ) : (
                              course.email
                            )}
                          </td>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="number"
                              //   value={editCardInformation}
                              //   onChange={(e) =>
                              //     seteditCardInformation(e.target.value)
                              //   }
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "10px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  label="Card Information"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="number"
                                  value={editCardInformation}
                                  onChange={(e) =>
                                    seteditCardInformation(e.target.value)
                                  }
                                />
                              </Grid>
                            ) : (
                              course.cardInformation
                            )}
                          </td>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="number"
                              //   value={editExpDate}
                              //   onChange={(e) => seteditExpDate(e.target.value)}
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "10px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  // label="Expiry Date"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="date"
                                  value={editExpDate}
                                  onChange={(e) =>
                                    seteditExpDate(e.target.value)
                                  }
                                />
                              </Grid>
                            ) : (
                              course.expDate
                            )}
                          </td>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="number"
                              //   value={editcvc}
                              //   onChange={(e) => seteditcvc(e.target.value)}
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "10px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  label="CVC"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="number"
                                  value={editcvc}
                                  onChange={(e) => seteditcvc(e.target.value)}
                                />
                              </Grid>
                            ) : (
                              course.cvc
                            )}
                          </td>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="text"
                              //   value={editNameOnCard}
                              //   onChange={(e) => seteditNameOnCard(e.target.value)}
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "10px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  label="Name On Card"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="text"
                                  value={editNameOnCard}
                                  onChange={(e) =>
                                    seteditNameOnCard(e.target.value)
                                  }
                                />
                              </Grid>
                            ) : (
                              course.nameOnCard
                            )}
                          </td>
                          <td>
                            {isEditClick && course._id === editId ? (
                              // <input
                              //   type="number"
                              //   value={editZip}
                              //   onChange={(e) => seteditZip(e.target.value)}
                              // />
                              <Grid
                                item
                                xs={6}
                                sx={{
                                  "& > :not(style)": {
                                    m: 1,
                                    width: "35ch",
                                    marginLeft: "10px",
                                  },
                                }}
                              >
                                <TextField
                                  variant="outlined"
                                  required
                                  fullWidth
                                  label="Zip"
                                  autoFocus
                                  style={{ marginLeft: 50 }}
                                  type="number"
                                  value={editZip}
                                  onChange={(e) => seteditZip(e.target.value)}
                                />
                              </Grid>
                            ) : (
                              course.zip
                            )}
                          </td>
                          <td>
                            <div style={{ margin: "50px 10px 0px 10px " }}>
                              {isEditClick && course._id === editId ? (
                                <Button
                                  style={{
                                    margin: 5,
                                    marginLeft: "30%",
                                    marginTop: "10px",
                                    display: "inline-block",
                                  }}
                                  variant="contained"
                                  className={styles.blue_btn}
                                  id={course._id}
                                  onClick={(e) => onEditClick(e)}
                                >
                                  Cancel
                                </Button>
                              ) : (
                                <Button
                                  style={{
                                    margin: 5,
                                    marginLeft: "9px",
                                    marginTop: "10px",
                                    display: "inline-block",
                                    backgroundColor: "purple",
                                  }}
                                  variant="contained"
                                  className={styles.blue_btn}
                                  id={course._id}
                                  onClick={(e) => onEditClick(e)}
                                >
                                  Update<i class="bi bi-pencil-square"></i>
                                </Button>
                              )}

                              <div className={styles.blue_horizontal}>
                                {isEditClick && course._id === editId && (
                                  <Button
                                    style={{
                                      margin: 5,
                                      marginLeft: "10px",
                                      marginTop: "10px",
                                    }}
                                    variant="contained"
                                    className={styles.blue_btn}
                                    onClick={(e) => updateData(e)}
                                  >
                                    Save<i class="bi bi-arrow-bar-up"></i>
                                  </Button>
                                )}
                                <Button
                                  style={{
                                    margin: 5,
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                  }}
                                  variant="contained"
                                  className={styles.blue_btn}
                                  id={course._id}
                                  onClick={(e) => deleteCourse(e)}
                                >
                                  Delete<i class="bi bi-trash-fill"></i>
                                </Button>
                              </div>
                            </div>
                          </td>
                        </Grid>
                      </div>
                    </tr>
                  ))}
              </div>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
