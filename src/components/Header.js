import { useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
import useNetworkChecker from "../utils/useNetworkChecker";
export const Header = () => {
  [LoginData, setLoginData] = useState([false]);
  const networkStatus = useNetworkChecker();
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

      <div></div>
      <span className="text-gray-400 text-xs tracking-widest">
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
