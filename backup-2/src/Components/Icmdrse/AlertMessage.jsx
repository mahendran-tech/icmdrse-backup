import React from "react";
import {FaInfoCircle} from "react-icons/fa";

const AlertMessage = () => {
  return (
    <div
      className="alert alert-primary mb-3 d-flex gap-2"
      role="alert"
      style={{maxWidth: "1051px", margin: "auto"}}>
      <div className="info-logo align-items-center">
        <FaInfoCircle
          style={{fontSize: "30px", marginRight: "10px", textAlign: "center"}}
        />
      </div>
      <ul className="unstyled p-0 m-0" style={{listStyle: "none"}}>
        <li>
          <h5
            className="p-0 m-0"
            style={{
              color: "red",
              marginLeft: "10px",
              fontSize: "14px !important",
            }}>
            *Indicates - UG Student
          </h5>
        </li>
        <li>
          <h6
            className="p-0 m-0"
            style={{marginLeft: "10px", fontSize: "14px !important"}}>
            Group Registrations will receive a 5% discount along with additional
            benefits, please contact{" "}
            <a href="tel:+1 (626) 649-4484">+1 (626) 649-4484</a>
          </h6>
        </li>
      </ul>
    </div>
  );
};

export default AlertMessage;
