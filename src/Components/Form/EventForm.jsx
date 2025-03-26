import React, {useState} from "react";
import {countries, countriesWithPhoneCodes} from "../../assets/assets";
import {aboutImg} from "../../assets/assets";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {Col, Row} from "react-bootstrap";

const ContactForm = () => {
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    email: "",
    countryCode: " ",
    department: "",
    university: "",
    designation: "",
    phoneNumber: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {id, value} = e.target;

    // Name validation: Allow only letters, dots, and spaces
    if (["name", "university", "designation", "department"].includes(id)) {
      const regex = /^[a-zA-Z\s.]*$/;
      if (!regex.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitting(true);

    try {
      // Convert formData to URL-encoded format
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send API request
      const {data} = await axios.post(
        "https://www.icmdrse.com/API/pre-conf.php",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (data.status) {
        setFormData(initialFormData);
        // console.log("Success:", data.data);

        if (data.status) {
          const scriptUrl =
            "https://script.google.com/macros/s/AKfycbwyyzWF-BnVK8XeMIQlHZIuQ4TjzRawx2_DF2Fs1ckci3tlFB-Dy1XaHcNqhcRPztNz/exec";

          const formBody = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formBody.append(key, value);
          });
          const currentDate = new Date().toISOString().split("T")[0]; // "2025-02-27"
          formBody.append("Date", currentDate);
          // 3️⃣ Send the extracted data to Google Sheets
          const sheetResponse = await fetch(scriptUrl, {
            method: "POST",
            body: formBody,
          });

          if (sheetResponse.ok) {
            console.log("success");
          } else {
            console.error(
              "Google Sheets Submission Failed:",
              sheetResponse.statusText
            );
          }
        }

        toast.success("Form submitted successfully!");
        navigate("/thank-you");
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      if (error.response && error.response.data) {
        const errors = error.response.data.data;

        // Display validation errors as toast messages
        if (errors.email) {
          toast.error(errors.email);
        }
        if (errors.phoneNumber) {
          toast.error(errors.phoneNumber);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const countryOptions = Object.keys(countriesWithPhoneCodes).map(
    (country) => ({
      value: countriesWithPhoneCodes[country],
      label: `${country} (${countriesWithPhoneCodes[country]})`,
    })
  );

  return (
    <div className="cs_newsletter cs_style_1">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div
            className="col-lg-6 mt-4 col-sm-12 cs_newsletter cs_style_1  d-none d-md-block"
            style={{position: "relative"}}>
            <h4 className="text-center">Conference Webinar Speaker</h4>
            <div className="  position-relative wow fadeInDown">
              <div>
                <Box spacing={2} sx={{borderRadius: "10px"}}>
                  <div
                    className="d-flex justify-content-start gap-3 align-items-center"
                    style={{backgroundColor: "#00123b"}}>
                    <div className="">
                      <img
                        src="assets/img/ex-spk.png"
                        alt=""
                        style={{maxWidth: "200px", padding: "13px"}}
                      />
                    </div>
                    <div>
                      <h5 style={{color: " #f6073c"}}>Dr.Erisa Kurniati</h5>
                      <p className="text-white">
                        Assistant Professor <br />
                        Department of Technology education <br />
                        Universitas Jambi <br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <Row
                    className="d-flex justify-content-center px-2 py-3 mt-4 align-items-center"
                    style={{backgroundColor: "#00123b", margin: "0px"}}>
                    <Col>
                      <h5 style={{color: " #f6073c"}}>
                        Topics to be discussed
                      </h5>
                      <ul className="text-white">
                        <li>
                          Subject and Verb: The Foundation of a Strong Sentence
                        </li>
                        <li>
                          Articles: "A," "An," and "The" - When to Use Them?
                        </li>
                        <li>Pronouns: Avoiding Confusion</li>
                        <li>Writing Style: Clear, Concise, and Precise</li>
                      </ul>
                    </Col>
                  </Row>
                </Box>
              </div>
            </div>
            <div className="cs_height_49 cs_height_lg_0" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              className="cs_newsletter_content_wrapper-1 cs_accent_bg position-relative wow fadeInDown"
              data-wow-delay="0.6s">
              <h2 className="cs_newsletter_title cs_fs_24 cs_white_color mb-3">
                Register your Interest
              </h2>
              <form
                className="row g-3"
                onSubmit={handleSubmit}
                style={{position: "relative", zIndex: 0}}>
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control cs_form_field"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12 col-sm-12">
                  <div className="row">
                    <div className="col-4 pe-0">
                      <select
                        id="countryCode"
                        className="form-select form-control"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required>
                        <option value="">Country Code</option>
                        {countryOptions.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-8 ps-0">
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        // onChange={handleChange}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^[0-9 +]*$/.test(value)) {
                            setFormData({...formData, phoneNumber: value});
                          }
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control cs_form_field"
                    id="university"
                    placeholder="University Name "
                    value={formData.university}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control cs_form_field"
                    id="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control cs_form_field"
                    id="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12 col-sm-12">
                  <select
                    id="country"
                    className="form-select"
                    value={formData.country}
                    onChange={handleChange}
                    required>
                    <option value="">-- Select Country --</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="cs_text_btn cs_style_1 cs_white_bg cs_heading_color cs_bold d-flex align-items-center justify-content-center"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span className="cs_btn_text text-uppercase">
                          Submit
                        </span>
                        <span className="cs_btn_icon cs_center">
                          <i className="bi bi-arrow-right" />
                          <i className="bi bi-arrow-right" />
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
              <div className="cs_newsletter_shape position-absolute">
                <img
                  src="assets/img/shapes/newsletter_shape_1.svg"
                  alt="Newsletter Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
