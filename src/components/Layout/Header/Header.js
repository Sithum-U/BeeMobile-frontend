import React from "react";
import Badge from "@mui/material/Badge";
import logo from "../Images/backgroundlogo.png";
import cart from "../Images/cart.png";
// import "../style.css";
import "./Header.css";

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
      <Badge badgeContent={4} color="success">
        <img src={cart} width="50px" height="50px" color="#fff" />
      </Badge>
      <img src="image/menu.png" class="menu-icon" onclick="menutoggle()" />
    </header>
    // </div>
    // <header>
    //   <img src={logo} alter="Agro Pro Image" />
    //   <ul>
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //     <li>
    //       <a href="#">About</a>
    //     </li>
    //     <li>
    //       <a href="#">Services</a>
    //     </li>
    //     <li>
    //       <a href="#">Portfolio</a>
    //     </li>
    //     <li>
    //       <a href="#">Team</a>
    //     </li>
    //     <li>
    //       <a href="#">Contact</a>
    //     </li>
    //   </ul>
    // </header>
    //  <section className="banner"></section>
  );
}
