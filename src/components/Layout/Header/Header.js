import React from "react";
import Badge from "@mui/material/Badge";
import logo from "../Images/backgroundlogo.png";
import cart from "../Images/cart.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";

export default function Header({ countCartItems }) {
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
                  <a href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#about">
                    About
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
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <nav>
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
      </nav> */}

      {countCartItems ? (
        <Badge
          className="zoomBadge"
          badgeContent={countCartItems}
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
      ) : (
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
      )}
      <div className="navItems">
        <div>
          <a href="/signup">
            <button className="navButton">Register</button>
          </a>
          <a href="/login">
            <button className="navButton">
              <FontAwesomeIcon icon={faRightToBracket} /> Login
            </button>
          </a>
          <NavDropdown title="Sithum Udara" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </header>
  );
}
