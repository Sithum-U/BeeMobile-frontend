import React from "react";
import "./rating.css";

export default function rating() {
  const btn = document.querySelector("button");
  const post = document.querySelector(".post");
  const widget = document.querySelector(".star-widget");
  const editBtn = document.querySelector(".edit");
  onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    onclick = () => {
      widget.style.display = "block";
      post.style.display = "none";
    };
    return false;
  };
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
        <form action="#">
          <header></header>
          <div className="textarea">
            <textarea
              cols="30"
              placeholder="Describe your experience.."
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
