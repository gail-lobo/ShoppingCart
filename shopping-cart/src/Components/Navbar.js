import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ cartSize }) => {
  return (
    // Navigation bar
    <nav>
      <div className="nav-bar">
        {/* Store name with a link to the home page */}
        <Link to="/">
          <span className="store-name">"Paws" pet supplies</span>
        </Link>

        {/* Cart section with a link to the cart page */}
        <div className="cart">
          <Link to="/cart">
            {/* Cart icon and the number of items in the cart */}
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>{" "}
            <span>{cartSize}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
