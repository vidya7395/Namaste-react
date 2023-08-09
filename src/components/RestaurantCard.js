import { FOOD_IMG } from "../utils/constant";
// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={FOOD_IMG + cloudinaryImageId} />
      <div className="res-info">
        <h3 className="title">{name}</h3>
        <h4 className="rating">{avgRating}</h4>
        <p className="items">{cuisines.join(", ")}</p>
        <p className="address">{areaName}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
