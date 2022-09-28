import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
                                    {product.data ?
                                        <h3>{product.data.category}</h3>
                                        : <div></div>}
                                    {product.data ?
                                        <a href="#!"> {product.data.productCode} </a>
                                        : <div></div>}
                                    on August 24, 2022
                                    <br />
                                    <Link to="/">
                                        <Button variant="danger">Pay Now</Button>
                                    </Link>&nbsp;&nbsp;
                                    <Link to="/">
                                        <Button variant="success">Add to Cart</Button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div><br /><br /><br />
            {product.data ?
            <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
            <img src={`${product.data.image}`} alt='...' position='top' style={{height: "100 px", weight:"100px"}}/>
            </div>
            : <div></div>}

            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            {product.data ?
                                <p>{product.data.description}</p>
                                : <div></div>}
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>
                                &middot; Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>

                    </div>
                </div>
            </article>
        </div>

    );

};

export default Single;