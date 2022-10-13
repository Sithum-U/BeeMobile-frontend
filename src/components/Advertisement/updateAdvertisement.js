import React, { useEffect, useState } from "react";
import "./advertisement.css";
import axios from 'axios';
import SideBar from "../Layout/sidebar/sidebar";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import FormData from "form-data";
import { useParams } from "react-router-dom";

const UpdateAdvertisement = () => {
;
     //defeine here local state that store the form data
     const { id } = useParams();
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [date, setDate] = useState("");
     const [email, setEmail] = useState("");
     const [photo, setPhoto] = useState("");
     const [update, setUpdate] = useState([]);
     const [adv, setAdv] = useState({

      title: "",

      description: "",

      date: "",

      email: "",

      photo: "",

  });
  const handleChange = (name) => (e) => {

    const value = name === "photo" ? e.target.files[0] : e.target.value;

    setAdv({ ...adv, [name]: value });
  };
     const onChangeFile = e => {
      setPhoto(e.target.files[0]);
     }
     useEffect(() => {

      fetch(`http://localhost:8000/advertise/${id}`)

        .then((res) => res.json())

        .then(res => {

          setUpdate(res.data);

          console.log(res.data);
        });

    }, []);
    const handleSubmit = async(e) => {

      e.preventDefault();
      try{
          let formData = new FormData();

          formData.append('title', adv.title);

          formData.append('description', adv.description);

          formData.append('date', adv.date);

          formData.append('email', adv.email);

          formData.append('photo', adv.photo);
    
          const res = await fetch(`http://localhost:8000/advertise/update/${id}`,{

              method: "PUT",

              body: formData,
          });

          if(res.ok){

              alert("Details Updated Successfully");

              window.location.reload();
          }
      }catch(error){

          console.log(error);
      }
    }
    // const handleSubmit = () => {
       
    //   const formData = new FormData();
    //   formData.append("title", title);
    //   formData.append("description", description);
    //   formData.append("date", date);
    //   formData.append("email", email);
    //   formData.append("photo", photo);

    //       axios.post(`http://localhost:8000/advertise/update/${id}`, formData).then(response => {
    //             const result = response.data;
    //             const { status, message } = result;
    //             if (status !== 'SUCCESS') {
    //                 alert(message, status)
    //             }
    //             else {
    //                 alert(message);
    //                 window.location.reload();
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    
console.log(update);

    return (

        <div class="registration-form" style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
            <SideBar/>
            <div style={{ width: "82%", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", width: "60%", justifyContent: "center", display: "flex", alignItems: "center" }}> 
            <Container className={"pt-3"}>
                  <Card className={"p-5 mb-3"}>
            
             <form style={{width:"70%", marginLeft: 'auto', marginRight:'auto'}} encType="multipart/form-data">
                 <h1 style={{color: "green"}}>Update Advertisement</h1>
<br></br>
<br></br>
                 <div class="input-group">
    <span class="input-group-addon"></span>
    <input type="text" defaultValue={update.title} onChange={handleChange('title')} id="Title" class="form-control" name="Title" placeholder="Title"/>
  </div>

  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input defaultValue={update.description} onChange={handleChange('description')} id="productName" type="text" class="form-control" name="Description" placeholder="Description"/>
  </div>

  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input defaultValue={update.date} onChange={handleChange('date')} id="date" type="date" class="form-control" name="Date" placeholder="Date"/>
  </div>

  <div class="input-group" style={{marginTop:'10px'}}>
    <span class="input-group-addon"></span>
    <input defaultValue={update.email} onChange={handleChange('email')} id="email" type="email" class="form-control" name="email" placeholder="Email"/>
  </div>

 {/* <div class="form-group" style={{marginTop:'10px'}}>
   <input type="file" filename="image" class="form-control item" defaultValue={update.photo}  onChange={handleChange('photo')} id="img" name="photo" accept="image/*"/>
</div> */}


 {/* <div class="form-group" style={{marginTop:'10px'}}> 
  <button type="button" onClick={handleSubmit} class="btn btn-block create-account" 
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "Green",
                color: "#FFF",
                marginTop: '40px'
              }}>Update Advertisement</button>
 </div> */}
 <button type="button" onClick={handleSubmit} class="btn btn-block create-account" fullWidth
              variant="contained"
              style={{
                backgroundColor: "Green",
                color: "#FFF",
                marginTop: '68px'}}>Update Advertisement</button>

</form>
</Card>
      </Container>
</div>
</div>
</div>
    );

};
export default UpdateAdvertisement;