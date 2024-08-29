import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <lottie-player
        src="https://lottie.host/02338a97-e470-40f4-81ec-ed646a80f25f/XOdtYuu7Ma.json"
        background="transparent"
        speed="1"
        style={{ width: "170px", height: "170px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loader;