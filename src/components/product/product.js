import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";

const Product = () => {
    const [product, setProduct] = useState([]);

     //defeine here local state that store the form data
     const [productCode, setProductCode] = useState("");
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [category, setCategory] = useState("");
     const [price, setPrice] = useState("");
     const [image, setImage] = useState("");
     const [formDtata, setFormDtata] = useState("");
     const [progressPercent, setProgressPercent] = useState(0);

    //  const onChangeFile = e => {
    //     setImage(e.target.files[0]);
    //  }
    //  //upload image
     const upload = (e) => {
        setImage(e.target.files[0]);
     }

    // setProgressPercent(0)
    // const options = {
    //     onUploadProgress: (progressEvent) => {
    //         const {loaded,total} = progressEvent
    //         let percent = Math.floor ((loaded * 100) / total)
    //         console.log(`${loaded}kb of ${total}kb | ${percent}%`);
    //         setProgressPercent(percent)
    //     }
    // }
     
    const handleSubmit =() => {
        const url = 'http://localhost:8000/product/'
        const credentials = { productCode, productName, description, category, price, image }
        axios.post(url, credentials)
            .then(response => {
                    const result = response.data
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
    console.log(image.name);
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <form style={{width:"50%"}} encType="multipart/form-data">
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
                <input type="file" filename="image" class="form-control item" id="image"  onChange={upload} />
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