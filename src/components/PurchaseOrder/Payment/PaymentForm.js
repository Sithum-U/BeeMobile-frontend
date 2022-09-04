import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { FaUserAlt } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://fullstackregistration.herokuapp.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <hr />
            <h1>
              {" "}
              LOGIN
              {/* <FaUserAlt /> LOGIN */}
            </h1>
            <hr />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              // class="fontAwesome"&#xf007;
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
            <a href="">Forgot Password</a>
          </form>
        </div>
        <div className={styles.right}>
          <h4>Not a member ?</h4>
          <hr />

          <Link to="/signup">
            <button
              type="button"
              variant="outline-info"
              className={styles.white_btn}
            >
              SignUp Now
            </button>
          </Link>
          {/* <hr />
          <h1>
            <FcGoogle />
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
