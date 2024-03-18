import { useEffect, useState } from "react";
import { LIST_OF_RESTAURANT } from "./constant";

const useListOfRestaurant = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(LIST_OF_RESTAURANT);
      const json = await data.json();
      setListOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      return listOfRestaurant;
    } catch {
      console.log("Error occurred while calling the restaurant API");
    }
  };
};

export default useListOfRestaurant;
