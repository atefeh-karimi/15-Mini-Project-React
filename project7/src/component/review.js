import React, { useState } from "react";
import { reviews } from "../content";
import { FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { img, name, job, info } = reviews[index];
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
    </div>
  );
}

export default Review;
