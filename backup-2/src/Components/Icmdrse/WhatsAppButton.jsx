import React, {useEffect} from "react";

const WhatsAppButton = () => {
  useEffect(() => {
    const options = {
      whatsapp: "+918015008054", // WhatsApp number
      call_to_action: "Message us", // Call to action
      button_color: "#FF6550", // Color of button
      position: "left", // Position may be 'right' or 'left'
    };

    const proto = "https:";
    const host = "getbutton.io";
    const url = proto + "//static." + host;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url + "/widget-send-button/js/init.js";
    script.onload = () => {
      window.WhWidgetSendButton.init(host, proto, options);
    };

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WhatsAppButton;
