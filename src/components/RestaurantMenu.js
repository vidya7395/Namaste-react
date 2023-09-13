import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FOOD_IMG } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (restInfo == null)
    return (
      <div className="max-w-4xl mx-auto">
        <Shimmer />
      </div>
    );
  const { name, cuisines, id, areaName, cloudinaryImageId } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const menu =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;
  console.log(
    "MENU",
    menu.map((data) => data.card.info)
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Link className="cursor-pointer " to={"/"}>
        <div className="text-2xl mt-2">⬅️</div>
      </Link>
      <div className="mt-3 flex flex-col">
        <img
          src={FOOD_IMG + cloudinaryImageId}
          alt=""
          className="rounded-md w-full h-[300px] object-cover"
        />
        <h1 className=" mt-4 font-medium">{name}</h1>
        <p className="text-gray-400">Locality : {areaName}</p>
        <h2 className="mt-2">Cuisines</h2>
        <p className="text-gray-400">{cuisines.join(",")}</p>
        <h2 className="mt-2 text-3xl text-gray-600 mb-3">Menu</h2>
        <ul className="grid grid-cols-3 gap-4">
          {menu.map((data) => (
            <li className="item">
              <img
                className="w-full h-[200px] object-cover rounded-md"
                alt={data?.card?.info?.name + " Image"}
                src={FOOD_IMG + data?.card?.info?.imageId}
              />
              <div>{data?.card?.info?.name}</div>
              <div className="text-gray-500">
                Category :{data?.card?.info?.category}
              </div>
              <div className="text-gray-500">
                Price :{data?.card?.info?.price}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
