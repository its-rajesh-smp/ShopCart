import React from "react";
import "./Header.css";

// Media
import { ShowOnMobile } from "../../Style/Media";

// Components
import HeaderIcon from "../UI/Header UI/Header Icon/HeaderIcon";
import HeaderSearch from "../UI/Header UI/Header Search/HeaderSearch";
import HeaderDropdown from "../UI/Header UI/Header Dropdown/HeaderDropdown";
import HeaderCart from "../UI/Header UI/Header Cart/HeaderCart";
import HeaderHambargar from "../UI/Header UI/Header Hambargar/HeaderHambargar";
import { HeaderDropdownItem } from "../UI/Header UI/Header Dropdown/HeaderDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../Store/Reducer/toggleLogin";
import { logoutUser } from "../../Store/Reducer/authReducer";

function Header(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isAuth);

  // On Click Logout
  const onClickLogout = () => {
    dispatch(logoutUser());
    localStorage.clear("shopcart");
  };

  return (
    <div className=" Header-div ">
      <ShowOnMobile>
        <HeaderHambargar />
      </ShowOnMobile>

      <HeaderIcon />

      <HeaderSearch />

      {!isAuth && (
        <button
          onClick={() => {
            dispatch(setLogin());
          }}
          className="header__loginBTn"
        >
          LOGIN
        </button>
      )}

      <HeaderDropdown for="My Account">
        <HeaderDropdownItem onClick={onClickLogout} />
      </HeaderDropdown>

      <p className="header__becomeASeller">Become a Seller</p>

      <HeaderDropdown for="More" />

      <HeaderCart />
    </div>
  );
}

export default Header;
