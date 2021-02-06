import React from "react";

const Restaurant = ({ restaurant }) => {
  const { name, address, cuisine, rating } = restaurant;
  return (
    <div>
      <h3>{name}</h3>
      {cuisine.map((cuisine) => (
        <h6>{cuisine}</h6>
      ))}
      <p>{address}</p>
    </div>
  );
};

export default Restaurant;
