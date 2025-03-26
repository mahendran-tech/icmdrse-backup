import {useState} from "react";
import {Form, Button, Row, Col, Spinner} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {CloudDone} from "@mui/icons-material";

const ConferenceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    conference_name:
      "8th International Conference on Multi-Disciplinary Research Studies and Education (ICMDRSE-2025)",
    cdate: "22nd - 23rd May 2025",
    city: "Kuala Lumpur, Malaysia",
    sub_type: "",
    ptitle: "",
    authname: "",
    authemail: "",
    abstract: "",
    countryCode: "",
    WhatsNumber: "",
    WhatsCountryCode: "",
    publication: "",
    pub: "",
    message: "",
    attachment: null,
    university: "",
    presentationtype: "",
    designation: "",
    department: "",
    hhow: "",
    phone_number: "",
  });
  const [coAuthors, setCoAuthors] = useState([{name: "", email: ""}]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //      if (
  //        name === "university" ||
  //        name === "designation" ||
  //        name === "department"
  //      ) {
  //        const regex = /^[a-zA-Z\s.]*$/;
  //        if (!regex.test(value)) return;
  //      }

  //   setFormData({...formData, [name]: value});
  // };

  const handleChange = (e) => {
    const {name, value} = e.target;

    // Validation for specific fields (allowing only letters, spaces, and dots)
    if (
      ["university", "designation", "department", "authname"].includes(name)
    ) {
      const regex = /^[a-zA-Z\s.]*$/;
      if (!regex.test(value)) {
        return; // Prevent updating invalid value
      }
    }

    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.size <= 3 * 1024 * 1024 &&
      [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
      ].includes(file.type)
    ) {
      setFormData({...formData, attachment: file});
    } else {
      alert("File must be .doc, .docx, or .pdf and less than 3MB.");
      e.target.value = "";
    }
  };

  // ✅ Handle Phone Number Changes Separately
  const handlePhoneChange = (value) => {
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          const countryCode = `+${getCountryCallingCode(phoneNumber.country)}`; // e.g., +91
          const countryName = getCountryFullName(phoneNumber.country); // e.g., India

          setFormData((prev) => ({
            ...prev,
            countryCode: `${countryCode}-${countryName}`, // Store "+91-India"
            phone_number: phoneNumber.nationalNumber || "", // Store phone number separately
          }));
        }
      } catch (error) {
        console.error("Invalid phone number:", error);
        setFormData((prev) => ({...prev, countryCode: "", phone_number: ""}));
      }
    } else {
      setFormData((prev) => ({...prev, countryCode: "", phone_number: ""}));
    }
  };

  const handleWhatsAppChange = (value) => {
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          const WhatsCountryCode = `+${getCountryCallingCode(
            phoneNumber.country
          )}`; // e.g., +91
          const countryName = getCountryFullName(phoneNumber.country); // e.g., India

          setFormData((prev) => ({
            ...prev,
            WhatsCountryCode: `${WhatsCountryCode}-${countryName}`, // Store "+91-India"
            WhatsNumber: phoneNumber.nationalNumber || "", // Store phone number separately
          }));
        }
      } catch (error) {
        console.error("Invalid phone number:", error);
        setFormData((prev) => ({
          ...prev,
          WhatsCountryCode: "",
          WhatsNumber: "",
        }));
      }
    } else {
      setFormData((prev) => ({...prev, WhatsCountryCode: "", WhatsNumber: ""}));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   console.log(
  //     "Form submitted with data:",
  //     formData,
  //     "Co-Authors:",
  //     coAuthors
  //   );
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setFormData({
  //       conference_name:
  //         "5th International Conference On Advancing Knowledge from Multidisciplinary Perspectives in Engineering & Technology (ICAKMPET - 2025)",
  //       cdate: "22nd - 23rd May 2025",
  //       city: "Kuala Lumpur, Malaysia",
  //       sub_type: "",
  //       authname: "",
  //       authemail: "",
  //       abstract: "",
  //       ptitle: "",
  //       countryCode: "+91",
  //       WhatsNumber: "",
  //       presentationtype: "",
  //       publication: "",
  //       pub: "",
  //       attachment: null,
  //       university: "",
  //       designation: "",
  //       department: "",
  //       message: "",
  //       hhow: "",
  //       phone_number: "",
  //     });
  //     setCoAuthors([{name: "", email: ""}]);
  //   }, 2000);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const formDataToSend = new FormData();

  //     // Append main form fields
  //     formDataToSend.append("conference_name", formData.conference_name);
  //     formDataToSend.append("cdate", formData.cdate);
  //     formDataToSend.append("city", formData.city);
  //     formDataToSend.append("sub_type", formData.sub_type);
  //     formDataToSend.append("authname", formData.authname);
  //     formDataToSend.append("authemail", formData.authemail);
  //     formDataToSend.append("abstract", formData.abstract);
  //     formDataToSend.append("ptitle", formData.ptitle);
  //     formDataToSend.append("countryCode", formData.countryCode);
  //     formDataToSend.append("WhatsNumber", formData.WhatsNumber);
  //     formDataToSend.append("presentationtype", formData.presentationtype);
  //     formDataToSend.append("publication", formData.publication);
  //     formDataToSend.append("pub", formData.pub);
  //     formDataToSend.append("university", formData.university);
  //     formDataToSend.append("designation", formData.designation);
  //     formDataToSend.append("department", formData.department);
  //     formDataToSend.append("message", formData.message);
  //     formDataToSend.append("hhow", formData.hhow);
  //     formDataToSend.append("phone_number", formData.phone_number);

  //     // Append file if available
  //     if (formData.attachment) {
  //       formDataToSend.append("attachment", formData.attachment);
  //     }

  //     // ✅ Append Co-Authors as JSON
  //     formDataToSend.append("coAuthors", JSON.stringify(coAuthors));

  //     // Make API call
  //     const response = await axios.post(
  //       "https://www.icmdrse.com/API/submission.php",
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     if (response.status === 200 && response.data?.success) {
  //       toast.success("Form submitted successfully!");

  //       // Reset form
  //       setFormData({
  //         conference_name:
  //           "5th International Conference On Advancing Knowledge from Multidisciplinary Perspectives in Engineering & Technology (ICAKMPET - 2025)",
  //         cdate: "22nd - 23rd May 2025",
  //         city: "Kuala Lumpur, Malaysia",
  //         sub_type: "",
  //         authname: "",
  //         authemail: "",
  //         abstract: "",
  //         ptitle: "",
  //         countryCode: "+91",
  //         WhatsNumber: "",
  //         presentationtype: "",
  //         publication: "",
  //         pub: "",
  //         attachment: null,
  //         university: "",
  //         designation: "",
  //         department: "",
  //         message: "",
  //         hhow: "",
  //         phone_number: "",
  //       });

  //       setCoAuthors([{name: "", email: ""}]);
  //     } else {
  //       toast.error(
  //         response.data?.message || "Form submission failed. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Form submission failed:", error);

  //     if (error.response) {
  //       toast.error(
  //         error.response.data?.message || "An error occurred. Please try again."
  //       );
  //     } else if (error.request) {
  //       toast.error("Network error. Please check your internet connection.");
  //     } else {
  //       toast.error("Unexpected error occurred.");
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Append main form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Append file if available
      if (formData.attachment) {
        formDataToSend.append("attachment", formData.attachment);
      }

      // Append co-authors as JSON
      formDataToSend.append("coAuthors", JSON.stringify(coAuthors));

      // Make API call
      const response = await axios.post(
        "https://www.icmdrse.com/API/submission.php",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        //  google sheet data

        // 2️⃣ Prepare data for Google Sheets (Only if response.data.data exists)
        if (response.data.data) {
          const scriptUrl =
            "https://script.google.com/macros/s/AKfycbyuhwe_OxZ56tT71PE-FvPUTjeqFzdA9fZ-tDonTG-tWOVYFo35BWIjVMfUjnPTPmNWQA/exec";

          const formBody = new FormData();
          Object.entries(response.data.data).forEach(([key, value]) => {
            formBody.append(key, value);
          });
          const currentDate = new Date().toISOString().split("T")[0]; // "2025-02-27"
          formBody.append("submission_date", currentDate);
          // 3️⃣ Send the extracted data to Google Sheets
          const sheetResponse = await fetch(scriptUrl, {
            method: "POST",
            body: formBody,
          });

          if (sheetResponse.ok) {
            console.log("");
          } else {
            console.error(
              "Google Sheets Submission Failed:",
              sheetResponse.statusText
            );
          }
        }

        // Reset form
        setFormData({
          conference_name:
            "8th International Conference on Multi-Disciplinary Research Studies and Education (ICMDRSE-2025)",
          cdate: "22nd - 23rd May 2025",
          city: "Kuala Lumpur, Malaysia",
          sub_type: "",
          authname: "",
          authemail: "",
          abstract: "",
          ptitle: "",
          countryCode: "",
          WhatsNumber: "",
          WhatsCountryCode: "",
          presentationtype: "",
          publication: "",
          pub: "",
          attachment: null,
          university: "",
          designation: "",
          department: "",
          message: "",
          hhow: "",
          phone_number: "",
        });

        setCoAuthors([{name: "", email: ""}]);

        // Redirect to Thank You page
        setTimeout(() => {
          navigate("/thank-you");
        }, 500);
      } else {
        toast.error(
          response.data?.message || "Form submission failed. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );

      if (error.response && error.response.data) {
        const errors = error.response.data.data;
        if (errors) {
          Object.keys(errors).forEach((key) => {
            toast.error(errors[key]);
          });
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const addCoAuthor = () => {
    setCoAuthors([...coAuthors, {name: "", email: ""}]);
  };

  const handleCoAuthorChange = (index, field, value) => {
    const updatedCoAuthors = [...coAuthors];
    updatedCoAuthors[index][field] = value;
    setCoAuthors(updatedCoAuthors);
  };

  const removeCoAuthor = (index) => {
    setCoAuthors(coAuthors.filter((_, i) => i !== index));
  };

  // Function to fetch the full country name using the ISO code
  const getCountryFullName = (isoCode) => {
    const regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(isoCode) || isoCode; // Returns full name or ISO code as fallback
  };

  return (
    <Form
      className="conference-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data">
      <Row>
        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>Conference Name</Form.Label>
            <Form.Control
              type="text"
              name="conference_name"
              value={formData.conference_name}
              readOnly
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Conference Date</Form.Label>
            <Form.Control
              type="text"
              value={formData.cdate}
              readOnly
              tabIndex="-1"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={formData.city}
              readOnly
              tabIndex="-1"
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="spk">
        <h5 className="mt-5 mb-4"> Personal Details </h5>
      </div>
      <Row>
        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>Submission Type*</Form.Label>
            <Form.Control
              as="select"
              name="sub_type"
              value={formData.sub_type}
              onChange={handleChange}
              required>
              <option value="">-- Select Any one --</option>
              <option value="Abstract Submission">Abstract Submission</option>
              <option value="Full Paper Submission">
                Full Paper Submission
              </option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>Paper Title*</Form.Label>
            <Form.Control
              type="text"
              name="ptitle"
              value={formData.ptitle}
              onChange={handleChange}
              required
              pattern="^[A-Za-z .,'()\-]+$"
              title="Only letters and specific special characters allowed"
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Author Name*</Form.Label>
            <Form.Control
              type="text"
              name="authname"
              value={formData.authname}
              onChange={handleChange}
              //   placeholder="Author Name"
              required
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email id*</Form.Label>
            <Form.Control
              type="email"
              name="authemail"
              value={formData.authemail}
              onChange={handleChange}
              //   placeholder="Email id"
              required
            />
          </Form.Group>
        </Col>

        {/* <h5 className="mt-4">Co-Authors</h5>
        <hr /> */}
        {coAuthors.map((coAuthor, index) => (
          <Row key={index} className="align-items-center">
            <Col sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>Co-author Name</Form.Label>
                <Form.Control
                  type="text"
                  value={coAuthor.name}
                  onChange={(e) =>
                    handleCoAuthorChange(index, "name", e.target.value)
                  }
                  //   placeholder="Co-author Name"
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Label>Co-author Email</Form.Label>
                <Form.Control
                  type="email"
                  value={coAuthor.email}
                  onChange={(e) =>
                    handleCoAuthorChange(index, "email", e.target.value)
                  }
                  //   placeholder="Co-author Email"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              {index > 0 && (
                <Button
                  variant="danger"
                  onClick={() => removeCoAuthor(index)}
                  className="mb-3 mt-4">
                  <i className="bi bi-trash" />
                </Button>
              )}
            </Col>
          </Row>
        ))}
        <Col className="d-flex justify-content-end">
          <Button
            variant="primary"
            onClick={addCoAuthor}
            style={{width: "180px"}}
            className="mb-4">
            <i className="bi bi-plus" /> Add Co-Author
          </Button>
        </Col>

        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>Abstract*</Form.Label>
            <Form.Control
              type="text"
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              required
              pattern="^[A-Za-z .,'()\-]+$"
              title="Only letters and specific special characters allowed"
            />
          </Form.Group>
        </Col>

        {/* <Col sm={6}>
          <Row>
            <Form.Label>Phone Number*</Form.Label>
            <Col sm={4} className="pe-0">
              <Form.Group className="mb-3">
                <Form.Select
                  as="select"
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required>
                  <option value="">Country code</option>
                  {countryOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={8} className="ps-0">
              <Form.Group className="mb-3">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[0-9 +]*$/.test(value)) {
                      setFormData({...formData, phone_number: value});
                    }
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col> */}
        <Col sm={6}>
          <div>
            <Form.Label>Phone Number*</Form.Label>
            {/* ✅ This input will show country codes and flags */}
            <PhoneInput
              international
              defaultCountry="IN" // Default country (India)
              value={
                formData.phone_number
                  ? `${formData.countryCode.split("-")[0]}${
                      formData.phone_number
                    }`
                  : ""
              }
              onChange={handlePhoneChange} // Updates state
            />
          </div>
        </Col>
        <Col md={6}>
          <Row>
            <Form.Label>Whatsapp/Viber Number*</Form.Label>

            <Col sm={12} className="">
              <Form.Group className="mb-3">
                {/* <Form.Label>Phone Number*</Form.Label> */}
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={
                    formData.WhatsNumber
                      ? `${formData.WhatsCountryCode.split("-")[0]}${
                          formData.WhatsNumber
                        }`
                      : ""
                  }
                  onChange={handleWhatsAppChange} // Updates state
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Presentation Type*</Form.Label>
            <Form.Select
              name="presentationtype"
              value={formData.presentationtype}
              onChange={handleChange}
              required>
              <option value="">-- select --</option>
              <option value="Physical Presentation">
                Physical Presentation
              </option>

              <option value="Virtual Presentation">Virtual Presentation</option>

              <option value="Poster Presentation"> Poster Presentation</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>University/Institute/Organization Name*</Form.Label>
            <Form.Control
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
              title="Only letters and specific special characters allowed"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Designation*</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              title="Only letters and specific special characters allowed"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Department*</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              title="Only letters and specific special characters allowed"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Publication*</Form.Label>
            <Form.Control
              as="select"
              name="publication"
              value={formData.publication}
              onChange={handleChange}
              required>
              <option value="">-- select --</option>
              <option value="1">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>
        </Col>
        {formData.publication === "1" && (
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Publication in (Drop Down)*</Form.Label>
              <Form.Select
                as="select"
                name="pub"
                value={formData.pub}
                onChange={handleChange}
                required>
                <option value="">--select--</option>
                <option value="Scopus Journal">Scopus Journal</option>
                <option value="Web Of Science Journal">
                  Web Of Science Journal
                </option>
                <option value="Google Scholar Journal">
                  Google Scholar Journal
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
        )}
        <Col lg={6}>
          <Form.Group controlId="hhow" className="mb-3">
            <Form.Label>
              How did you get to know about the Conference?
            </Form.Label>
            <Form.Select
              name="hhow"
              value={formData.hhow || ""}
              onChange={handleChange}
              required>
              <option value="">--select--</option>
              <option value="Conference Alerts">Conference Alerts</option>
              <option value="Email">Email</option>
              <option value="Google Search">Google Search</option>
              <option value="Google Advertisement">Google Advertisement</option>
              <option value="Referred by Organizing Committee Member">
                Referred by Organizing Committee Member
              </option>
              <option value="Social Media">Social Media</option>
              <option value="Through the University/ Institute or College">
                Through the University/ Institute or College
              </option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>
              Submit Abstract{" "}
              <span className="text-danger">
                *(File size should be less than 3 MB, Accepted formats: .doc,
                .docx, .pdf)
              </span>
            </Form.Label>
            <Form.Control
              type="file"
              name="attachment"
              accept=".doc, .docx, .pdf"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <button
            type="submit"
            className="cs_text_btn cs_style_1  cs_heading_color cs_bold d-flex align-items-center justify-content-center"
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
                  Submit Your Paper
                </span>
                <span className="cs_btn_icon cs_center">
                  <i className="bi bi-arrow-right" />
                  <i className="bi bi-arrow-right" />
                </span>
              </>
            )}
          </button>
        </Col>
      </Row>

      {/* <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="mt-4">
        {isSubmitting ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            {" Submitting..."}
          </>
        ) : (
          "Submit Your Paper"
        )}
      </Button> */}
    </Form>
  );
};

export default ConferenceForm;
