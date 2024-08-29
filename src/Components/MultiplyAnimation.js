import React from "react";

const MultiplyAnimation = () => {

  // <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/1c5b81be-43f6-43a0-8d83-8bb301d36732/IHniaWctfa.json" background="#FFFFFF" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player>
  return (
    <div className="multiply-container" style={{top:"55%", left: "40%"}}>
      <lottie-player
        src="https://lottie.host/1c5b81be-43f6-43a0-8d83-8bb301d36732/IHniaWctfa.json"
        background="transparent"
        speed="2"
        style={{ width: "140px", height: "140px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
    </div>
  );
};

export default MultiplyAnimation;
