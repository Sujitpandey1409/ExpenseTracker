import React, { useEffect } from "react";
import "./ListItem.css";
const ListItem = ({title, price, date}) => {
  return (
    <div className="listWrapper">
      <div className="listContainer">
        <div className="iconText">
          <div className="icon">+</div>
          <div className="textContainer">
            <h4>{title}</h4>
            <div className="dateFormate">{date}</div>
          </div>
        </div>
        <div className="priceButtonContainer">
          <div className="priceStyle">{`₹${price}`}</div>
          <div className="buttonContainer">
            <div className="deleteButton actionButton">x</div>
            <div className="editButton actionButton">🖊</div>
          </div>
        </div>
      </div>
      <div className="lineSeperator"></div>
    </div>
  );
};

export default ListItem;
