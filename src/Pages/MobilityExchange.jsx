import React from "react";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import {LiaUniversitySolid} from "react-icons/lia";
import {FcCollaboration} from "react-icons/fc";
import {GrProjects} from "react-icons/gr";

const MobilityExchange = () => {
  return (
    <div>
      <div className="serviceDetails">
        <BreadCumb2
          bgImg="assets/img/mobility-ex.jpg"
          Title="8th International Conference on Multi-Disciplinary Research <br/> Studies
and Education (ICMDRSE-2025)
"
          Theme="Enhance Your Conference Experience with an Exclusive Visit to SEGi University"
          btnname="Submit Your Paper"
          btnurl="/abstract-submission"
          btnname1="Register Now"
          btnurlReg="/conference-registration"
        />
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="d-flex align-items-center border border-1  rounded-3 p-3 mb-4">
                <div className="flex-shrink-0 ">
                  <img src="assets/img/Video-Call.png" alt="Sample Image" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">
                    Exclusive Workshop at to SEGi University{" "}
                  </h5>
                  <p className="cs_fs_14">
                    Participate in a hands-on workshop led by top industry
                    experts. Delve into the latest innovations in applied
                    science, engineering, and technology, gaining practical
                    insights and advanced knowledge.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center border border-1  rounded-3 p-3 mb-4">
                <div className="flex-shrink-0 ">
                  <img src="assets/img/Career.png" alt="Sample Image" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">Certificates of Achievement </h5>
                  <p className="cs_fs_14 mb-0">
                    All physical participants will receive:
                  </p>
                  <ul className="cs_fs_14">
                    <li>
                      A Certificate of Attendance for participating in
                      ICMDRSE-2025
                    </li>
                    <li>
                      A Certificate of Workshop Completion for engaging in the
                      workshop at SEGi University
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center border border-1  rounded-3 p-3 mb-4">
                <div className="flex-shrink-0 ">
                  <img
                    src="assets/img/Sandwich.png"
                    alt="Sample Image"
                    style={{borderRadius: "10px"}}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">Complimentary Lunch </h5>
                  <p className="cs_fs_14">
                    Enjoy a hosted lunch with fellow attendees, faculty members,
                    and workshop leaders, creating the perfect setting for
                    informal discussions and networking.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center border border-1  rounded-3 p-3 mb-4">
                <div className="flex-shrink-0 ">
                  <img src="assets/img/Lab-1.png" alt="Sample Image" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">Research Lab Tours </h5>
                  <p className="cs_fs_14">
                    Get an exclusive tour of SEGi University advanced research
                    labs. Observe live projects and innovative research in
                    action, offering firsthand exposure to cutting-edge
                    developments in science and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h4 style={{color: "#000440"}}>
                Why Join the Physical Conference?
              </h4>

              <p className="cs_fs_14" style={{color: "#000440"}}>
                This program is more than just a university visit; it's an
                opportunity to:
              </p>
            </div>
            <ul className="d-flex justify-content-between item-design-li">
              <li className="d-flex flex-column align-items-center">
                <LiaUniversitySolid />
                <p className="cs_fs_14 text-center mt-2">
                  Engage directly with SEGi University and colleges esteemed
                  faculty and researchers
                </p>
              </li>
              <li className="d-flex flex-column align-items-center">
                <FcCollaboration />
                <p className="cs_fs_14 text-center mt-2">
                  Collaborate with peers from around the globe
                </p>
              </li>
              <li className="d-flex flex-column align-items-center">
                <GrProjects />
                <p className="cs_fs_14 text-center mt-2">
                  Gain unique insights into advanced research environments and
                  innovative projects
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilityExchange;
