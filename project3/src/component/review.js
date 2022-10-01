import React, { useState } from "react";
import { reviews } from "../content";
import { FaAngleRight, FaAngleLeft, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { img, name, job, info } = reviews[index];

  function handleNextReview() {
    let newIndex = index + 1;
    if (newIndex > reviews.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }
  function handlePrevReview() {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    setIndex(newIndex);
  }
  function handleRandomReview() {
    let rendomNum = Math.floor(Math.random() * reviews.length);
    setIndex(rendomNum);
  }
  return (
    <div className="cards__container ">
      <div className="card">
        <div className="card__img-background">
          <img className="card__img" src={img} alt={name} />
          <span className="card__img-quote">
            <FaQuoteRight className="card__img-quoteIcon" />
          </span>
        </div>
        <h4 className="author card-title">{name}</h4>

        <small className="job card-subtitle text-info">{job}</small>
        <p className="comment text-muted card-text px-3 py-3 ">{info}</p>
      </div>

      <div className="btn-container">
        <span className="prev-btn">
          <FaAngleLeft className="angleIcon" onClick={handlePrevReview} />
        </span>
        <span className="next-btn">
          <FaAngleRight className="angleIcon" onClick={handleNextReview} />
        </span>
      </div>

      <button
        className="random-btn btn btn-sm btn-outline-info mb-3"
        onClick={handleRandomReview}
      >
        Suprise Me
      </button>
    </div>
  );
}

export default Review;
