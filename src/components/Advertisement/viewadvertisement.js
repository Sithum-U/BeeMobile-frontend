import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBCol } from "mdbreact";
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
// import jspdf from "jspdf";
// import "jspdf-autotable";
// import img from "../components/wsLogo.jpg";
// import img1 from "../components/signature.jpg";
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
  const [vupdate, viewupdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  
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
 
    // const generatePDF = (tickets) => {
    //   const doc = new jspdf();
    //   const tableColumn = [
    //     "title",
    //     "description",
    //     "date",
    //     "email",
    //     "photo",
    //   ];
    //   const tableRows = [];
    //   const date = Date().split(" ");
    //   const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    //   tickets.map((ticket) => {
    //     const ticketData = [
    //       ticket._id,
    //       ticket.title,
    //       ticket.description,
    //       ticket.date,
    //       ticket.email,
    //       ticket.photo,
    //     ];
    //     tableRows.push(ticketData);
    //   });
    //   doc.text("Hotel.lk", 70, 8).setFontSize(13);
    //   doc.text("Hotel Details Report", 14, 16).setFontSize(13);
    //   doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);

    //   doc.addImage(img, "JPEG", 170, 8, 25, 25);
    //   doc.autoTable(tableColumn, tableRows, {
    //     styles: { fontSize: 8 },
    //     startY: 35,
    //   });
    //   doc.addImage(img1, "JPEG", 120, 140, 70, 40);
    //   doc.save("Branch Details Report.pdf");
    // };


  const UpdateAdvertisement = (id) => {
    axios
      .get(`http://localhost:8000/advertise/update/${id}`)
      .then((res) => {
        window.location = "/advertisement/view";
        alert("Advertisement Updated");
        if (!viewupdate) {
          viewupdate(true);
        } else {
          viewupdate(false);
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



              {/* <button
          type="button"
          class="btn btn-secondary btn-sm"
          onClick={() => generatePDF(hotel)}
        >
          GenerateReport
        </button> */}


              <MDBCol md="6">
          <input
            class="form-control"
            id="myInput"
            name="title"
            type="text"
            placeholder="Search..."
            
            onChange={(e) => {
              setSearchTerm(e.target.value);
             
            }}
            
          />
        </MDBCol>
    <br></br>

        
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
                            {/* <Button
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
                            </Button> */}
                            <Link to={"/advertise/update/" + adver._id}>

                                                                    <Button Button
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                padding:"5px"
                              }}
                              size="medium"
                              color="primary"
                              className={"m-2"}startIcon={<UpdateIcon/>}
                              onClick={UpdateAdvertisement.bind(this, adver._id)}
                            >Update</Button>|

                                                                </Link>
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