import React from 'react';

const Restaurant = ({ restaurants, onRestaurantClick }) => {
  return (
    <div className="restaurant-list">
      <h2>Select a Restaurant</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} onClick={() => onRestaurantClick(restaurant)}>
            {restaurant.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
