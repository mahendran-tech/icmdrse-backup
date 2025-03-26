import React from "react";

const FixedButton = () => {
  const handleClick = () => {
    // window.location.href = "https://www.icmdrse.com/listener/";
    window.open("https://www.icmdrse.com/listener/", "_blank");
  };

  return (
    <button className="fixed-button" onClick={handleClick}>
      REGISTER AS A LISTENER
    </button>
  );
};

export default FixedButton;
