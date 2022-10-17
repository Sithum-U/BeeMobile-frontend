import React, { useEffect, useState } from "react";
import "./product.css";
import axios from 'axios';
import jspdf from "jspdf";
import "jspdf-autotable";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SideBar from "../Layout/sidebar/sidebar";
import SoloAlert from "soloalert";
import "../product/product.css";

const ProductTable = () => {
    const [product, setproduct] = useState([]);
    //Id for update record and delete
    const [id, setId] = useState("");
    //search filter
    const [search, setSearch] = useState('');
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

    const generatePDF = (product) => {

        const doc = new jspdf();
        const tableColumn = [
            "Product Code",
            "Product Name",
            "Description",
            "Category",
            "Price"
        ];

        const tableRows = [];
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];

        product.data.map((product) => {
            const productData = [
                product.productCode,
                product.productName,
                product.description,
                product.category,
                product.price
            ];

            tableRows.push(productData);
        });
        // doc.text("Presentation Marks Report", 14, 16).setFontSize(13);
        doc.text(`Date - ${dateStr}`, 14, 23);

        //right down width height

        // doc.addImage(img, "JPEG", 170, 8, 25, 25);

        doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 10 },
            startY: 35,
        });

        // doc.addImage(img1, "JPEG", 120, 140, 70, 40);
        doc.save("Products.pdf");

    };
    return (
        <div class="registration-form" style={{ justifyContent: "center", display: "flex" }}>
            <SideBar />
            <div style={{ backgroundColor: '#dfe3e9', width: "82%" }}>
                <div className="container"><br /><br />
                <Button variant="secondary" onClick={() => { generatePDF(product) }}>Download</Button> | 
                    <Link to="/product/" >
                        <Button variant="primary">Add Product</Button>
                    </Link><br /><br />
                    <h3 className="bg-dark text-white p-3">Product Table</h3><br />
                    {/* <div>
                        <h4>Search Here</h4>
                        <input type="text" placeholder="Search..." onChange={e => { setSearch(e.target.value) }} />
                    </div> */}
                    <div class="container">

                        <div class="row height d-flex justify-content-center align-items-center">

                            <div class="col-md-6">

                                <div class="form">
                                    <i class="fa fa-search"></i>
                                    <input type="text" class="form-control form-input" placeholder="Search Product..." onChange={e => { setSearch(e.target.value) }} />
                                    <span class="left-pan"><i class="fa fa-microphone"></i></span>
                                </div>

                            </div>

                        </div>

                    </div>
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
                                                product.data.filter((item) => {
                                                    if (search == "") {
                                                        return item
                                                    } else if (item.productName.toLowerCase().includes(search.toLowerCase())) {
                                                        return item
                                                    }
                                                }).map((item) => {
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
                                                                height="100 px" width="100px"
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