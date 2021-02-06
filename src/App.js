import React, {useState, useEffect} from 'react';
import {getCuisines} from "./utils/utils"
import restaurants from "./db/restaurants.json"
import Restaurant from './components/Restaurant';

const App = () => {
  const [cuisines, setCuisines] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCuisine, setSelectedCuisine] = useState([])

  useEffect(() => {
    const typesOfCuisine = getCuisines()
    // console.log(typesOfCuisine)
    setCuisines(typesOfCuisine)
    setLoading(false)
    return () => {
    }
  }, [])

  return (
    <>
     {loading === false ? (
       <div>
         <h5>Restaurants in Leeds</h5>
         {cuisines.map(cuisine=> (
           <>
           <label htmlFor={cuisine}>{cuisine}</label>
           <input type="checkbox" id={cuisine} name={cuisine}  onClick={()=>{setSelectedCuisine([...selectedCuisine, cuisine])}}/>
         </>
         )
         )}
       </div>
      ) : <p>loading...</p>}
      {restaurants.map(restaurant => (
        restaurant.cuisine.includes(selectedCuisine) && (
          <Restaurant restaurant={restaurant}/>
        )
      ))}
     </>
  );
};

export default App;