import React, {useEffect} from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to script
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/674eb64e2480f5b4f5a6fc8b/1ie5ng9cn";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      s1.remove();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat;
