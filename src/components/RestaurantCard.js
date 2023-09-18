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
        {
          <span
            className={
              avgRating > 4
                ? "bg-green-500 mt-1 text-white px-1 rounded-sm"
                : " mt-1 text-white px-1 rounded-sm bg-red-500"
            }
          >
            {avgRating}
          </span>
        }

        <p className="mt-1 text-gray-500">{cuisines.join(", ")}</p>
        <p className="text-gray-400 mt-1">📍{areaName}</p>
      </div>
    </div>
  );
};

export const RestaurantCardWithVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="bg-green-800 px-1 shadow-md rounded-sm text-white absolute">
          VEG
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;
