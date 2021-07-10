import React from "react";

const Menu = ({ items }) => {
  // console.log(menuItems);
  // console.log(title);

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;

        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" alt={img} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <h5 className="item-text">{category}</h5>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
