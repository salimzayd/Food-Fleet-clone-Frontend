import React from "react";
import "./Reviews.css";
import cook1 from "../components/Assets/cook1.jpg";

const Reviews = () => {
  return (
    <>
      <div
        className="review-session"
        style={{ width: "100%", height: "700px", background: "grey" }}
      >
        <div className="rvw-content">
          <h1 className="main-hd">REVIEWS</h1>
        </div>

        <div className="cards">
          <div className="review1">
            
            <img src={cook1} className="as1"></img>
          </div>
          <div className="review1">
            <img src={cook1}className="as2"></img>
          </div>
          <div className="review1">
            <img src={cook1}className="as3"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
