import { useContext, useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
import useNetworkChecker from "../utils/useNetworkChecker";
import { UserContext } from "../utils/userContext";
import { useSelector } from "react-redux";
export const Header = () => {
  console.log("Header rendering");

  [LoginData, setLoginData] = useState([false]);

  //Selector from redux(Here we are subscribing to the store)
  const cartItems = useSelector((store) => store.cart.items);
  const practiceSlice = useSelector((store) => store.practice.array);
  console.log("practice slice", cartItems);
  const networkStatus = useNetworkChecker();
  const { userLoggedIn } = useContext(UserContext);

  // let toggleBtn = () => {
  //   setLoginData(!LoginData);
  // };
  // useState(() => {
  //   toggleBtn();
  // }, false);

  return (
    <header className="flex justify-between px-10 py-3 items-center border-b-[1px] border-gray-300">
      <div className="w-[80px]">
        <Link to="/">
          <img
            src={LOGO_IMG}
            className="w-full rounded-md h-[27px] object-cover scale-[1.4]"
          />
        </Link>
      </div>
      <div className="flex align-middle">
        <Link to="/" className="me-3">
          Home
        </Link>
        <Link to="about-us">About us</Link>
        <ul className="decoration-none mx-2">
          <Link to="cart">
            <li className="font-semibold mx-2 cursor-pointer">
              Cart({cartItems.length} items)
            </li>
          </Link>
        </ul>
      </div>
      <span className="text-gray-400 text-xs tracking-widest">
        <div className="text-gray-600">{userLoggedIn}</div>
        Online Status:
        {networkStatus ? <span>🟢</span> : <span>🔴</span>}
      </span>
      {/* <button
        className="btn "
        onClick={() => {
          setLoginData(!LoginData);
        }}
      >
        {LoginData ? "Login" : "Logout"}
      </button> */}
    </header>
  );
};

export default Header;
