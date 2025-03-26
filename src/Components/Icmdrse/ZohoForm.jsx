import {useEffect} from "react";

const ZohoForm = () => {
  useEffect(() => {
    // Load Zoho Tracking Script
    const script1 = document.createElement("script");
    script1.src = "https://forms.zoho.in/js/zf_gclid.js";
    script1.async = true;

    script1.onload = () => {
      // Wait for Zoho's scripts to initialize
      const checkZFAdvLead = () => {
        if (typeof ZFAdvLead !== "undefined") {
          // ZFAdvLead is now available
          const zfutm_zfAdvLead = new ZFAdvLead();
          zfutm_zfAdvLead.zfautm_ini();

          if (document.readyState === "complete") {
            zfutm_zfAdvLead.zfautm_iframeSprt();
            zfutm_zfAdvLead.zfautm_DHtmlSprt();
          } else {
            window.addEventListener("load", () => {
              zfutm_zfAdvLead.zfautm_iframeSprt();
              zfutm_zfAdvLead.zfautm_DHtmlSprt();
            });
          }
        } else {
          // ZFAdvLead is not yet defined, check again after a short delay
          setTimeout(checkZFAdvLead, 100);
        }
      };

      // Start checking for ZFAdvLead
      checkZFAdvLead();
    };

    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div>
      <iframe
        frameBorder="0"
        style={{height: "550px", width: "100%", border: "none"}}
        src="https://forms.zohopublic.in/technorete/form/DownloadBrochureICMDRSEMalaysia/formperma/U85PGI1svR8V7Sc6auSGvqhb87rWmsPcMb1HxrXc7pQ"
        title="Zoho Form"></iframe>
    </div>
  );
};

export default ZohoForm;
