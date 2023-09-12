import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  if (restInfo == null) return <Shimmer />;
  const { name, cuisines, id, areaName } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  return (
    <div>
      <h1 className="text-center">{name}u</h1>
      <p>Locality : {areaName} ff</p>
      <h2>Cuisines</h2>
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        <li>name : price</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
