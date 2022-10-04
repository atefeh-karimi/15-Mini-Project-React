import React from "react";

function Menu({ title, price, desc, img }) {
  return (
    <article className="mt-4 menuItem">
      <img src={img} alt={title} />
      <div className="mt-3">
        <h4>{title}</h4>
        <span>${price}</span>
        <p className="text-wrap mt-2 px-3 text-muted text-justify">{desc}</p>
      </div>
    </article>
  );
}

export default Menu;
