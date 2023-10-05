import { useState } from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ categoryData, isShowItem, setShowIndex }) => {
  // let [isShowItem, setIsShowItem] = useState(false);
  const handleClick = () => {
    // setIsShowItem(!isShowItem);
    setShowIndex();
  };
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray-100 rounded"
        onClick={handleClick}
      >
        <h3 className="text-xl font-bold py-3 px-2">
          {categoryData.title} ({categoryData.itemCards.length})
        </h3>
        {isShowItem ? (
          <span className="me-2">▼ </span>
        ) : (
          <span className="me-2">▲</span>
        )}
      </div>
      {/* Restaurant catagories */}
      {isShowItem && (
        <RestaurantCategoryList categoryListData={categoryData.itemCards} />
      )}

      <div className="p-2 bg-blue-50 my-1"></div>
    </div>
  );
};

export default RestaurantCategory;
