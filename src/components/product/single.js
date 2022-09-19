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
        <div></div>

    );

};

export default Home;