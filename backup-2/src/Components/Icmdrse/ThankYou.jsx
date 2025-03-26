import React from "react";

const ThankYou = () => {
  return (
    <div className="my-5 d-flex justify-content-center flex-column align-items-center ">
      <img className="mb-5" src="assets/img/thank-you-2.gif" alt="" />
      <h6>Thank You For submitting Your Details will Contact Soon...</h6>
      <div>
        <a
          href="https://api.whatsapp.com/send/?phone=918015008054&amp;text&amp;type=phone_number&amp;app_absent=0"
          className="text-success"
          target="_blank">
          <h4 className=" text-center" style={{color: "#28a745"}}>
            {" "}
            WhatsApp
          </h4>
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
