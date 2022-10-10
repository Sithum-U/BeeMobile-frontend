import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SideBar from "../Layout/sidebar/sidebar";
import SoloAlert from "soloalert";

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

    //handle delete function
    async function handleDelete(id) {
        SoloAlert.confirm({
            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {
                try {
                    const result = await (
                        await axios.delete(
                            `http://localhost:8000/product/${id}`
                        )
                    ).status;
                    console.log(result);

                    if (result === 200) {
                        SoloAlert.alert({
                            title: "Welcome!",
                            body: "Deletion is successful",
                            icon: "success",
                            theme: "dark",
                            useTransparency: true,
                            onOk: function () {
                                window.location.reload();
                            },
                        });
                    }
                } catch (err) {
                    SoloAlert.alert({
                        title: "Oops!",
                        body: "Something went wrong",
                        icon: "error",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () { },
                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () { },
                });
            },
        });
    }
    //Id for update record and delete
    const [id, setId] = useState("");
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex" }}>
            <SideBar />
            <div style={{ backgroundColor: '#dfe3e9', width: "82%" }}>
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
                                                            <td><img
                                                                src={`${item.image}`}
                                                                alt="..."
                                                                position="top"
                                                                height= "100 px"  width= "100px"
                                                            /></td>
                                                            <td style={{ minWidth: 190 }}>
                                                                <Link to={"/product/edit/" + item._id}>
                                                                    <Button size="sm" variant="warning">Edit</Button>|
                                                                </Link>
                                                                <Button size="sm" variant="danger" onClick={(e) => {
                                                                    handleDelete(item._id);
                                                                }}>Delete</Button>
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
        </div>
    );
};

export default ProductTable;