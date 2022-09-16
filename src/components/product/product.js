import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import SideBar from "../sidebar/sidebar";

const Product = () => {
    const [product, setProduct] = useState([]);

     //defeine here local state that store the form data
     const [productCode, setProductCode] = useState("");
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [category, setCategory] = useState("");
     const [price, setPrice] = useState("");
     const [image, setImage] = useState("");

    const handleSubmit = () => {
        const url = 'http://localhost:8000/product/'
        const credentials = { productCode, productName, description, category, price, image }
        axios.post(url, credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message);
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <form style={{width:"50%"}}>
        <h1>Create Article</h1>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={(e) => setProductCode(e.target.value)} id="productCode" placeholder="Product code"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={(e) => setProductName(e.target.value)} id="productName" placeholder="Product Name"/>
            </div>
            <div class="form-group">
                <input type="textarea" class="form-control item" onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Description"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={(e) => setCategory(e.target.value)} id="category" placeholder="Category"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={(e) => setPrice(e.target.value)} id="price" placeholder="price"/>
            </div>
            <div class="form-group">
                <input type="file" class="form-control item" onChange={(e) => setImage(e.target.value)} id="img" accept="image/*"/>
            </div>
            <div class="form-group">
                <button type="button" onClick={handleSubmit} class="btn btn-block create-account">Create Article</button>
            </div>
        </form>
            </div>
            </div>
        </div>


    );

};

export default Product;