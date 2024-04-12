import React, { useEffect, useRef } from "react";
import "./HeaderBox.css";
const HeaderBox = ({ balanceType, balance, buttonType }) => {
  const buttonRef = useRef("");
  const spanRef = useRef("");
  useEffect(() => {
    if (balanceType === "Wallet Balance") {
      buttonRef.current.className = "buttonIncome";
      spanRef.current.className = "spanIncome";
    } else {
      buttonRef.current.className = "buttonExpense";
      spanRef.current.className = "spanExpense";
    }
  });
  return (
    <div className="headerBox">
      <p>
        Wallet Balance:<span ref={spanRef}> ₹4500</span>
      </p>
      <button ref={buttonRef}>+ Add Income</button>
    </div>
  );
};

export default HeaderBox;
