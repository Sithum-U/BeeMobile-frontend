import React, { useEffect, useState } from "react";
import "./advertisement.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import FormData from "form-data";


const UpdateAdvertisement = () => {
;
     //defeine here local state that store the form data
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [date, setDate] = useState("");
     const [email, setEmail] = useState("");
     const [photo, setImage] = useState("");

     const onChangeFile = e => {
        setImage(e.target.files[0]);
     }

    const handleSubmit = () => {
       
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("email", email);
      formData.append("photo", photo);

          axios.post("http://localhost:8000/advertise/add", formData).then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message);
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}> 
            <Container className={"pt-3"}>
                  <Card className={"p-5 mb-3"}>
            
             <form style={{width:"70%", marginLeft: 'auto', marginRight:'auto'}} encType="multipart/form-data">
                 <h1 style={{color: "green"}}>Create Advertisement</h1>

                 <div class="input-group">
    <span class="input-group-addon"></span>
    <input type="text" onChange={(e) => setTitle(e.target.value)} id="Title" class="form-control" name="Title" placeholder="Title"/>
  </div>


  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input onChange={(e) => setDescription(e.target.value)} id="productName" type="text" class="form-control" name="Description" placeholder="Description"/>
  </div>

  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input onChange={(e) => setDate(e.target.value)} id="date" type="text" class="form-control" name="Date" placeholder="Date"/>
  </div>

  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" class="form-control" name="email" placeholder="Email"/>
  </div>

 <div class="form-group" style={{marginTop:'10px'}}>
   <input type="file" filename="image" class="form-control item" onChange={onChangeFile} id="img" accept="image/*"/>
</div>




 <div class="form-group" style={{marginTop:'10px'}}> 
  <button type="button" onClick={handleSubmit} class="btn btn-block create-account" 
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "Green",
                color: "#FFF",
                marginTop: '40px'
              }}>Update Advertisement</button>
 </div>
</form>


</Card>
      </Container>


</div>
</div>
</div>



    );

};

export default UpdateAdvertisement;