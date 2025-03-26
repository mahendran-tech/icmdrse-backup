import React, {useContext} from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import {DataContext} from "../../Appcontext/DataContext";

const BankDetails = () => {
  const {registerForm} = useContext(DataContext);

  return (
    <div className="Container mt-5">
      <div className="cs_section_heading cs_style_1 cs_mb_10">
        <SectionTitle2 Title="Bank Details" />
      </div>
      <div className="row d-flex justify-content-start px-3">
        <div className="col-lg-8">
          <table className="table bank-details">
            <thead />
            <tbody>
              <tr>
                <td>Company Name</td>
                <td>Technoarete Private Limited</td>
              </tr>
              <tr>
                <td>BANK NAME</td>
                <td>HDFC Bank</td>
              </tr>
              <tr>
                <td>Account number</td>
                <td>50200025001524</td>
              </tr>
              <tr>
                <td>IFSC CODE</td>
                <td>HDFC0001297</td>
              </tr>
              <tr>
                <td>Swift Code</td>
                <td>HDFCINBBCHE</td>
              </tr>
              <tr>
                <td>Branch</td>
                <td>Vadapalani, Chennai, India</td>
              </tr>
              <tr>
                <td>Account Type</td>
                <td>Current Account</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>
            After making your payment, download the Registration Form, fill it
            out, and email it to info@icmdrse.com along with your payment
            information. The payee is accountable for all bank charges.
          </strong>
        </p>
        <div className="col-lg-12 d-flex justify-content-center form-group mt-3 pl-2">
          <div className="mx-auto">
            <a href={registerForm} className="cs_btn cs_style_1 cs_radius_5">
              <span> Download Registration Form here </span>
            </a>
          </div>
        </div>
      </div>
      <div className="cs_height_50 cs_height_lg_0" />
    </div>
  );
};

export default BankDetails;
