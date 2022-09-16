import React, { useEffect, useState } from "react";

const ProductEdit = () => {
   
    return (
        <div class="registration-form" style={{justifyContent:"center", display:"flex", alignItems:"center"}}>
         <div style={{backgroundColor:"white", width:"70%"}}> 
        <form style={{width:"50%"}}>
        <h1>Create Article</h1>
            <div class="form-group">
                <input type="text" class="form-control item"  id="productCode" placeholder="Product code"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item"  id="productName" placeholder="Product Name"/>
            </div>
            <div class="form-group">
                <input type="textarea" class="form-control item"  id="description" placeholder="Description"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item"  id="category" placeholder="Category"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item"  id="price" placeholder="price"/>
            </div>
            <div class="form-group">
                <input type="file" class="form-control item"  id="img" accept="image/*"/>
            </div>
            <div class="form-group">
                <button type="button"  class="btn btn-block create-account">Create Article</button>
            </div>
        </form>
        </div>  
    </div>


);

};

export default ProductEdit;