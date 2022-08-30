import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import checkout from "./components/PurchaseOrder/checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" exact element={<checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
