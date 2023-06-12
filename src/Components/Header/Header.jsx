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
import { useNavigate } from "react-router-dom";

function Header(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  const navigate = useNavigate();

  // On Click Logout
  const onClickLogout = () => {
    dispatch(logoutUser());
    localStorage.clear("shopcart");
  };

  // On Click My Order
  const onClickNavigateMyOrder = () => {
    navigate("/yourorder");
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
        <HeaderDropdownItem
          name={"My Orders"}
          icon={<i className="bx bxs-shopping-bag"></i>}
          onClick={onClickNavigateMyOrder}
        />
        <HeaderDropdownItem
          name={"Logout"}
          icon={<i className="bx bxs-log-out"></i>}
          onClick={onClickLogout}
        />
      </HeaderDropdown>

      <HeaderCart />
    </div>
  );
}

export default Header;
