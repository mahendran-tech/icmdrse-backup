const TestimonialCard = ({ img, title, content }) => {
  return (
    <div className="cs_testimonial cs_style_2">
      <div className="cs_testimonial_header position-relative">
        <div className="cs_testimonial_thumbnail cs_mb_16 cs_radius_50">
          <img src={img} alt="Avatar" />
        </div>

        <div className="cs_polygon_shape position-absolute">
          <img src="assets/img/shapes/polygon.svg" alt="Polygon Shape" />
        </div>
      </div>
      <div className="cs_testimonl_content">
        <div className="cs_section_heading cs_style_1 cs_mb_33">
          <h2 className="cs_section_title cs_fs_30 cs_white_color mb-0">
            {title}
          </h2>
        </div>
        <blockquote>
          {content}
        </blockquote>
        <div className="cs_rating">
          <div className="rating-area">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
