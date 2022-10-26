import React from "react";
import Review from "./component/review";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="text-center my-5 container wrapper">
      <h1>Reviews</h1>
      <Review />
      <span className="prev-btn">
        <FaAngleLeft className="angleIcon" />
      </span>

      <span className="next-btn">
        <FaAngleRight className="angleIcon" />
      </span>
    </div>
  );
}

export default App;
