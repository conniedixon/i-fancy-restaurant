import React, { useState, useEffect } from "react";

const Restaurant = ({ restaurant, selectedCuisines }) => {
  const { name, address, cuisine, rating } = restaurant;
  const [show, setShowing] = useState(false);

  useEffect(() => {
    setShowing(false);
    cuisine.map((catergory) => {
      console.log(catergory, selectedCuisines);
      if (selectedCuisines.includes(catergory)) setShowing(true);
    });

    return () => {};
  }, [selectedCuisines]);

  return (
    show && (
      <div>
        <h3>{name}</h3>
        {cuisine.map((cuisine) => (
          <h6>{cuisine}</h6>
        ))}
        <p>{address}</p>
      </div>
    )
  );
};

export default Restaurant;
