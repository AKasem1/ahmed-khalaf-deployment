import React from "react";
import "./Features.css";
import mathCartoon from "../assets/mathCartoon.png";

const Features = () => {
  return (
    <div className="custom-element">
      <div className="image-container">
        <img src={mathCartoon} alt="Watermelon" />
      </div>
      <div className="rectangles-container">
        <div className="rectangle">وفر وقتك وروق مزاجك 📐</div>
        <div className="rectangle">أتفرج كتير زي ما تحب 📐</div>
        <div className="rectangle">امتحانات بشكل مستمر 📐</div>
      </div>
    </div>
  );
};

export default Features;
