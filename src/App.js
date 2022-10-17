import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaymentForm from "./components/PurchaseOrder/Payment/PaymentForm";
// import Cart from "./components/PurchaseOrder/Cart/Cart";
// import Checkout from "./components/PurchaseOrder/checkout";
import Cart from "./components/PurchaseOrder/Cart/Cart";
import Products from "./components/PurchaseOrder/Cart/Products";
import Checkout from "./components/PurchaseOrder/checkout/checkout";
import Product from "./components/product/product";
import ProductTable from "./components/product/productTable";
import ProductDetails from "./components/product/productDetails";
import ProductAgri from "./components/product/productAgri";
import ProductInnovation from "./components/product/productInnovation";
import Rating from "./components/PurchaseOrder/Rating/rating";
import LandingPage from "./components/Layout/LandingPage";
import Home from "./components/Layout/Home/Home";
import Single from "./components/product/single";
import ProductUpdate from "./components/product/update";
import Login from "./components/Auth/Login/login";
import Signup from "./components/Auth/signup/Signup";
import Admin from "./components/Admin";
/**
 * advertisement
 */
import Advertisement from "./components/Advertisement/advertisement.js";
import ViewAdvertisement from "./components/Advertisement/viewadvertisement.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/checkout" component={checkout} /> */}
        {/* <Route path="/PaymentForm" exact element={<PaymentForm />} /> */}
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/Cart" exact element={<Cart />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product/edit/:id" exact element={<ProductUpdate />} />
        <Route path="/productTable" exact element={<ProductTable />} />

        <Route path="/rating" exact element={<Rating />} />
        <Route path="/" exact element={<LandingPage />} />
        <Route
          path="/productDetails/fertilizer"
          exact
          element={<ProductDetails />}
        />

        <Route path="/product/single/:id" exact element={<Single />} />

        <Route path="/advertisement/advertise" element={<Advertisement />} />
        <Route path="/advertisement/view" element={<ViewAdvertisement />} />

        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
