import React, { useState, useEffect } from "react";
import { getCuisines } from "../utils/utils";
import restaurants from "../db/restaurants.json";
import Restaurant from "./Restaurant";
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
import Vegan from "../assets/Vegan.png";
import DogFriendly from "../assets/DogFriendly.png";

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
    <div className='main-body'>
      {loading === false ? (
        <>
          <div className='restaurants-header-container'>
            <header className='restaurants-header'>I fancy...</header>
            <p className='p1'>
              Select a catergory below to get started. See the github{" "}
              <a
                href='https://github.com/conniedixon/i-fancy-restaurant'
                className='link'
                target='_blank'>
                here
              </a>
              .
            </p>
          </div>
          <div className='cuisine-button-container'>
            {cuisines.map((cuisine) => (
              <>
                <button
                  id={cuisine}
                  className={
                    selectedCuisine.includes(cuisine)
                      ? "cuisine-button-selected"
                      : "cuisine-button"
                  }
                  onClick={() => {
                    if (selectedCuisine.includes(cuisine)) {
                      let newArray = selectedCuisine.filter(
                        (x) => x !== cuisine
                      );
                      console.log(newArray);
                      setSelectedCuisine(newArray);
                    } else setSelectedCuisine([...selectedCuisine, cuisine]);
                  }}>
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
                    className='cuisine-button-emoji'
                  />
                  {cuisine}
                </button>
              </>
            ))}
          </div>
          <div className='cuisine-toggle-container'>
            <div className='toggle-container'>
              <label className='switch'>
                <input
                  type='checkbox'
                  onClick={() => {
                    if (selectedCuisine.includes("Vegan")) {
                      let newArray = selectedCuisine.filter(
                        (x) => x !== "Vegan"
                      );
                      console.log(newArray);
                      setSelectedCuisine(newArray);
                    } else setSelectedCuisine([...selectedCuisine, "Vegan"]);
                  }}
                />
                <div className='slider'></div>
              </label>
              <img src={Vegan} alt='Vegan' className='cuisine-button-emoji' />
              <p>Vegan</p>
            </div>

            <div className='toggle-container'>
              <label className='switch'>
                <input
                  type='checkbox'
                  onClick={() => {
                    if (selectedCuisine.includes("Dog-Friendly")) {
                      let newArray = selectedCuisine.filter(
                        (x) => x !== "Dog-Friendly"
                      );
                      console.log(newArray);
                      setSelectedCuisine(newArray);
                    } else
                      setSelectedCuisine([...selectedCuisine, "Dog-Friendly"]);
                  }}
                />
                <div className='slider'></div>
              </label>
              <img
                src={DogFriendly}
                alt='Dog Friendly'
                className='cuisine-button-emoji'
              />
              <p>Dog Friendly</p>
            </div>
          </div>

          <div className='restaurants-container'>
            {restaurants.map((restaurant) => (
              <Restaurant
                restaurant={restaurant}
                key={restaurant.id}
                selectedCuisines={selectedCuisine}
              />
            ))}
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default RestaurantsHomepage;
