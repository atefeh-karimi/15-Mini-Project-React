import React, { useState } from "react";
import Categories from "./component/Categories";
import Menu from "./component/Menu";
import { menu } from "./data";
import "./App.css";

const allCategories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);
  const filterMenuItems = (category) => {
    if (category === "all") {
      return setMenuItems(menu);
    }
    const newMenuItem = menu.filter((c) => c.category === category);
    setMenuItems(newMenuItem);
  };
  return (
    <div className="container text-center mt-5">
      <h1>Our Menu</h1>

      {categories.map((category, index) => {
        return (
          <Categories
            key={index}
            category={category}
            filterMenuItems={filterMenuItems}
          />
        );
      })}

      <div className="menu">
        {menuItems.map((data) => {
          return <Menu key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
