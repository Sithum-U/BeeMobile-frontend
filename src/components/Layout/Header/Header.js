import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import logo from "../Images/backgroundlogo.png";
import cart from "../Images/sprite.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

export default function Header({ countCartItems }) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    window.location.href = "/login";
  };
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/cartItem/")
      .then((res) => res.json())
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);
  console.log(cartItems);

  return (
    // <div class="container">
    <header>
      <div class="logo">
        <img src={logo} width="125px" />
      </div>
      {/* -----------newley changed header part-------------------- */}
      <div>
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <div
              class="collapse navbar-collapse sub-menu-bar"
              id="navbarSupportedContent"
            >
              <ul id="nav" class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#services">
                    Services
                  </a>
                </li>

                <li class="nav-item">
                  <a class="page-scroll" href="#how">
                    How It Works
                  </a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#testimonial">
                    Testimonials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="/home">
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <nav>
        <ul id="MenuItems">
          <li>
            <a href="/home">Products</a>
          </li>
        </ul>
      </nav> */}

      {/* {CartItems ? ( */}
      <Badge
        className="zoomBadge"
        badgeContent={cartItems.length}
        color="success"
      >
        <li>
          <a href="/Cart">
            <img
              className="zoomCart"
              src={cart}
              width="50px"
              height="50px"
              color="#fff"
            />
          </a>
        </li>
      </Badge>
      {/* ) : (
        <li>
          <a href="/Cart">
            <img
              className="zoomCart"
              src={cart}
              width="50px"
              height="50px"
              color="#fff"
            />
          </a>
        </li>
      )} */}
      <div className="navItems">
        <div>
          <div style={{ display: "flex" }}>
            <a href="/register">
              <button className="navButton">Register</button>
            </a>
            <a href="/login">
              <button className="navButton">
                Login <FontAwesomeIcon icon={faRightToBracket} />
              </button>
            </a>
          </div>
          {userInfo ? (
            <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </div>
      </div>
    </header>
  );
}
