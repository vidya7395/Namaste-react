import { FOOD_IMG } from "../utils/constant";
// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  return (
    <div className="w-full rounded-md cursor-pointer hover:shadow-lg h-full">
      <img
        src={FOOD_IMG + cloudinaryImageId}
        className="h-[150px] object-cover w-full rounded-md"
      />
      <div className="p-3">
        <h3 className="text-lg">{name}</h3>
        <h4 className="mt-1 text-gray-400 ">{avgRating}</h4>
        <p className="mt-1 text-gray-400">{cuisines.join(", ")}</p>
        <p className="text-gray-400">{areaName}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
