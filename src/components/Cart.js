import { useSelector } from "react-redux";

const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  console.log(item);
  if (item.length == 0) {
    return (
      <div className="w-[500px] mx-auto p-1 ">
        <h2 className="font-bold text-center">Cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="w-[500px] mx-auto p-1 ">
      <h1 className="text-xl font-bold mt-3">Cart</h1>
    </div>
  );
};
export default Cart;
