import React from "react";
import "./ListItem.css";
const ListItem = () => {
  return (
    <>
    <div className="listContainer">
      <div className="iconText">
        <div className="icon">+</div>
        <div className="textContainer">
          <h4>Samosa</h4>
          <div className="dateFormate">March 20, 2024</div>
        </div>
      </div>
      <div className="priceButtonContainer">
        <div className="priceStyle">₹150</div>
        <div className="buttonContainer">
          <div className="deleteButton actionButton">x</div>
          <div className="editButton actionButton">🖊</div>
        </div>
      </div>
    </div>
      <div className="lineSeperator"></div></>
  );
};

export default ListItem;
