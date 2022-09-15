import React from "react";
import Badge from "@mui/material/Badge";
import logo from "../Images/backgroundlogo.png";
import cart from "../Images/cart.png";
// import "../style.css";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    // <div class="container">
    <header>
      <div class="logo">
        <img src={logo} width="125px" />
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>

      <Badge className="zoomBadge" badgeContent={3} color="success">
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
    </header>
  );
}
