import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import fertilizer from './fertilizer.jpg';

const Single = () => {
    const [product, setproduct] = useState([]);
    const [id, setId] = useState("");
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
            
        </div>

    );

};

export default Single;