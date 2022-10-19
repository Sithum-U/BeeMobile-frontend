// import React from "react";
// import "./Footer.css";
// import playStore from "../Images/playStore.png";
// import appStore from "../Images/appStore.png";
// import backgroundlogo from "../Images/backgroundlogo.png";

// // import SearchBar from "material-ui-search-bar";
// // import InstagramIcon from "@mui/icons-material/Instagram";

// function Footer() {
//   return (
//     <div class="footer">
//       <div class="container">
//         <div class="row">
//           <div class="footer-col-2">
//             <img src={backgroundlogo} />
//             {/* <h3>Agro Pro</h3> */}
//           </div>
//           <div class="footer-col-3">
//             <h3>UseFul Links</h3>
//             <ul>
//               <li>Coupons</li>
//               <li>Blog Post</li>
//               <li>Return Policy</li>
//               <li>Join Affiliate</li>
//             </ul>
//           </div>
//           <div class="footer-col-4">
//             <h3>Follow Us</h3>
//             <ul>
//               <li>Facebook</li>
//               <li>Twitter</li>
//               <li>Instagram</li>
//               <li>Youtube</li>
//             </ul>
//           </div>
//           <div class="footer-col-1">
//             <h3>Download Our App</h3>
//             <p>Download App for Android and ios mobile phone.</p>
//             <div className="app-logo">
//               <img src={playStore} />
//               <img src={appStore} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div>
//     //   <footer className="footer">
//     //     <div className="search">
//     //       {/* <SearchBar placeholder="Search From Here" /> */}
//     //     </div>
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="footer-col">
//     //           <ul>
//     //             <li>
//     //               <img className="image" src={logo} alter="Agro Pro Image" />
//     //             </li>
//     //           </ul>
//     //         </div>
//     //         <div className="footer-col">
//     //           <h4>Agro Pro</h4>
//     //         </div>
//     //         <div className="footer-col">
//     //           <h4>company</h4>
//     //           <ul>
//     //             <li>
//     //               <a href="#">about us</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">our services</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">privacy policy</a>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //         <div className="footer-col">
//     //           <h4>get help</h4>
//     //           <ul>
//     //             <li>
//     //               <a href="#">FAQ</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">shipping</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">returns</a>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //         <div className="footer-col">
//     //           <h4>online shop</h4>
//     //           <ul>
//     //             <li>
//     //               <a href="#">watch</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">bag</a>
//     //             </li>
//     //             <li>
//     //               <a href="#">shoes</a>
//     //             </li>
//     //           </ul>
//     //         </div>
//     //         <div className="footer-col">
//     //           <h4>follow us</h4>
//     //           <div className="social-links">
//     //             <a href="#">{/* <InstagramIcon /> */}</a>
//     //             <a href="#">
//     //               <i className="fab fa-twitter"></i>
//     //             </a>
//     //             <a href="#">
//     //               <i className="fab fa-instagram"></i>
//     //             </a>
//     //             <a href="#">
//     //               <i className="fab fa-linkedin-in"></i>
//     //             </a>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </footer>
//     //   {/* Footer End */}
//     // </div>
//   );
// }
// export default Footer;
import React from "react";
import backgroundlogo from "../Images/backgroundlogo.png";

import Typography from "@mui/material/Typography";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-1">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
        <br />
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-1">
                  <img
                    src={backgroundlogo}
                    width="120px"
                    style={{ marginRight: "20px" }}
                  />
                </p>
              </MDBCol>

              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start="12" style={{ zIndex: 0 }}>
                <MDBInput
                  contrast
                  type="email"
                  placeholder="    Email  Address"
                  // label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              {/* <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-1">
                  Subscribe
                </MDBBtn>
              </MDBCol> */}
            </MDBRow>
          </form>
        </section>

        <section className="mb-1">
          <Typography variant="h7" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </Typography>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          AgroPro Solution Providers
        </a>
      </div>
    </MDBFooter>
  );
}
