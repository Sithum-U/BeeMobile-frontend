import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import checkout from "./components/PurchaseOrder/checkout/checkout";
import PaymentForm from "./components/PurchaseOrder/Payment/PaymentForm";
import Cart from "./components/PurchaseOrder/Cart/Cart";
// import Checkout from "./components/PurchaseOrder/checkout";
import Checkout from "./components/PurchaseOrder/checkout/checkout";
import Product from "./components/product/product";
import ProductTable from "./components/product/productTable";
import ProductDetails from "./components/product/productDetails";
import ProductAgri from "./components/product/productAgri";
import ProductInnovation from "./components/product/productInnovation";
import ProductEdit from "./components/product/Edit";
import Home from "./components/Layout/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/checkout" component={checkout} /> */}
        {/* <Route path="/PaymentForm" exact element={<PaymentForm />} /> */}
        <Route path="/home" exact element={<Home />} />
        <Route path="/Cart" exact element={<Cart />} />
        <Route path="/Checkout" exact element={<Checkout />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product/edit/:id" exact element={<ProductEdit />} />
        <Route path="/productTable" exact element={<ProductTable />} />
        <Route path="/productDetails/fertilizer" exact element={<ProductDetails />} />
        <Route path="/productDetails/agri" exact element={<ProductAgri />} />
        <Route path="/productDetails/innovation" exact element={<ProductInnovation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
