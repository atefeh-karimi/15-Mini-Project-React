import React from "react";

function Categories({ category, filterMenuItems }) {
  return (
    <button className=" mt-3" onClick={() => filterMenuItems(category)}>
      {category}
    </button>
  );
}

export default Categories;
