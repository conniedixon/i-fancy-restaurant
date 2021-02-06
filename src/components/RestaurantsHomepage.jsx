import React, { useState, useEffect } from "react";
import { getCuisines } from "../utils/utils";
import restaurants from "../db/restaurants.json";
import Restaurant from "./Restaurant";

const RestaurantsHomepage = () => {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisine, setSelectedCuisine] = useState([]);

  useEffect(() => {
    const typesOfCuisine = getCuisines();
    // console.log(typesOfCuisine)
    setCuisines(typesOfCuisine);
    setLoading(false);
    return () => {};
  }, []);

  return (
    <div>
      {loading === false ? (
        <div>
          <header>I fancy...</header>
          {cuisines.map((cuisine) => (
            <>
              <label htmlFor={cuisine}>{cuisine}</label>
              <input
                type='checkbox'
                id={cuisine}
                name={cuisine}
                onClick={() => {
                  if (selectedCuisine.includes(cuisine)) {
                    let newArray = selectedCuisine.filter((x) => x !== cuisine);
                    console.log(newArray);
                    setSelectedCuisine(newArray);
                  } else setSelectedCuisine([...selectedCuisine, cuisine]);
                }}
              />
            </>
          ))}
          {restaurants.map((restaurant) => (
            <Restaurant
              restaurant={restaurant}
              key={restaurant.id}
              selectedCuisines={selectedCuisine}
            />
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default RestaurantsHomepage;
