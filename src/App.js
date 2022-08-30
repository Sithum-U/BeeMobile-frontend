import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import checkout from "./components/PurchaseOrder/checkout";
import PaymentForm from "./components/PurchaseOrder/PaymentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/checkout" component={checkout} /> */}
        <Route path="/PaymentForm" exact element={<PaymentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
