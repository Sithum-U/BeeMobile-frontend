import React, { useEffect, useState } from "react";
import agri from '../../product/home.png';
import slider2 from '../Images/slider2.png';
import slider3 from '../Images/slider3.png';
import { MDBCard, MDBContainer, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Home.css"

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
      {/* <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={agri} width="1500" height="400" />
        <br/><br/>
      </div> */}
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <video playsinline="playsinline" width="100%" autoplay="autoplay" height="500" muted="muted" loop="loop">
        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider2} width="1550" height="500" alt="First slide"/>
    <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={slider3} width="1550" height="500" alt="First slide"/>
    <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      <MDBContainer>
      <MDBRow className="align-items-center mt-5 mb-6">
        <div class="row">
          {product.data ? (
            product.data.map((item) => {
              return (
                <div class="col-4">
                  <MDBCol>
                    <MDBCard style={{ width: "300px", justifyContent: "center", display: "flex", alignItems: "center" }}>
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
      </MDBContainer>
    </div>
  );

};

export default Home;