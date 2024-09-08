import React, { useState } from 'react';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const restaurants = [
    { id: 1, name: 'Pizza Palace' },
    { id: 2, name: 'Burger Hub' },
    { id: 3, name: 'Sushi World' },
  ];

  const menus = {
    1: [
      { id: 1, name: 'Pepperoni Pizza', price: '$12' },
      { id: 2, name: 'Veggie Pizza', price: '$10' },
    ],
    2: [
      { id: 3, name: 'Cheeseburger', price: '$8' },
      { id: 4, name: 'Double Burger', price: '$10' },
    ],
    3: [
      { id: 5, name: 'California Roll', price: '$15' },
      { id: 6, name: 'Spicy Tuna Roll', price: '$18' },
    ],
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        {!selectedRestaurant ? (
          <Restaurant restaurants={restaurants} onRestaurantClick={handleRestaurantClick} />
        ) : (
          <Menu restaurant={selectedRestaurant} menu={menus[selectedRestaurant.id]} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
