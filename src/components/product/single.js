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

    return (
        <div>
            <div class="masthead" >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{product.productName}</h1>
                            <h2 class="subheading">Creating Fertilizers for the Agriculture</h2> - <h3></h3>
                            <span class="meta">
                                Created by Advisor
                                <a href="#!"> J.S.K Karunarathna</a>
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