import React from "react";
import {FaWhatsapp, FaTelegram, FaLine, FaViber} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const SocialIconsBox = () => {
  // Links for each social platform
  const socialLinks = {
    telegram: "http://t.me/s8015008054", // Replace with your Telegram link
    line: "https://line.me/ti/p/2IUMkr0kMa", // Replace with your Line link
  };

  // Style for the icon box
  const iconBoxStyle = {
    position: "fixed",
    bottom: "80px",
    left: "25px",
    zIndex: 1000,
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  // Style for each icon
  const iconStyle = {
    fontSize: "24px",
    color: "#25D366", // WhatsApp green color
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  // Handle icon click (open link in new tab)
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={iconBoxStyle}>
      {/* Telegram Icon */}
      <FaTelegram
        style={{...iconStyle, color: "#0088CC"}} // Telegram blue color
        onClick={() => handleIconClick(socialLinks.telegram)}
        title="Telegram"
      />
      {/* Line Icon */}
      <FaLine
        style={{...iconStyle, color: "#00B900"}} // Line green color
        onClick={() => handleIconClick(socialLinks.line)}
        title="Line"
      />
      {/* Viber Icon */}
      {/* <FaViber
        style={{...iconStyle, color: "#7360F2"}} // Viber purple color
        onClick={() => handleIconClick(socialLinks.viber)}
        title="Viber"
      /> */}
    </div>
  );
};

export default SocialIconsBox;
