import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkChecker from "../utils/useNetworkChecker";

const Body = () => {
  const [listsOfRestaurant, setListsOfRestaurant] = useState([]);
  const [searchContent, setSearchContent] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const networkStatus = useNetworkChecker();

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.617572&lng=72.92751&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setListsOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {
      alert("Error occurred while calling the all restaurant API");
    }
  };
  if (!networkStatus) {
    return (
      <h1>
        Looks like you offline 📶!! Please check your internet connection.
      </h1>
    );
  }
  return (
    <div className="max-w-5xl mx-auto my-0">
      <div className="flex py-3">
        <input
          className="p-1 w-[80%] block rounded-md border border-gray-300"
          value={searchContent}
          onChange={(e) => {
            setSearchContent(e.target.value);
          }}
        />
        <button
          className="px-3 py-1 rounded-md border border-gray-300 min-w-min cursor-pointer ms-1"
          onClick={() => {
            const filterSearchList = listsOfRestaurant.filter((value) => {
              return value.info.name
                .toLowerCase()
                .includes(searchContent.toLowerCase());
            });
            setFilterList(filterSearchList);
          }}
        >
          Search
        </button>
        <button
          className="px-3 py-1 rounded-md border border-gray-300 min-w-fit cursor-pointer ms-1"
          onClick={() => {
            setFilterList(listsOfRestaurant);
          }}
        >
          Show All
        </button>
      </div>
      <button
        className="text-gray-700 font-medium my-2 px-3 py-1 rounded-md border border-gray-300 min-w-fit cursor-pointer ms-1"
        onClick={() => {
          // Filer Logic
          const filerList = listsOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          setFilterList(filerList);
        }}
      >
        Top Rated Restaurant
      </button>
      {listsOfRestaurant.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filterList.map((restaurant) => (
            <Link
              className="cursor-pointer"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant}></RestaurantCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
