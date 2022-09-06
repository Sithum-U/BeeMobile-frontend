import React from "react";
// import "./Footer.css";
// import logo from "../backgroundlogo.png";
import "./style.css";
import playStore from "./playStore.png";
import appStore from "./appStore.png";

// import SearchBar from "material-ui-search-bar";
// import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src={playStore} />
              <img src={appStore} />
            </div>
          </div>
          <div class="footer-col-2">
            {/* <img src="image/logo-white.png"> */}
            <p>
              Our Purpose is to sustainably make the pleasure and benifits of
              sports accessible to the many.
            </p>
          </div>
          <div class="footer-col-3">
            <h3>UseFul Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div class="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <footer className="footer">
    //     <div className="search">
    //       {/* <SearchBar placeholder="Search From Here" /> */}
    //     </div>
    //     <div className="container">
    //       <div className="row">
    //         <div className="footer-col">
    //           <ul>
    //             <li>
    //               <img className="image" src={logo} alter="Agro Pro Image" />
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="footer-col">
    //           <h4>Agro Pro</h4>
    //         </div>
    //         <div className="footer-col">
    //           <h4>company</h4>
    //           <ul>
    //             <li>
    //               <a href="#">about us</a>
    //             </li>
    //             <li>
    //               <a href="#">our services</a>
    //             </li>
    //             <li>
    //               <a href="#">privacy policy</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="footer-col">
    //           <h4>get help</h4>
    //           <ul>
    //             <li>
    //               <a href="#">FAQ</a>
    //             </li>
    //             <li>
    //               <a href="#">shipping</a>
    //             </li>
    //             <li>
    //               <a href="#">returns</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="footer-col">
    //           <h4>online shop</h4>
    //           <ul>
    //             <li>
    //               <a href="#">watch</a>
    //             </li>
    //             <li>
    //               <a href="#">bag</a>
    //             </li>
    //             <li>
    //               <a href="#">shoes</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="footer-col">
    //           <h4>follow us</h4>
    //           <div className="social-links">
    //             <a href="#">{/* <InstagramIcon /> */}</a>
    //             <a href="#">
    //               <i className="fab fa-twitter"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fab fa-instagram"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fab fa-linkedin-in"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   {/* Footer End */}
    // </div>
  );
}
export default Footer;
