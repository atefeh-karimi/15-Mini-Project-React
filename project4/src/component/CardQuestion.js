import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles/CardQuestion.css";

function CardQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header className="headerQue">
        <h6>{title}</h6>
        <button
          className="btnQue"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <FaMinus className="btnIcon" />
          ) : (
            <FaPlus className="btnIcon" />
          )}
        </button>
      </header>
      {showInfo && <p className="text-muted mt-2">{info}</p>}
    </article>
  );
}

export default CardQuestion;
