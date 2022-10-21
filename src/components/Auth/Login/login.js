import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";
import "./login.css";
// import axios from "axios";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //   useEffect(() => {
  //     if (userInfo) {
  //       window.location.href = "/";
  //     }
  //   }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));

    // try {
    //   const config = {
    //     "Content-type": "application/json",
    //   };

    //   setLoading(true);
    //   const { data } = await axios.post(
    //     "http://localhost:8000/users/login",
    //     {
    //       email,
    //       password,
    //     },
    //     config
    //   );
    //   console.log(data);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    //   console.log(email, password);
    // } catch (error) {
    //   setError(error.response.data.message);
    //   setLoading(false);
    // }
  };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default Login;
