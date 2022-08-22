import React, { useState } from "react";

function Tour(props) {
  const [readMore, setReadMore] = useState(false);
  const { id, text, img, title, price } = props.tour;
  let classBtn = "btn  border-0 text-";
  classBtn += readMore ? "danger" : "success";
  return (
    <article className="my-5 ">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          style={{ width: "auto" }}
          alt={title}
        />
        <div className="card-body  px-3">
          <div className="card-title mb-3 d-flex justify-content-between fw-bold">
            <span>{title}</span>
            <small className=" text-primary">{price}</small>
          </div>
          <p className="card-text text-start">
            {readMore ? text : `${text.substring(0, 150)}`}
            <button
              className={classBtn}
              onClick={() => {
                return setReadMore(!readMore);
              }}
            >
              {readMore ? "Show Less" : "ReadMore"}
            </button>
          </p>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => {
              props.removeDats(id);
            }}
          >
            Not interested
          </button>
        </div>
      </div>
    </article>
  );
}

export default Tour;
