import { FOOD_IMG } from "../utils/constant";
const RestaurantCategoryList = ({ categoryListData }) => {
  return (
    <>
      {categoryListData.map((data) => (
        <div
          key={data?.card?.info?.id}
          className="flex items-center justify-between py-3 border-b px-2"
        >
          <div className="tracking-wider pe-3 w-9/12">
            <div>
              <div>
                {data?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <span className="text-xs border border-2 border-green-500">
                    🟢
                  </span>
                ) : (
                  <span className="text-xs border border-2 border-red-500">
                    🔴
                  </span>
                )}

                {data?.card?.info?.isBestseller ? (
                  <span className="text-xs text-orange-500 font-semibold ms-3 tracking-wide">
                    🧡 Bestseller
                  </span>
                ) : (
                  ""
                )}
              </div>
              <h3 className="mt-1 text-lg"> {data?.card?.info.name}</h3>
              <span className="font-normal">
                ₹ {data?.card?.info.price / 100}
              </span>
              <p className="mt-3 text-xs text-gray-400">
                {data?.card?.info.description}
              </p>
            </div>
          </div>
          <div className="w-2/12 relative flex justify-center">
            {data?.card?.info?.imageId && (
              <img
                src={FOOD_IMG + data?.card?.info?.imageId}
                alt=""
                className="rounded"
              />
            )}
            <button className="bg-white rounded absolute bottom-[-10px] shadow border p-2 text-green-600 text-xs font-semibold">
              ADD
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default RestaurantCategoryList;
