import React, {useState} from "react";
import "./Card.css";

const StepAnimationCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${selectedCard === 0 ? "selected" : "selected"}`}
        onClick={() => handleCardClick(0)}
        onMouseEnter={() => setSelectedCard(0)}
        onMouseLeave={() => setSelectedCard(null)}>
        <figure id="luna" />
      </div>
    </div>
  );
};

export default StepAnimationCard;
