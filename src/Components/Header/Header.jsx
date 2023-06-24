import React, { useEffect, useState } from "react";
import "./Header.css";

// Media
import { ShowOnDesktop, ShowOnMobile } from "../../Style/Media";

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
import SearchProductWrapper from "../UI/SearchProductWrapper/SearchProductWrapper";

function Header(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  const navigate = useNavigate();

  // On Click Logout
  const onClickLogout = () => {
    dispatch(logoutUser());
    localStorage.clear("shopcart");
  };

  const onClickLogin = () => {
    dispatch(setLogin());
  };

  // On Click My Order
  const onClickNavigateMyOrder = () => {
    navigate("/yourorder");
  };

  // On Click Hambargar
  const [hambargar, setHambargar] = useState(true);
  const onClickHambargarBtn = () => {
    setHambargar((p) => !p);
  };

  const [searchedArr, setSearchedArr] = useState([]);

  // Note...
  /**
   * When user click on the search bar send a get request and get all the data
   * Sync with filter with debouncing
   */
  // const onClickSearchBar

  return (
    <>
      <div className=" Header-div ">
        <ShowOnMobile>
          <HeaderHambargar
            onClickHambargarBtn={onClickHambargarBtn}
            showHambargar={hambargar}
          >
            <HeaderDropdownItem
              name={"My Orders"}
              icon={<i className="bx bxs-shopping-bag"></i>}
              onClick={onClickNavigateMyOrder}
              onClickHambargarBtn={onClickHambargarBtn}
            />

            {isAuth && (
              <HeaderDropdownItem
                name={"Logout"}
                icon={<i className="bx bxs-log-out"></i>}
                onClick={onClickLogout}
                onClickHambargarBtn={onClickHambargarBtn}
              />
            )}

            {!isAuth && (
              <HeaderDropdownItem
                name={"Login"}
                icon={<i className="bx bxs-log-out"></i>}
                onClick={onClickLogin}
                onClickHambargarBtn={onClickHambargarBtn}
              />
            )}
            <HeaderSearch setSearchedArr={setSearchedArr} />
            <SearchProductWrapper searchedArr={searchedArr} />
          </HeaderHambargar>
        </ShowOnMobile>

        <HeaderIcon />

        <ShowOnDesktop>
          <HeaderSearch setSearchedArr={setSearchedArr} />
        </ShowOnDesktop>

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
          {isAuth && (
            <HeaderDropdownItem
              name={"Logout"}
              icon={<i className="bx bxs-log-out"></i>}
              onClick={onClickLogout}
            />
          )}
        </HeaderDropdown>

        <HeaderCart />
      </div>
      <ShowOnDesktop>
        <SearchProductWrapper searchedArr={searchedArr} />
      </ShowOnDesktop>
    </>
  );
}

export default Header;
