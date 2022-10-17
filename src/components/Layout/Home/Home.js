import React, { useEffect, useState } from "react";
import agri from '../../product/home.png';
import { MDBCard, MDBContainer, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Home.css"
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
        console.log("THIS IS THE DATA :"+res.data);
      })
      .catch((err) => {
        console.log("error=>", err);
        console.log("ERROR")
      });
  }, [view]);


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
      <hr/>
        <br/>
        <center>
        <Typography variant="h4" gutterBottom >        Products
      </Typography>
      </center>
    
      <hr/>
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
<br/>
        <hr/>
        <br/>
        <center>
        <Typography variant="h4" gutterBottom >        Advertisements
      </Typography>
      </center>
    
      <hr/>
        <Grid container spacing={3}>
       
              {advertisement
              .map((adver, index) => {
                return (
                  <Grid item xs={4}>
                    <Paper>
                      <div key={index}>
                        <Card>
                          <CardMedia
                            style={{ borderStyle: "none" }}
                            component="img"
                            height="190"
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

                          <div>
                            
                            
                            

                                                                
                          </div>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                );
              })}{" "}
            </Grid>
      </MDBRow>
      </MDBContainer>
    </div>
  );

};

export default Home;