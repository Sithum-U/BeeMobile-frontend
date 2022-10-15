import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import { red } from "@mui/material/colors";
// import Alert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";

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
        <div>
          {payments.length === 0 || payments.length > 2 ? (
            <div>
              <Grid
                item
                xs={5}
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
              >
                <TextField
                  type="text"
                  placeholder="Enter course name"
                  value={email}
                  style={{ margin: 5 }}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  required
                  name="cardInformation"
                />
              </Grid>
              <input
                type="text"
                placeholder="Enter course name"
                value={email}
                style={{ margin: 5 }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter course free"
                value={cardInformation}
                style={{ margin: 5 }}
                onChange={(e) => setCardInformation(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter course free"
                value={expDate}
                style={{ margin: 5 }}
                onChange={(e) => setExpDate(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter course free"
                value={cvc}
                style={{ margin: 5 }}
                onChange={(e) => setcvc(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter course name"
                value={nameOnCard}
                style={{ margin: 5 }}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter course free"
                value={zip}
                style={{ margin: 5 }}
                onChange={(e) => setzip(e.target.value)}
              />
              <button onClick={(e) => saveData(e)} style={{ margin: 5 }}>
                Submit
              </button>
              <br />
            </div>
          ) : (
            <></>
          )}

          <table>
            <tr>
              <th>Course Name</th>
              <th>Course Fee</th>
              <th>Actions</th>
              <th>Actions</th>
              <th>Actions</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
            {payments &&
              payments.length > 0 &&
              payments.map((course, index) => (
                <tr key={index}>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="text"
                        value={editEmail}
                        onChange={(e) => seteditEmail(e.target.value)}
                      />
                    ) : (
                      course.email
                    )}
                  </td>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="number"
                        value={editCardInformation}
                        onChange={(e) => seteditCardInformation(e.target.value)}
                      />
                    ) : (
                      course.cardInformation
                    )}
                  </td>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="number"
                        value={editExpDate}
                        onChange={(e) => seteditExpDate(e.target.value)}
                      />
                    ) : (
                      course.expDate
                    )}
                  </td>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="number"
                        value={editcvc}
                        onChange={(e) => seteditcvc(e.target.value)}
                      />
                    ) : (
                      course.cvc
                    )}
                  </td>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="text"
                        value={editNameOnCard}
                        onChange={(e) => seteditNameOnCard(e.target.value)}
                      />
                    ) : (
                      course.nameOnCard
                    )}
                  </td>
                  <td>
                    {isEditClick && course._id === editId ? (
                      <input
                        type="number"
                        value={editZip}
                        onChange={(e) => seteditZip(e.target.value)}
                      />
                    ) : (
                      course.zip
                    )}
                  </td>
                  <td>
                    <button id={course._id} onClick={(e) => onEditClick(e)}>
                      {isEditClick && course._id === editId
                        ? "Cancel"
                        : "Update"}
                    </button>
                    {isEditClick && course._id === editId && (
                      <button onClick={(e) => updateData(e)}>Save</button>
                    )}
                    <button id={course._id} onClick={(e) => deleteCourse(e)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Signup;
