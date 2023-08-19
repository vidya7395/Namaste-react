import React from "react";
import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
const ResContainer = () => {
  //Local State variable - super powerful variable
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  //   listOfRestaurant = resList;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.617572&lng=72.92751&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurant?.length === 0) {
    return <h1>Loading...</h1>;
  }
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
      <input
        type="text"
        className="search"
        onChange={(event) => {
          const searchList = listOfRestaurant.filter((res) => {
            console.log(res.info.name);
            return res.info.name.includes(event.target.value);
          });
          setListOfRestaurant(searchList);
        }}
      />
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
