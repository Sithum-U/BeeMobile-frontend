import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import checkout from "./components/PurchaseOrder/checkout";
import PaymentForm from "./components/PurchaseOrder/Payment/PaymentForm";
import Cart from "./components/PurchaseOrder/Cart/Cart";
import Checkout from "./components/PurchaseOrder/checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/checkout" component={checkout} /> */}
        <Route path="/PaymentForm" exact element={<PaymentForm />} />
        <Route path="/Cart" exact element={<Cart />} />
        <Route path="/Checkout" exact element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import React, { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";
// function App() {
//   const [product, setProduct] = useState({
//     name: "react from FB",
//     price: "10",
//     productby: "FB",
//   });
//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const header = {
//       "COntent-Type": "application/json",
//     };
//     return fetch(`http://localhost:5000/payment`, {
//       method: "POST",
//       headers: header,
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <StripeCheckout
//           stripeKey="pk_test_51LcQzEELWo6Wp4wPr1qXdwJB9dDbFrSDs80raBO0Nbcua2iH1EObnF5s0pVd8FIxRBfh2VEuDTkBVgxvSijRM0Fi00mMtOfSvK"
//           token={makePayment}
//           name="Buy react"
//         />
//       </header>
//     </div>
//   );
// }
// export default App;
