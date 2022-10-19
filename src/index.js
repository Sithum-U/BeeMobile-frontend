import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <Header />
      <App />
      <Footer />
    </div>
  </Provider>
);
