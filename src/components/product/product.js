import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";
import { Button } from 'react-bootstrap';

const Product = () => {
    const [product, setProduct] = useState({
        productCode: "",
        productName: "",
        description: "",
        category: "",
        price: "",
        image: "",
    });

    const [error, setError] = useState(false);
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
    
    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setProduct({ ...product, [name]: value });
      };
      const handleSubmit = async() => {

        if(productCode.length==0||productName.length==0||description.length==0||category.length==0||price.length==0){
            setError(true);
        }
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
                alert("Details Added Successfully");
                window.location.reload();
            }

        }catch(error){
            console.log(error);
        }
      }
       console.log(product.productCode.length)
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <form style={{width:"50%"}} encType="multipart/form-data">
                <br />
            <h1 style={{ color: "green", justifyContent: "center", display: "flex", alignItems: "center" }}>Create Article</h1><br />
            <div class="form-group">
            <label>Product Code</label>
                <input type="text" class="form-control item" id="productCode" onChange={handleChange('productCode')} name="productCode" placeholder="Product code" required/>
            </div>
            {error && product.productCode.length==0 ?
                    <label className="valid" id="valid">Product Code is required. </label>:""
                    }
            <div class="form-group">
                <label>Product Name</label>
                <input type="text" class="form-control item" onChange={handleChange('productName')} name="productName" placeholder="Product Name"/>
            </div>
            {error && product.productName.length==0 ?
                    <label className="valid" id="valid">Product Name is required</label>:""
                    }
            <div class="form-group">
                <label>Description</label>
                <input type="textarea" class="form-control item" onChange={handleChange('description')} name="description" placeholder="Description"/>
            </div>
            {error && product.description.length==0 ?
                    <label className="valid" id="valid">Description is required</label>:""
                    }
            <div class="form-group">
            <label>Category</label>
                <input type="text" class="form-control item" onChange={handleChange('category')} name="category" placeholder="Category"/>
            </div>
            {error && product.category.length==0 ?
                    <label className="valid" id="valid">Category is required</label>:""
                    }
            <div class="form-group">
                <label>Price</label>
                <input type="text" class="form-control item" onChange={handleChange('price')} name="price" placeholder="price"/>
            </div>
            {error && product.price.length==0 ?
                    <label className="valid" id="valid">Price is required</label>:""
                    }
            <div class="form-group">
                <label>Select Image</label>
                <input type="file" class="form-control item" accept="image/*" name="image"  onChange={handleChange('image')} />
            </div>
            <div class="form-group">
                <Button type="button" variant="success" onClick={handleSubmit} class="btn btn-block create-account">Create Article</Button>
            </div>
        </form>
            </div>
            </div>
        </div>


    );

};

export default Product;