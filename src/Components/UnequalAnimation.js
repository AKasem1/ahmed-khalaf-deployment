import React from "react";

const UnequalAnimation = () => {
  return (
    <div className="unequal-container" style={{right:"10%", bottom: "10%"}}>
      <lottie-player
        src="https://lottie.host/83b76127-c5b9-41a0-a0d4-7440aa55f8ed/eRnL4GeezP.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
    </div>
  );
};

export default UnequalAnimation;
