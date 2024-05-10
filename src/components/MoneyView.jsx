import React, { useState } from "react";
import NumInput from "./NumInput";
import MoneyExplain from "./MoneyExplain";

function MoneyView() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  // Function to handle change in NumInput 1
  const handleNum1Change = (value) => {
    const parsedValue = parseInt(value, 10) || 0; // Parse value to integer, default to 0 if empty
    setNum1(parsedValue);
  };

  // Function to handle change in NumInput 2
  const handleNum2Change = (value) => {
    const parsedValue = parseInt(value, 10) || 0; // Parse value to integer, default to 0 if empty
    setNum2(parsedValue);
  };

  // Function to handle change in NumInput 3
  const handleNum3Change = (value) => {
    const parsedValue = parseInt(value, 10) || 0; // Parse value to integer, default to 0 if empty
    setNum3(parsedValue);
  };

  // Calculation based on the input values

  return (
    <div className="" id="moneyView">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center p-10">
        מחשבון מענק & פיקדון
      </h1>

      <div className="moneyStats flex justify-around text-center">
        <div className="">
          <h2 className="text-3xl font-bold">
            {(num1 * 645.12 + num2 * 537.22 + num3 * 429.31).toFixed(2)}₪
          </h2>
          <h1 className="text">פיקדון</h1>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            {(num1 * 932.94 + num2 * 777.45 + num3 * 621.96).toFixed(2)}₪
          </h2>
          <h1>מענק</h1>
        </div>
      </div>
      <div className="serviceLength flex justify-center justify-around mx-auto sm:w-7/12 py-8">
        <NumInput serviceType="לוחם" onChange={handleNum1Change}></NumInput>
        <NumInput
          serviceType="תומך לחימה"
          onChange={handleNum2Change}
        ></NumInput>
        <NumInput serviceType="עורפי" onChange={handleNum3Change}></NumInput>
      </div>

      <MoneyExplain></MoneyExplain>
    </div>
  );
}

export default MoneyView;
