import React from "react";

const AuthorGuidelines = () => {
  return (
    <section
      className="testimonial-section py-4"
      style={{ background: "#fff" }}
    >
      <div className="container">
        <div className="sec-title-three centered mb-3">
          <h3 className="text-height-1 text-center">
            Author <span> Guidelines</span>
          </h3>
        </div>
        <div className="row  d-flex justify-content-center align-items-center clearfix mt-3">
          <div className="col-lg-6">
            <h4 className="text-color-h4 mb-2 text-center">
              Guidelines for Abstract Submission:
            </h4>
            <div className="content-topic">
              <ul className="ul-style">
                <li>
                  <b>Language:</b> Abstracts must be written in English.
                </li>
                <li>
                  <b>Length:</b> Limited to one paragraph with 200-250 words.
                </li>
                <li>
                  <b>Format:</b> Submit in MS Word (.doc or .docx) document
                  format.
                </li>
                <li>
                  <b>Content:</b> Abstracts should provide an informative
                  summary of the original work. Include a brief biography with
                  your abstract, following the example provided in the template.
                </li>
                <li>
                  <b>Formatting:</b> Center-align the Title, Author's Names, and
                  Affiliations. Underline the presenting author's name.
                </li>
                <li>
                  <b>Submission:</b> Please submit your abstract through the
                  designated submission portal.
                </li>
                <li>
                  <b>Acknowledgment:</b> Upon abstract submission, you will
                  receive an acknowledgment email within three working days.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="text-color-h4 mb-3 text-center">
              Evaluation Process
            </h4>
            <div className="inner-column tex-container">
              <img
                src="assets/img/guid-r.png"
                alt="Evaluation Process"
                className="w-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorGuidelines;
