import { LOGO_URL } from "../utils/constants";


const Header = () => (
  <div className="logo-container flex items-center justify-between w-full px-4 py-2 bg-amber-200 border-2">
    <img
      className="logo w-25 h-25"
      src={LOGO_URL}
      alt="logo"
    />

    <ul className="links flex space-x-6 p-4 m-4">
      <li><a>About</a></li>
      <li>Contact US</li>
      <li>Home Page</li>
      <li>Cart</li>
    </ul>
  </div>
);


export default Header;