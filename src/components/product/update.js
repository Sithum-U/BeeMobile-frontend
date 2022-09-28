import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";
import { Link, useParams } from "react-router-dom";

const ProductUpdate = () => {
    const [product, setProduct] = useState({
        productCode: "",
        productName: "",
        description: "",
        category: "",
        price: "",
        image: "",
    });
    const [update, setUpdate] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/product/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUpdate(data);
            console.log(data);
          });
      }, []);

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

            const res = await fetch(`http://localhost:8000/product/${id}`,{
                method: "POST",
                body: formData,
            });
            if(res.ok){
                alert("Details Updated Successfully");
                window.location.reload();
            }

        }catch(error){
            console.log(error);
        }
      }
    
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <form style={{width:"50%"}} encType="multipart/form-data">
        <h1>Create Article</h1>
            <div class="form-group">
                <input type="text" class="form-control item" defaultValue={update.data.productCode} onChange={handleChange('productCode')} name="productCode" placeholder="Product code"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" defaultValue={update.data.productName} onChange={handleChange('productName')} name="productName" placeholder="Product Name"/>
            </div>
            <div class="form-group">
                <input type="textarea" class="form-control item" defaultValue={update.data.description} onChange={handleChange('description')} name="description" placeholder="Description"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" defaultValue={update.data.category} onChange={handleChange('category')} name="category" placeholder="Category"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" defaultValue={update.data.price} onChange={handleChange('price')} name="price" placeholder="price"/>
            </div>
            <div class="form-group">
                <input type="file" class="form-control item" defaultValue={update.data.image} accept="image/*" name="image"  onChange={handleChange('image')} />
            </div>
            <div class="form-group">
                <button type="button" onClick={handleSubmit} class="btn btn-block create-account">Update Article</button>
            </div>
        </form>
            </div>
            </div>
        </div>


    );

};

export default ProductUpdate;