import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Form,
  Dropdown,
} from "react-bootstrap";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";


// import { useHistory } from "react-router-dom";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function ViewAdvertisement(props) {
  const [advertisement, setAdvertisement] = useState([]);
  const [view, viewState] = useState(false);
  const [vdelete, viewDelete] = useState(false);
  
  // const history = useHistory();
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

 
  const addNewProduct = () => {
    window.location = "/advertisement/advertise";
  };

  const removeAdvertisement = (id) => {
    axios
      .get(`http://localhost:8000/advertise/delete/${id}`)
      .then((res) => {
        window.location = "/advertisement/view";
        alert("Product Deleted Successfuly");
        if (!viewDelete) {
          viewDelete(true);
        } else {
          viewDelete(false);
        }
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };


  const UpdateAdvertisement = (id) => {
    axios
      .get(`http://localhost:8000/advertise/delete/${id}`)
      .then((res) => {
        window.location = "/advertisement/view";
        alert("Advertisement Deleted");
        if (!viewDelete) {
          viewDelete(true);
        } else {
          viewDelete(false);
        }
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };

    return (
      <div>
        <Container className="pt-3">
          <Card className={"p-5 mb-3"}>
            <div className="text-center mb-2">
              <h1 className="form-titles m-0">ADVERTISEMENT MANAGEMENT</h1>
              <Row className="mb-3 align-items-center">
                <Col lg={10}>
                
                </Col>
                <Col lg={2}>
                  <Button
                    style={{ backgroundColor: "#c92e31", color: "white" }}
                    startIcon={<AddIcon />}
                    onClick={addNewProduct}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
              <hr className="divide" />
            </div>
            <Grid container spacing={3}>
              {advertisement.map((adver, index) => {
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
                            title="Contemplative Reptile"
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
                            <Button
                              style={{
                                backgroundColor: "#e13340",
                                color: "white",
                              }}
                              size="medium"
                              color="primary"
                              className={"m-2"}
                              startIcon={<DeleteForeverIcon />}
                              onClick={removeAdvertisement.bind(this, adver._id)}
                            >
                              Delete
                            </Button>
                            <Button
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                padding:"9px"
                              }}
                              size="medium"
                              color="primary"
                              className={"m-2"}
                              onClick={UpdateAdvertisement.bind(this, adver._id)}
                            >
                              Update
                            </Button>
                          </div>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                );
              })}{" "}
            </Grid>
          </Card>
        </Container>
      </div>
    );
  } 


export default ViewAdvertisement;