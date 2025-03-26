import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import Brand1 from "../Components/Brand/Brand1";
import UpgradeModal from "../Components/Icmdrse/UpgradeModal";
import ConferenceRegistration from "../Components/Icmdrse/ConferenceRegistration";
import BankDetails from "../Components/Icmdrse/BankDetails";
import {Container} from "react-bootstrap";
import {Helmet} from "react-helmet-async";
const ConferenceReg = () => {
  const ccontent = (
    <ul style={{textDecoration: "none", listStyle: "none"}}>
      <li>
        {" "}
        <i className="bi bi-credit-card-2-back text-primary" /> Online Payment
        (Using Credit/Debit Card)
      </li>
      <li>
        {" "}
        <i className="bi bi-bank text-primary" /> Bank Transfer (TT)
      </li>
      <li>
        {" "}
        <i className="bi bi-paypal text-primary" /> PayPal
      </li>
      <li className="mt-3">
        Before making the payment for the conference using any of the above
        methods, please contact the Conference Coordinator @ +1 (626) 649-4484 /
        email id: info@icmdrse.com
      </li>
    </ul>
  );

  return (
    <>
      <Helmet>
        <title>
          Register for 2025 International Conference Malaysia | ICMDRSE
        </title>
        <meta
          name="description"
          content="Register for ICMDRSE 2025 and enjoy early bird discounts for participation and secure your spot in international conference on Multidisciplinary Research in Science and Engineering."
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Conference Registration"
        />
        <TopContent
          title="Proceedings & Publications"
          content="Publish your findings in recognized journals related to ICMDRSE-2025. These publications, which are backed by well-known publishers, allow authors to exhibit their full papers following rigorous peer assessment. Explore the scope of these journals and pick the one that is most suited to your research."
        />
        <Brand1 isClass={true} />
        <div>
          <UpgradeModal />
          <ConferenceRegistration />

          <div className="container border border-1 p-2">
            <TopContent
              title="AVAILABLE PAYMENT METHODS"
              content="For 8th International Conference on Multi-Disciplinary Research Studies and Education (ICMDRSE-2025), there are three convenient payment options. Before proceeding with your conference payment, please choose from the following methods."
              content2={ccontent}
            />
          </div>

          <Container>
            <BankDetails />
          </Container>
        </div>
      </div>
    </>
  );
};

export default ConferenceReg;
