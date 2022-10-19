import React, { useEffect, useState } from "react";
import agri from "../../product/home.png";
import slider1 from "../Images/slider1.png";
import slider2 from "../Images/slider2.png";
import slider3 from "../Images/slider3.png";
import {
  MDBCard,
  MDBContainer,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Form,
  Dropdown,
} from "react-bootstrap";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const Home = () => {
  const [product, setproduct] = useState([]);
  const [advertisement, setAdvertisement] = useState([]);
  const [view, viewState] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/product/")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        //console.log(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/advertise/view")
      .then((res) => {
        setAdvertisement(res.data);
        console.log("THIS IS THE DATA :" + res.data);
      })
      .catch((err) => {
        console.log("error=>", err);
        console.log("ERROR");
      });
  }, [view]);

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} width="100%" height="500" alt="First slide" />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>AgroPro</h5>
              <p>Improving your Agriculture</p>
            </div> */}
          </div>
          <div class="carousel-item">
            <img src={slider2} width="100%" height="500" alt="First slide" />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>AgrPro</h5>
              <p>Inventing new Methods and Products</p>
            </div> */}
          </div>
          <div class="carousel-item">
            <img src={slider3} width="100%" height="500" alt="First slide" />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>AgrPro</h5>
              <p>Inventing new Methods and Products</p>
            </div> */}
          </div>
        </div>
        {/* <div style={{ backgroundColor: "red" }}>
          <hr />
          <br />
          <center>
            <Typography variant="h4" gutterBottom>
              {" "}
              Products
            </Typography>
          </center>

          <hr />
        </div> */}
        <section id="services" class="service-section pt-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                <div class="section-title text-center mb-70">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    Types of Product we have
                  </span>
                  <h1 class="wow fadeInUp" data-wow-delay=".4s">
                    All Essentials You Need
                  </h1>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-10">
                <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                  <div class="icon">
                    <img src="assets/img/service/fertilizer.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Fertilizers</h3>
                    <p>
                      Natural or artificial substance containing the chemical
                      elements that improve growth and productiveness of plants,
                      which enhance the natural fertility of the soil
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-service wow fadeInUp" data-wow-delay=".4s">
                  <div class="icon">
                    <img src="assets/img/service/legumes.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Legumes</h3>
                    <p>
                      Plant from the Fabaceae family that would include its
                      leaves, stems, and pods.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-service wow fadeInUp" data-wow-delay=".6s">
                  <div class="icon">
                    <img src="assets/img/service/lifestock.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Live Stock</h3>
                    <p>
                      Domesticated animals raised in an agricultural setting to
                      provide labor and produce commodities such as meat, eggs,
                      milk, fur, leather.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                  <div class="icon">
                    <img src="assets/img/service/herbs.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Herbs</h3>
                    <p>
                      widely distributed and widespread group of plants,
                      excluding vegetables and other plants consumed for
                      macronutrients
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-service wow fadeInUp" data-wow-delay=".4s">
                  <div class="icon">
                    <img src="assets/img/service/service-icon-2.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Vegitables</h3>
                    <p>
                      parts of plants that are consumed by humans or other
                      animals as food. The original meaning is still commonly
                      used and is applied to plants
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-service wow fadeInUp" data-wow-delay=".6s">
                  <div class="icon">
                    <img src="assets/img/service/fruits.svg" alt="" />
                  </div>
                  <div class="content">
                    <h3>Fruits</h3>
                    <p>
                      The sweet and fleshy product of a tree or other plant that
                      contains seed and can be eaten as food..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <section id="home" class="service-section pt-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-8">
              <div class="section-title text-center mb-70">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Products with all the nessesary details
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  Purchase Our Finest Products At Your Door Step
                </h1>
              </div>
            </div>
          </div>
          <MDBContainer>
            <MDBRow className="align-items-center mt-5 mb-6">
              <div class="row">
                {product.data ? (
                  product.data.map((item) => {
                    return (
                      <div class="col-4">
                        <MDBCol>
                          <MDBCard
                            style={{
                              width: "300px",
                              height: "200 px",
                              justifyContent: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <MDBCardTitle>{item.productName}</MDBCardTitle>
                            <MDBCardImage
                              src={`${item.image}`}
                              width="300"
                              height="200"
                              alt="..."
                              position="top"
                            />
                            <MDBCardBody>
                              <div className="truncate">
                                <p>{item.description}</p>
                              </div>
                              <MDBCardText>
                                <Link to={"/product/single/" + item._id}>
                                  <Button
                                    variant="success"
                                    style={{ width: "200px" }}
                                  >
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
      </section>

      <section id="home" class="service-section pt-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-8">
              <div class="section-title text-center mb-70">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Hurry !! Checkout what's new 😉😉😉.
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  Advertisements
                </h1>
              </div>
            </div>
          </div>
          <MDBContainer>
            <MDBRow>
              <Grid container spacing={3}>
                {advertisement.map((adver, index) => {
                  return (
                    <Grid item xs={3}>
                      <Paper elevation={5}>
                        <div key={index}>
                          {/* <Card> */}
                          <CardMedia
                            style={{ borderStyle: "none" }}
                            component="img"
                            height="150"
                            image=""
                            src={`http://localhost:3000/${adver.photo}`}
                            title="Image"
                          />
                          <CardContent>
                            <Typography gutterBottom component="h2">
                              {adver.title}
                            </Typography>
                            <Typography
                              style={{ fontSize: "12px" }}
                              color="textSecondary"
                              component="p"
                            >
                              {adver.description}
                            </Typography>
                            <Typography
                              style={{ fontSize: "11px", textAlign: "end" }}
                              component="div"
                              color="textSecondary"
                            >
                              Starting From :{" "}
                              <Typography color="textPrimary" component="span">
                                {adver.date}
                              </Typography>
                            </Typography>
                          </CardContent>

                          <div></div>
                          {/* </Card> */}
                        </div>
                      </Paper>
                    </Grid>
                  );
                })}{" "}
              </Grid>
            </MDBRow>
          </MDBContainer>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Home;