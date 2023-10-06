import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FOOD_IMG } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [isShowIndex, setIsShowIndex] = useState(true);

  if (restInfo == null)
    return (
      <div className="max-w-4xl mx-auto">
        <Shimmer />
      </div>
    );
  const { name, cuisines, id, areaName, cloudinaryImageId } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) =>
        data?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link className="cursor-pointer " to={"/"}>
        <div className="text-2xl mt-2">⬅️</div>
      </Link>
      <div className="mt-3 flex flex-col">
        <h1 className=" mt-4 font-medium text-4xl">{name}</h1>
        <p className="text-gray-400">Locality : {areaName}</p>
        <h2 className="mt-2">Cuisines</h2>
        <p className="text-gray-400">{cuisines.join(", ")}</p>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          categoryData={category?.card?.card}
          isShowItem={index === showIndex && true}
          setShowIndex={() => {
            if (index === showIndex) {
              setShowIndex(null);
            } else {
              setShowIndex(index);
            }
          }}
        ></RestaurantCategory>
      ))}
    </div>
  );
};
export default RestaurantMenu;
