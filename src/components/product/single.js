import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const Single = () => {
    const [product, setproduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setproduct(data);
                //console.log(data);
            });
    }, []);
    console.log(product);

    return (
        <div>
            <div class="masthead" >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                        {product.data ?
                            <h1>{product.data.productName}</h1>
                        : <div></div>}
                            
                            
                            <span class="meta">
                                Category : 
                                <h3>{product.data.category}</h3>
                                <a href="#!"> {product.data.productCode} </a>
                                on August 24, 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div><br/><br/><br/>
        </div>

    );

};

export default Single;