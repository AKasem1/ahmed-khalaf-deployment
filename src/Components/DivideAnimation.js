import React, { useEffect } from "react";

const DivideAnimation = () => {
    useEffect(() => {
        const scriptUrl = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
        
        // Check if the script is already added
        if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
          const script = document.createElement("script");
          script.src = scriptUrl;
          script.async = true;
          document.body.appendChild(script);
    
          script.onload = () => {
            console.log("Lottie player script loaded successfully.");
          };
    
          script.onerror = () => {
            console.error("Failed to load the Lottie player script.");
          };
    
          return () => {
            // Cleanup the script when the component unmounts (optional)
            document.body.removeChild(script);
          };
        }
      }, []);
    
      return (
        <div className="divide-container" style={{top:"-10%", right: "5%"}}>
        <lottie-player
          src="https://lottie.host/34b2c26b-daab-48cd-86d8-2cbc1d1021ec/3ELlTgv1qC.json"
          background="transparent"
          className="divide-animation"
          speed="2"
          style={{ width: "200px", height: "200px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        </div>
      );
    };

export default DivideAnimation;
