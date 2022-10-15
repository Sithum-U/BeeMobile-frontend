import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import { red } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Signup = () => {
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

  useEffect(() => {
    axios.get("http://localhost:8000/payment/").then((res) => {
      setPayments(res.data);
    });
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    const paymentObj = {
      email,
      cardInformation,
      expDate,
      cvc,
      nameOnCard,
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
      .put(`http://localhost:8000/payment/updatePayment/${editId}`, paymentObj)
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
          <h2 className={styles.paymentHeadingStyle}>Agro Pro </h2>
          <h1 className={styles.paymentStyles}>Secure Payments</h1>
        </div>
        <div className={styles.right}>
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
                    variant="outlined"
                    required
                    fullWidth
                    label="Email"
                    autoFocus
                    type="text"
                    placeholder=" Your Email"
                    value={email}
                    style={{ margin: 5 }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="NameOnCard"
                    autoFocus
                    type="text"
                    placeholder="Name On Card"
                    value={nameOnCard}
                    style={{ margin: 5 }}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
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
                </Grid>
                <p class="text-center mb-3">
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
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="cvc"
                    autoFocus
                    type="number"
                    placeholder="CVC"
                    value={cvc}
                    style={{ margin: 5 }}
                    onChange={(e) => setcvc(e.target.value)}
                  />
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
                  style={{ margin: 5, marginLeft: "20%", marginTop: "50px" }}
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
                                  style={{ margin: 10 }}
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
                                  style={{ margin: 5 }}
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
                                  style={{ margin: 5 }}
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
                                  style={{ margin: 5 }}
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
                                  style={{ margin: 5 }}
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
                                  style={{ margin: 5 }}
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
                            <button
                              style={{
                                margin: 5,
                                marginLeft: "20%",
                                marginTop: "10px",
                              }}
                              className={styles.blue_btn}
                              id={course._id}
                              onClick={(e) => onEditClick(e)}
                            >
                              {isEditClick && course._id === editId
                                ? "Cancel"
                                : "Update"}
                            </button>
                            <div className={styles.blue_horizontal}>
                              {isEditClick && course._id === editId && (
                                <button
                                  style={{
                                    margin: 5,
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                  }}
                                  className={styles.blue_btn}
                                  onClick={(e) => updateData(e)}
                                >
                                  Save<i class="bi bi-arrow-bar-up"></i>
                                </button>
                              )}
                              <button
                                style={{
                                  margin: 5,
                                  marginLeft: "10px",
                                  marginTop: "10px",
                                }}
                                className={styles.blue_btn}
                                id={course._id}
                                onClick={(e) => deleteCourse(e)}
                              >
                                Delete<i class="bi bi-trash-fill"></i>
                              </button>
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

export default Signup;
