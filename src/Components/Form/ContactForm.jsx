import React, {useState} from "react";
import {countries, countriesWithPhoneCodes} from "../../assets/assets";
import {aboutImg} from "../../assets/assets";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    state: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {id, value} = e.target;

    // Name validation: Allow only letters, dots, and spaces
    if (id === "name") {
      const regex = /^[a-zA-Z\s.]*$/;
      if (!regex.test(value)) return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     console.log("Sending data:", formData);

  //     const {data} = await axios.post(
  //       "https://www.icmdrse.com/API/signup.php",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (data.status) {
  //       console.log("Success:", data.data);
  //       toast.success("Form submitted successfully!");
  //     } else {
  //       toast.error(data.message || "Submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("An error occurred. Please try again.");
  //   } finally {
  //     setFormData(initialFormData);
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert formData to URL-encoded format
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send API request
      const {data} = await axios.post(
        "https://www.icmdrse.com/API/signup.php",
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
        toast.success("Form submitted successfully!");
        navigate("/thank-you");
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      // catch (error) {
      //   console.error(
      //     "Error submitting form:",
      //     error.response?.data || error.message
      //   );
      //   toast.error(
      //     error.response?.data?.message || "An error occurred. Please try again."
      //   );
      // }
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
          <div className="col-lg-6 col-sm-12">
            <div
              className="cs_newsletter_content_wrapper cs_accent_bg position-relative wow fadeInDown"
              data-wow-delay="0.6s">
              <h2 className="cs_newsletter_title cs_fs_24 cs_white_color mb-3">
                Subscribe To Get Updates
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
                        <option value="+91">+91</option>
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
                  <select
                    id="state"
                    className="form-select"
                    value={formData.state}
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
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
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
          <div
            className="col-lg-6 col-sm-12 cs_newsletter cs_style_1 bg-white d-none d-md-block"
            style={{position: "relative"}}>
            <div className="cs_newsletter_content_wrapper bg-white position-relative wow fadeInDown">
              <img src={aboutImg.stu} alt="" />
            </div>
            <div className="cs_height_49 cs_height_lg_0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
