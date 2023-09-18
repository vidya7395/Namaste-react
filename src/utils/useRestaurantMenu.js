import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constant";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU + restId);
    const json = await data.json();
    setRestInfo(json);
  };
  return restInfo;
};

export default useRestaurantMenu;
