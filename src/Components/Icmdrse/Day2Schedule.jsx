import React from "react";
import {Container, Table} from "react-bootstrap";

const Day2Schedule = () => {
  return (
    <Container className="my-5">
      <h4 className="text-center fw-bold mb-4">
        International Mobility Exchange Program – Day 2 (23rd May 2025)
      </h4>

      <div className="table-responsive table-style ">
        <Table bordered hover className="align-middle">
          <thead className="table-info text-center">
            <tr>
              <th style={{width: "20%", whiteSpace: "nowrap"}}>Time</th>
              <th style={{width: "40%"}}>Activity</th>
              <th style={{width: "40%"}}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:00 AM – 09:30 AM</td>
              <td>
                Starting From Corus Hotel, SEGi University, Kota Damansara
              </td>
              <td>Registration Desk Morning Refreshments</td>
            </tr>
            <tr>
              <td>09:30 AM – 10:00 AM</td>
              <td>Registration</td>
              <td></td>
            </tr>
            <tr>
              <td>10:00 AM – 10:10 AM</td>
              <td>Malaysian National Anthem and Indian National Anthem</td>
              <td>Malaysian National Anthem and Indian National Anthem</td>
            </tr>
            <tr>
              <td>10:10 AM – 10:30 AM</td>
              <td>MoU Signing Ceremony</td>
              <td>
                MoU Signing ceremony between Mahakaushal University and SEGi
                University and Colleges, Malaysia
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>10:30 AM – 12:00 PM</td>

              <td>Welcome Remarks and Inspirational Message</td>
              <td className="text-danger fw-semibold">
                PROF. DR. SRIKUMAR CHAKRAVARTHI, <br />
                <small style={{lineheight: "16px", fontWeight: "400"}}>
                  {" "}
                  Vice Chancellor for Academic Affairs, SEGi University,
                  Malaysia
                </small>
              </td>
            </tr>
            <tr>
              <td>Introduction to the Workshop Speaker</td>
              <td className="text-danger fw-semibold">
                PROF. DR. SRIKUMAR CHAKRAVARTHI, <br />
                <small style={{lineheight: "16px", fontWeight: "400"}}>
                  {" "}
                  Vice Chancellor for Academic Affairs, SEGi University,
                  Malaysia
                </small>{" "}
                <br />
                <span className="fst-italic">Workshop Title:</span>{" "}
                <small>
                  "Breaking Into High-Impact Journals: A Roadmap for Emerging
                  Scholars to Publish in Reputed Journals"
                </small>
              </td>
            </tr>
            <tr>
              <td>12:00 PM – 01:00 PM</td>
              <td>Health Break</td>
              <td></td>
            </tr>
            <tr>
              <td>01:30 PM – 03:30 PM</td>
              <td>Campus Tour</td>
              <td>
                Department of Optometry, Department of Engineering, Department
                of Business Management
              </td>
            </tr>
            <tr>
              <td>03:30 PM – 05:00 PM</td>
              <td>Home Sweet Home</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Day2Schedule;
