import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // console.log(items.title);
  // const randomFunc = () => {
  //   console.log("clicked haha");
  // };

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => {
      return category === item.category;
    });
    // console.log(newItems);
    // console.log(category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <br />
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
