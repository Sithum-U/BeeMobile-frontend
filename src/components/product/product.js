import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
    return (
        <div class="registration-form" style={{width:"50%"}}>
            <h1>Create Article</h1>
        <form>
            <div class="form-group">
                <input type="text" class="form-control item" id="productCode" placeholder="Product code"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="productName" placeholder="Product Nmae"/>
            </div>
            <div class="form-group">
                <input type="textarea" class="form-control item" id="description" placeholder="Description"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="category" placeholder="Category"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="price" placeholder="price"/>
            </div>
            <div class="form-group">
                <input type="file" class="form-control item" id="img" accept="image/*"/>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-block create-account">Create Article</button>
            </div>
        </form>
    </div>


);

};

export default Product;