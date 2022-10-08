import React, { useEffect, useState } from "react";
import Cart from "../../PurchaseOrder/Cart/Cart";
import axios from "axios";
import agri from "../../product/home.png";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
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
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={agri} width="1500" height="400" />
        <br/><br/>
      </div>
      <MDBRow>
        <div class="row">
          {product.data ? (
            product.data.map((item) => {
              return (
                <div class="col-4">
                  <MDBCol>
                    <MDBCard style={{ width: "300px"}}>
                      <MDBCardTitle>{item.productName}</MDBCardTitle>
                      <MDBCardImage
                        src={`${item.image}`} width="300" height="200"
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <div className="truncate">
                          <p>{item.description}</p>
                        </div>
                        <MDBCardText>
                          <Link to={"/product/single/" + item._id}>
                            <Button variant="success" style={{ width: "200px" }}>
                              Read More
                            </Button>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </MDBRow>
    </div>
  );
};

export default Home;
