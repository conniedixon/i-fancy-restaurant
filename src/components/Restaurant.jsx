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

const Restaurant = ({ restaurant, selectedCuisines }) => {
  const { name, address, cuisine, rating } = restaurant;
  const [show, setShowing] = useState(false);

  useEffect(() => {
    setShowing(false);
    cuisine.map((catergory) => {
      if (selectedCuisines.includes(catergory)) setShowing(true);
    });

    return () => {};
  }, [selectedCuisines]);

  return (
    show && (
      <div>
        <h3>{name}</h3>
        {cuisine.map((cuisine) => (
          <div>
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
          </div>
        ))}
        <p>{address}</p>
      </div>
    )
  );
};

export default Restaurant;
