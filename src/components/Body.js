import { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listsOfRestaurant, setListsOfRestaurant] = useState([]);
  const [searchContent, setSearchContent] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    console.log("called");
    fetchData();
  }, []);

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
  console.log("rendering");
  return (
    <div>
      <div className="box">
        <button
          className="filter-btn"
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
        <input
          className="search"
          value={searchContent}
          onChange={(e) => {
            setSearchContent(e.target.value);
          }}
        />
        <button
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
          onClick={() => {
            setFilterList(listsOfRestaurant);
          }}
        >
          Show All
        </button>
      </div>
      {listsOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterList.map((restaurant) => (
            <Link
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
