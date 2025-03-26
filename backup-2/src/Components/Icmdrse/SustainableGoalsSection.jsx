import React from "react";

const SustainableGoalsSection = ({
  goals,
  title = "Physical and Life Sciences is contributing",
}) => {
  return (
    <section
      className="testimonial-section pt-2 pb-2"
      style={{
        backgroundImage: "url(/assets/img/process_bg_1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="container">
        <div className="sec-title-three centered mb-1">
          <h2 className="text-height-1 text-center" style={{fontSize: "25px"}}>
            {title} to <br />
            <span>The Sustainable Development Goals:</span>
          </h2>
        </div>
        <div className="row  clearfix">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="carousel-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="testimonial-block-1">
                  <div className="inner-box">
                    <div className="d-flex">
                      <div>
                        <h5 style={{color: "#d90429"}}>{goal.title}</h5>
                      </div>
                    </div>
                    <div className="author-image">
                      <img src={goal.image} alt={goal.title} />
                    </div>
                    {goal.details.map((detail, idx) => (
                      <div key={idx} className="text mt-1 mb-1">
                        <i className="bi bi-brightness-high-fill" /> {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableGoalsSection;
