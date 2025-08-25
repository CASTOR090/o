import React, { useState } from "react";

const StarRating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRate) {
      onRate(newRating); // Chama o callback com a nova avaliação
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
{
    /*
const Star = ({ filled, onClick }) => (
  <span
    onClick={onClick}
    style={{
      cursor: "pointer",
      color: filled ? "gold" : "gray",
      fontSize: "24px",
    }}
  >
    ★
  </span>
);

    */
}
const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
  <span
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      cursor: "pointer",
      color: filled ? "gold" : "gray",
      fontSize: "48px",
    }}
  >
    ★
  </span>
);


export default StarRating;
