import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Objectives from "../Components/Icmdrse/Objectives";
import {Helmet} from "react-helmet-async";
const RegistrationGuidelines = () => {
  return (
    <>
      <Helmet>
        <title>Registration Guidelines for ICMDRSE 2025</title>
        <meta
          name="description"
          content="Explore ICMDRSE 2025 registration guidelines, including fee submission, early bird discounts, and visa details for smooth conference participation."
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Registration Guidelines"
        />
        <div className="cs_height_50 cs_height_lg_0" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <h4> Registration Guidelines </h4>
              <ul className="list-group list-edit">
                <li className="list-group-item">
                  Please immediately notify us upon completing your registration
                  by providing details of your payment.
                </li>
                <li className="list-group-item">
                  After registering, participants must email us a scanned copy
                  of the registration fee receipt or transaction proof.
                </li>
                <li className="list-group-item">
                  Note that no modifications to the paper will be accepted after
                  the final submission date.
                </li>
                <li className="list-group-item">
                  Each registration permits attendance for one author or
                  co-author.
                </li>
                <li className="list-group-item">
                  Contact the coordinator promptly for registrations after the
                  specified deadlines, either by writing or calling.
                </li>
                <li className="list-group-item">
                  Following payment, download the Registration Form, complete
                  it, and send it to info@icmdrse.com
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-sm-12">
              <h4>
                {" "}
                <h4> Conference Materials </h4>{" "}
              </h4>
              <div className="cs_sidebar_widget cs_accent_bg">
                <div className="cs_card  d-flex aligen-items-start">
                  <ul className="list-white">
                    <li> Handbook </li>
                    <li>
                      {" "}
                      Conference Kit (Congress Bag, Final Program-in print){" "}
                    </li>
                    <li> Conference proceedings </li>
                    <li> Abstracts on USB Key </li>
                    <li> Conference Lanyard. </li>
                    <li> Notepads & Pen </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h4>Cancellation / Refund Policy</h4>
            </div>
          </div>
          <div className="row border border-1 py-3 px-2 rounded mt-4">
            <h5>Refund policy </h5>
            <Objectives
              title=""
              description="In case of a registrant's inability to attend, considering advance payments made for the venue, printing, shipping, hotels, and other associated costs, the following cancellation policy will be applied."
              objectives={[
                {
                  title: "",
                  description:
                    "60% refund — if cancellation is done 60 days before the conference.",
                },

                {
                  title: "",
                  description:
                    "40% refund — if cancellation is done 30-60 days before the conference",
                },
                {
                  title: "",
                  description:
                    "No refunds will be done one month before the conference",
                },
              ]}
              showImage={false}
            />
          </div>

          <div className="row border border-1 py-3 px-2 rounded mt-4">
            <h5>Cancellation policy </h5>
            <Objectives
              title=""
              description=""
              objectives={[
                {
                  title: "",
                  description:
                    "You can transfer your registration to a friend or colleague, allowing them to participate in your place.",
                },

                {
                  title: "",
                  description:
                    "The certification will be issued to the individual attending the conference under your name.",
                },
                {
                  title: "",
                  description:
                    "If needed, you can also transfer your registration to another event within our organization.",
                },
                {
                  title: "",
                  description:
                    "Note : Refund processing takes 2-4 weeks post-conference, excluding any transaction charges.",
                },
              ]}
              showImage={false}
            />
          </div>

          <div className="row border border-1 py-3 px-2 rounded mt-4">
            <h5>Visa Information </h5>
            <Objectives
              title=""
              description=""
              objectives={[
                {
                  title: "",
                  description:
                    "The IFERP Academy will not directly contact embassies and consulates on behalf of visa applicants. All delegates or invitees should apply for a Business Visa only",
                },

                {
                  title: "",
                  description:
                    "For failed visa applications, it's essential to note that visa issues fall outside the purview of IFERP's cancellation policy, including the inability to secure a visa.",
                },
              ]}
              showImage={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationGuidelines;
