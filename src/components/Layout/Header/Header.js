import React from "react";
import logo from "../backgroundlogo.png";
import "./Header.css";

export default function Header() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <header>
      <img src={logo} alter="Agro Pro Image" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
    //  <section className="banner"></section>
  );
}
