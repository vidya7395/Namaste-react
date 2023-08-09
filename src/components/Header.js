import { LOGO_IMG } from "../utils/constant";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_IMG} />
      </div>
      <input type="text" className="search" />
      <div>
        <ul className="nav-link">
          <li className="nav-item">Home</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
