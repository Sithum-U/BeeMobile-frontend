import React, { useState } from "react";
import "../../Layout/style.css";
import "./cart.css";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@material-ui/core/Grid";
// import { MDBCol } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
export default function Cart() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contract, setContract] = useState("");
  const [branch, setBranch] = useState("");
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="cartHeader">
          <Grid item xs={12}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              // value={supplierName}
              label="Branch Willing To Supply"
              sx={{ width: 395 }}
              onChange={(e) =>
                setContract({
                  ...contract,
                  branchWillingToSupply: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>Branch Willing To Supply </em>
              </MenuItem>
              {branch
                ? branch.map((bran) => {
                    return (
                      <MenuItem value={bran.branchName}>
                        {bran.branchName}
                      </MenuItem>
                    );
                  })
                : null}
            </Select>
          </Grid>
          {/* <MDBCol md="6">
            <input
              class="form-control"
              id="myInput"
              type="text"
              placeholder="Search.."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </MDBCol> */}
          <div className="search">
            <input type="text" name="search" placeholder="Search.." />
          </div>
        </div>
        <div className="card">
          <div className="FormContainer">
            <div class="small-container">
              {/* <div className="formContainer"> */}
              <table>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                <tr>
                  <td>
                    <div class="cart-info">
                      {/* <img src="image/buy-1.jpg"> */}
                      <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price: $50.00</small>
                        <br />
                        <a href="">Remove</a>
                      </div>
                    </div>
                  </td>
                  {/* <td><input type="number" value="1"></td> */}
                  <td>$50.00</td>
                </tr>
                <tr>
                  <td>
                    <div class="cart-info">
                      {/* <img src="image/buy-2.jpg"> */}
                      <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price: $75.00</small>
                        <br />
                        <a href="">Remove</a>
                      </div>
                    </div>
                  </td>
                  {/* <td><input type="number" value="1"></td> */}
                  <td>$75.00</td>
                </tr>
                <tr>
                  <td>
                    <div class="cart-info">
                      {/* <img src="image/buy-3.jpg"> */}
                      <div>
                        <p>Red Printed Tshirt</p>
                        <small>Price: $75.00</small>
                        <br />
                        <a href="">Remove</a>
                      </div>
                    </div>
                  </td>
                  {/* <td><input type="number" value="1"></td> */}
                  <td>$75.00</td>
                </tr>
              </table>

              <div class="total-price">
                <table>
                  <tr>
                    <td>Subtotal</td>
                    <td>$200.00</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>$35.00</td>
                  </tr>
                  <tr>
                    <td>Toatal</td>
                    <td>$230.00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="cartButtons">
            <Link to="">
              <button type="submit">Continue Shopping</button>
            </Link>
            <Link to="/checkout">
              <button type="submit">Proceed To Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
