import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ProductTable = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/product/")
            .then((res) => res.json())
            .then((data) => {
                setproduct(data);
                //console.log(data);
            });
    }, []);
    return(
        <div style={{ backgroundColor: 'white' }}>
                    <div className="container"><br />
                        <h3 className="bg-dark text-white p-3">Product Table</h3><br />
                        <div shadow='0' border='info' background='white' >
                            <div>
                                <div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover table-bordered">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Product Code</th>
                                                    <th>Product Name</th>
                                                    <th>Description</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product.data ?
                                                    product.data.map((item) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <td>{item.productCode}</td>
                                                                <td>{item.productName}</td>
                                                                <td>{item.description}</td>
                                                                <td>{item.category}</td>
                                                                <td>{item.price}</td>
                                                                <td>{item.image}</td>
                                                                <td style={{ minWidth: 190 }}>
                                                                    <Button size="sm" variant="warning">Edit</Button>|
                                                                    <Button size="sm" variant="danger">Delete</Button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                    : <div></div>}

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default ProductTable;