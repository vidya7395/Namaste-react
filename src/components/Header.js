import { useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
export const Header = () => {
  [LoginData, setLoginData] = useState([false]);
  // let toggleBtn = () => {
  //   setLoginData(!LoginData);
  // };
  // useState(() => {
  //   toggleBtn();
  // }, false);

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_IMG} />
      </div>

      <div>
        <ul className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/contact-us">Contact us</Link>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
      <button
        className="btn "
        onClick={() => {
          setLoginData(!LoginData);
        }}
      >
        {LoginData ? "Login" : "Logout"}
      </button>
    </header>
  );
};

export default Header;
