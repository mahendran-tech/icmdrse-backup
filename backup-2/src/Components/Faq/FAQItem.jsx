import React from "react";

const FAQItem = ({ question, answer, link }) => {
  return (
    <li className="list-group-item mb-3">
      <h6>
        {question}
      </h6>
      <p className="text m-1 ">
        <i class="bi bi-star-half" style={{ color: "#ff0000" }} />{" "}
        <strong>Ans:</strong> {answer}
        {link &&
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>}
      </p>
    </li>
  );
};

export default FAQItem;
