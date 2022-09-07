import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:9000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h2>Agro Pro</h2>
          {/* <h4>Already have an account ? </h4>
          <hr />
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link> */}
          <h1>Secure Payments</h1>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            {/* <Grid container spacing={2}> */}
            <div
              sx={{
                "& > :not(style)": { m: 5, width: "50ch" },
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  "& > :not(style)": { m: 5, width: "50ch" },
                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue="Email"
                />
                <br />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="outlined-required"
                  label="Card Information"
                  defaultValue="Card Information"
                />
              </Grid>
              <Grid container spacing={5}>
                <Grid item xs={5}>
                  <TextField
                    id="date"
                    label="ExpieryDate"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    id="outlined-number"
                    label="CVC"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="outlined-required"
                  label="Name on Card"
                  defaultValue="Name on Card"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="outlined-required"
                  label="Region"
                  defaultValue="Region"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  id="outlined-required"
                  label="ZIP"
                  defaultValue="ZIP"
                />
              </Grid>
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.blue_btn}>
              Review Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
