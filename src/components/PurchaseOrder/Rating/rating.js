import React, { useState } from "react";
import axios from "axios";
import "./rating.css";

export default function Rating() {
  // const btn = document.querySelector("button");
  // const post = document.querySelector(".post");
  // const widget = document.querySelector(".star-widget");
  // const editBtn = document.querySelector(".edit");

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [rates, setRates] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rateObj = {
      description,
      name,
      profession,
    };

    axios
      .post("http://localhost:8000/rate/add", rateObj)
      .then((res) => {
        alert("Rating Details Successfully added!");
        axios.get("http://localhost:8000/rate/").then((res) => {
          setRates(res.data);
        });
        setDescription("");
        setName("");
        setProfession("");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };
  // onclick = () => {
  //   widget.style.display = "none";
  //   post.style.display = "block";
  //   onclick = () => {
  //     widget.style.display = "block";
  //     post.style.display = "none";
  //   };
  //   return false;
  // };
  return (
    <div className="ratingContainer">
      <div className="post">
        <div className="text">Thanks for rating us!</div>
        <div className="edit">EDIT</div>
      </div>

      <div className="star-widget">
        <input type="radio" name="rate" id="rate-5" />
        <label for="rate-5" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4" />
        <label for="rate-4" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3" />
        <label for="rate-3" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2" />
        <label for="rate-2" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1" />
        <label for="rate-1" className="fas fa-star"></label>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="textarea">
            <textarea
              cols="50"
              placeholder="Describe your experience.."
              id="description"
              name="description"
              autoFocus
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="textarea">
            <textarea
              placeholder="Enter Your Name"
              id="name"
              name="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            ></textarea>
          </div>
          <div className="textarea">
            <textarea
              placeholder="Enter Your Profession"
              id="profession"
              name="profession"
              autoFocus
              onChange={(e) => setProfession(e.target.value)}
            ></textarea>
          </div>
          <div className="btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
