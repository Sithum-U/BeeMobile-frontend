import React, { useEffect, useState } from "react";
import agri from '../../product/home.png';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

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

            <div className="container"><br /><br /><br />
                
                            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                                <MDBCol>
                                {product.data ?
                    product.data.map((item) => {
                        return (
                                    <MDBCard style={{width:"400px"}} key={item._id}>
                                        <MDBCardTitle>{item.productName}</MDBCardTitle>
                                        <MDBCardImage
                                            src='https://smedigest.com.ng/wp-content/uploads/2017/10/from-business-name-to-company-registration.jpg'
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <p>{item.description}</p>
                                            <MDBCardText>
                                                <Link to="/mail">
                                                    <Button variant="success" style={{width:"300px"}}>Read More ></Button>
                                                </Link>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    );
                                })
                                : <div></div>}
                                </MDBCol>
                            </MDBRow>
                        


            </div>
        </div>

    );

};

export default Home;