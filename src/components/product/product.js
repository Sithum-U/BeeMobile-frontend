import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";

const Product = () => {
    const [product, setProduct] = useState({
        productCode: "",
        productName: "",
        description: "",
        category: "",
        price: "",
        image: "",
    });

     //defeine here local state that store the form data
     const [productCode, setProductCode] = useState("");
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [category, setCategory] = useState("");
     const [price, setPrice] = useState("");
     const [image, setImage] = useState("");
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
    
    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setProduct({ ...product, [name]: value });
      };
      const handleSubmit = async() => {
        try{
            let formData = new FormData();
            formData.append('productCode', product.productCode);
            formData.append('productName', product.productName);
            formData.append('description', product.description);
            formData.append('category', product.category);
            formData.append('price', product.price);
            formData.append('image', product.image);

            const res = await fetch('http://localhost:8000/product/',{
                method: "POST",
                body: formData,
            });
            if(res.ok){
                window.location.reload();
            }

        }catch(error){
            console.log(error);
        }
      }
    // const handleSubmit =() => {
    //     const url = 'http://localhost:8000/product/'
    //     const credentials = { productCode, productName, description, category, price, image }
    //     axios.post(url, credentials)
    //         .then(response => {
    //                 const result = response.data
    //                 const { status, message } = result;
    //                 if (status !== 'SUCCESS') {
    //                     alert(message, status)
    //                 }
    //                 else {
    //                     alert(message);
    //                     window.location.reload();
    //                 }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <form style={{width:"50%"}} encType="multipart/form-data">
        <h1>Create Article</h1>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={handleChange('productCode')} name="productCode" placeholder="Product code"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={handleChange('productName')} name="productName" placeholder="Product Name"/>
            </div>
            <div class="form-group">
                <input type="textarea" class="form-control item" onChange={handleChange('description')} name="description" placeholder="Description"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={handleChange('category')} name="category" placeholder="Category"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" onChange={handleChange('price')} name="price" placeholder="price"/>
            </div>
            <div class="form-group">
                <input type="file" class="form-control item" accept="image/*" name="image"  onChange={handleChange('image')} />
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