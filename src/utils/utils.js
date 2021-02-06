const restaurants = require("../db/restaurants.json")

exports.getCuisines = () => {
    const cuisines = []
    restaurants.map(resutaurant => {
        resutaurant.cuisine.map(cuisine=>{
            if (!cuisines.includes(cuisine))
            cuisines.push(cuisine)
        })
    })
    return cuisines
}
