import React, { useEffect, useState } from "react";
import agri from '../../product/home.png';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/product/")
            .then((res) => res.json())
            .then((data) => {
                setproduct(data);
                //console.log(data);
            });
    }, []);

    return (
        <div>
            <div style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                <img src={agri} width="1500" height="400" />
            </div>
            {product.data ?
                product.data.map((item) => {
                    return (
                        <div className="container" key={item._id}><br />

                            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                <MDBCol>
                                    <MDBCard style={{ width: "400px" }}>
                                        <MDBCardTitle>{item.productName}</MDBCardTitle>
                                        <img
                                            src={`${item.image}`}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <div className="truncate">{item.description}</div>
                                            <MDBCardText>
                                                <Link to={"/product/single/" + item._id}>
                                                    <Button variant="success" style={{ width: "300px" }}>Read More ></Button>
                                                </Link>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>

                        </div>
                    );
                })
                : <div></div>}
        </div>

    );

};

export default Home;