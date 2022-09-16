import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>
);
