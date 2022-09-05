import React from "react";

export default function Cart() {
  return (
    <div class="small-container">
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
  );
}
