import React, { useState, useEffect } from "react";

import Argentinian from "../assets/Argentinian.png";
import Asian from "../assets/Asian.png";
import Balti from "../assets/Balti.png";
import Bar from "../assets/Bar.png";
import British from "../assets/British.png";
import Cafe from "../assets/Cafe.png";
import Indian from "../assets/Indian.png";
import International from "../assets/International.png";
import Pakistani from "../assets/Pakistani.png";
import Pub from "../assets/Pub.png";
import Steakhouse from "../assets/Steakhouse.png";
import Vietnamese from "../assets/Vietnamese.png";
import DogFriendly from "../assets/DogFriendly.png";
import Vegan from "../assets/Vegan.png";
import Location from "../assets/Location.png";

const Restaurant = ({ restaurant, selectedCuisines }) => {
  const { name, address, cuisine, rating } = restaurant;
  const [show, setShowing] = useState(false);

  useEffect(() => {
    setShowing(false);
    cuisine.map((catergory) => {
      if (selectedCuisines.includes(catergory)) setShowing(true);
      if (
        restaurant["dog-friendly"] &&
        selectedCuisines.includes("Dog-Friendly")
      )
        setShowing(true);
      if (restaurant["vegan-options"] && selectedCuisines.includes("Vegan"))
        setShowing(true);
    });

    return () => {};
  }, [selectedCuisines]);

  const returnRating = (x) => {
    let rating = "";
    for (let i = 0; i < x; i++) {
      rating = `${rating}⭐`;
    }
    return rating;
  };

  return (
    show && (
      <div className='restaurant-container'>
        <h3 className='restaurant-header'>{name}</h3>
        <div>
          {cuisine.map((cuisine) => (
            <img
              src={
                cuisine === "Argentinian"
                  ? Argentinian
                  : cuisine === "Asian"
                  ? Asian
                  : cuisine === "Balti"
                  ? Balti
                  : cuisine === "Bar"
                  ? Bar
                  : cuisine === "British"
                  ? British
                  : cuisine === "Cafe"
                  ? Cafe
                  : cuisine === "Indian"
                  ? Indian
                  : cuisine === "International"
                  ? International
                  : cuisine === "Pakistani"
                  ? Pakistani
                  : cuisine === "Pub"
                  ? Pub
                  : cuisine === "Steakhouse"
                  ? Steakhouse
                  : Vietnamese
              }
              alt={cuisine}
              className='cuisine-emoji'
            />
          ))}
          {restaurant["dog-friendly"] && (
            <img
              src={DogFriendly}
              alt='Dog Friendly'
              className='cuisine-emoji'
            />
          )}
          {restaurant["vegan-options"] && (
            <img src={Vegan} alt='Vegan Options' className='cuisine-emoji' />
          )}
        </div>
        <div className='location-container'>
          <img src={Location} alt='location' className='location-emoji' />
          <p>{address}</p>
        </div>
        <div>{returnRating(restaurant.rating)}</div>
      </div>
    )
  );
};

export default Restaurant;
