import amazonImage from "../../assets/amazonLogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "../Header/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("./sign-up");
  };
  return (
    <>
      <div className="amazon_header">
        <Link to={"/"} className="image_suffix">
          <img src={amazonImage} alt="" />
          <span id="amazon_suffix">.in</span>
        </Link>
        <div className="amazon_header_location">
          <LocationOnOutlinedIcon />
          <div className="location_text">
            <div>Delivering to Bengaluru</div>
            <div id="update_location_text">Update Location</div>
          </div>
        </div>
        <div className="amazon_search_bar">
          <input type="text" placeholder="Search Here" className="input_bar" />
          <div className="amazon_search_bar_icon">
            <SearchIcon />
          </div>
        </div>
        <div className="amazon_account_list" onClick={handleNavigate}>
          <div>Hello, sign in</div>
          <div className="amazon_account">
            <div>Account and lists</div>
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
        <div className="amazon_returns_and_orders">
          <div className="amazon_returns">Returns</div>
          <div className="amazon_orders">& Orders</div>
        </div>
        <div className="amazon_cart_wrapper">
          <Link to={"/cart"} className="amazon_cart">
            <span>0</span>
            <ProductionQuantityLimitsOutlinedIcon />
          </Link>
          <span>Cart</span>
        </div>
      </div>
    </>
  );
}

export default Header;
