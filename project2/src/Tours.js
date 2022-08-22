import React from "react";
import Tour from "./Tour";

function Tours(props) {
  return (
    <section className="d-flex flex-column flex-nowrap align-items-center">
      <h1 className="text-white border-bottom border-white border-3 lh-lg">
        Our Tours
      </h1>
      <div style={{ maxWidth: "500px" }}>
        {props.data.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeDats={props.removeDats} />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
