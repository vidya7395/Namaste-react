import React from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./restaurantCard";
import { useState } from "react";
const ResContainer = () => {
  //Local State variable - super powerful variable
  let [listOfRestaurant, setListOfRestaurant] = useState(resList);
  //   listOfRestaurant = resList;
  return (
    <React.Fragment>
      <button
        className="filter-btn"
        onClick={() => {
          // Filer Logic
          const filerList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(listOfRestaurant);
          setListOfRestaurant(filerList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </React.Fragment>
  );
};
export default ResContainer;
