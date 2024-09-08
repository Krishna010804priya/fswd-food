import React from 'react';

const Menu = ({ restaurant, menu }) => {
  return (
    <div className="menu">
      <h2>{restaurant.name} - Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
