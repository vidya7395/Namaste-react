import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryList from "./RestaurantCategoryList";
import { clearCart } from "../utils/Store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log("cartItem", cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //disptach an action
    dispatch(clearCart());
  };

  if (cartItem.length == 0) {
    return (
      <div className="w-6/12 mx-auto p-1 ">
        <h2 className="font-bold text-center">
          Cart is empty,Add some items to cart from
          <Link className="underline text-blue-300 ms-1" to="/">
            Restaurant
          </Link>
        </h2>
      </div>
    );
  }
  return (
    <div className="w-6/12 mx-auto p-1 ">
      <h1 className="text-xl font-bold mt-3">
        Cart({cartItem.length} dishes added)
      </h1>
      <RestaurantCategoryList
        categoryListData={cartItem}
      ></RestaurantCategoryList>
      <button
        className="px-3 py-1 font-bold rounded bg-orange-600 text-white font-semibold my-4"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
    </div>
  );
};
export default Cart;
