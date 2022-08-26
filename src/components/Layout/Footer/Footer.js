import React from "react";
import "./Footer.css";
import logo from "../agrologo.png";

// import SearchBar from "material-ui-search-bar";
// import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="search">
          {/* <SearchBar placeholder="Search From Here" /> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <ul>
                <li>
                  <img className="image" src={logo} alter="Agro Pro Image" />
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Agro Pro</h4>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">{/* <InstagramIcon /> */}</a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
}
export default Footer;
