import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import "./login.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3001/landingPage">
        AgroPro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  // const [error, setError] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //     username: data.get('username'),
    //     password: data.get('password'),
    // });
    // try {
    //     const res = await fetch("http://localhost:8000/auth/login", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         }),
    //         headers: { "Content-Type": "application/json" },
    //     });

    //     const data = await res.json();
    //     // localStorage.setItem("token", data.token);

    //     if (data.message == "Login successful") {
    //         console.log(data.user.isAdmin);
    //         console.log("Hello");
    //         if (data.user.isAdmin == false) {
    //             console.log("Hello");
    //             window.location.href = "/";
    //         } else if (data.user.isAdmin == true) {
    //             window.location.href = "/adminPage";
    //         }
    //     } else {
    //         console.log("Invalid user Name or password");
    //     }
    // } catch (error) {
    //     if (
    //         error.response &&
    //         error.response.status >= 400 &&
    //         error.response.status <= 500
    //     ) {
    //         setError(error.response.data.message);
    //     }
    // }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8000/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      if (data.isAdmin == false) {
        console.log("Hello");
        window.location.href = "/";
      } else if (data.isAdmin == true) {
        window.location.href = "/adminPage";
      }
      setLoading(false);
    } catch (error) {
      //   setError(error.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618775293437-91b843a7bcc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="lock">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btnSignin"
              >
                Sign In
              </Button>
              <Grid container className="gridContainer">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
