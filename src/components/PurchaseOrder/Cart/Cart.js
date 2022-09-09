// import React, { useState } from "react";
// import "../../Layout/style.css";
// import "./cart.css";

// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Grid from "@material-ui/core/Grid";
// import { MDBCol } from "mdbreact";
// import { Link, useNavigate } from "react-router-dom";

// import Box from "@mui/material/Box";
// export default function Cart() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [contract, setContract] = useState("");
//   const [branch, setBranch] = useState("");
//   return (
//     <div className="signup_container">
//       <div className="signup_form_container">
//         <div className="cartHeader">
//           <Grid item xs={12}>
//             <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               // value={supplierName}
//               label="Branch Willing To Supply"
//               sx={{ width: 395 }}
//               onChange={(e) =>
//                 setContract({
//                   ...contract,
//                   branchWillingToSupply: e.target.value,
//                 })
//               }
//             >
//               <MenuItem value="">
//                 <em>Branch Willing To Supply </em>
//               </MenuItem>
//               {branch
//                 ? branch.map((bran) => {
//                     return (
//                       <MenuItem value={bran.branchName}>
//                         {bran.branchName}
//                       </MenuItem>
//                     );
//                   })
//                 : null}
//             </Select>
//           </Grid>
//           {/* <MDBCol md="6">
//             <input
//               class="form-control"
//               id="myInput"
//               type="text"
//               placeholder="Search.."
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//               }}
//             />
//           </MDBCol> */}
//           <div className="search">
//             <input type="text" name="search" placeholder="Search.." />
//           </div>
//         </div>
//         <div className="card">
//           <div className="FormContainer">
//             <div class="small-container">
//               {/* <div className="formContainer"> */}
//               <table>
//                 <tr>
//                   <th>Product</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div class="cart-info">
//                       {/* <img src="image/buy-1.jpg"> */}
//                       <div>
//                         <p>Red Printed Tshirt</p>
//                         <small>Price: $50.00</small>
//                         <br />
//                         <a href="">Remove</a>
//                       </div>
//                     </div>
//                   </td>
//                   {/* <td><input type="number" value="1"></td> */}
//                   <td>$50.00</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div class="cart-info">
//                       {/* <img src="image/buy-2.jpg"> */}
//                       <div>
//                         <p>Red Printed Tshirt</p>
//                         <small>Price: $75.00</small>
//                         <br />
//                         <a href="">Remove</a>
//                       </div>
//                     </div>
//                   </td>
//                   {/* <td><input type="number" value="1"></td> */}
//                   <td>$75.00</td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div class="cart-info">
//                       {/* <img src="image/buy-3.jpg"> */}
//                       <div>
//                         <p>Red Printed Tshirt</p>
//                         <small>Price: $75.00</small>
//                         <br />
//                         <a href="">Remove</a>
//                       </div>
//                     </div>
//                   </td>
//                   {/* <td><input type="number" value="1"></td> */}
//                   <td>$75.00</td>
//                 </tr>
//               </table>

//               <div class="total-price">
//                 <table>
//                   <tr>
//                     <td>Subtotal</td>
//                     <td>$200.00</td>
//                   </tr>
//                   <tr>
//                     <td>Tax</td>
//                     <td>$35.00</td>
//                   </tr>
//                   <tr>
//                     <td>Toatal</td>
//                     <td>$230.00</td>
//                   </tr>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <div className="cartButtons">
//             <Link to="">
//               <button type="submit">Continue Shopping</button>
//             </Link>
//             <Link to="/checkout">
//               <button type="submit">Proceed To Checkout</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cartstyle.css";

export default function QuantityEdit() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                            fluid
                            className="rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="3"
                          xl="3"
                          className="d-flex align-items-center"
                        >
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            type="number"
                            min="0"
                            defaultValue={1}
                            size="sm"
                          />

                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>

                      <hr className="my-4" />

                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                            fluid
                            className="rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="3"
                          xl="3"
                          className="d-flex align-items-center"
                        >
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            type="number"
                            min="0"
                            defaultValue={1}
                            size="sm"
                          />

                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>

                      <hr className="my-4" />

                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                            fluid
                            className="rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="3"
                          xl="3"
                          className="d-flex align-items-center"
                        >
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            type="number"
                            min="0"
                            defaultValue={1}
                            size="sm"
                          />

                          <MDBBtn color="link" className="px-2">
                            <MDBIcon icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon icon="chevron-left" /> Back to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items 3
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 132.00</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 137.00</MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg">
                        Register
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
