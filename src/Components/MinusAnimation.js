import React, { useEffect, useRef } from "react";

const MinusAnimation = () => {
  const lottieRef = useRef(null);


  return (
    <div className="minus-container" style={{ position: 'absolute', top: '0%', left: '0%', width: '100px', height: '100px' }}>
      <lottie-player
        ref={lottieRef}
        src="https://lottie.host/9814cb68-4ee3-4e1e-a243-7e87a2cd7621/jwr2yR63AJ.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: "250px", height: "250px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
      {/* <dotlottie-player
        src="https://lottie.host/21e7b5cc-7acf-4fc6-85e1-77b9bac2174f/5YTuZ97WBE.json"
        background="#FFFFFF"
        speed="5"
        style={{ width: "100%", height: "100%" }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      ></dotlottie-player> */}
    </div>
  );
};

export default MinusAnimation;
