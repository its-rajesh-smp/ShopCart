import React, { useState } from "react";
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

  // On Click Hambargar
  const [hambargar, setHambargar] = useState(true);
  const onClickHambargarBtn = () => {
    setHambargar((p) => !p);
  };
  const closeHambargar = () => {
    setHambargar(false);
  };

  // Note...
  /**
   * When user click on the search bar send a get request and get all the data
   *
   */
  const [searchedArr, setSearchedArr] = useState([]);

  // On Click Logout
  const onClickLogout = () => {
    dispatch(logoutUser());
    localStorage.clear("shopcart");
    closeHambargar();
  };

  // On Click Login
  const onClickLogin = () => {
    dispatch(setLogin());
    closeHambargar();
  };

  // On Click My Order
  const onClickNavigateMyOrder = () => {
    navigate("/yourorder");
    closeHambargar();
  };

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
            />

            {isAuth && (
              <HeaderDropdownItem
                name={"Logout"}
                icon={<i className="bx bxs-log-out"></i>}
                onClick={onClickLogout}
              />
            )}

            {!isAuth && (
              <HeaderDropdownItem
                name={"Login"}
                icon={<i className="bx bxs-log-out"></i>}
                onClick={onClickLogin}
              />
            )}

            <HeaderSearch setSearchedArr={setSearchedArr} />

            <SearchProductWrapper
              closeHambargar={closeHambargar}
              searchedArr={searchedArr}
            />
          </HeaderHambargar>
        </ShowOnMobile>

        <HeaderIcon closeHambargar={closeHambargar} />

        <ShowOnDesktop>
          <HeaderSearch setSearchedArr={setSearchedArr} />
        </ShowOnDesktop>

        {!isAuth && (
          <button onClick={onClickLogin} className="header__loginBTn">
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

        <HeaderCart closeHambargar={closeHambargar} />
      </div>
      <ShowOnDesktop>
        <SearchProductWrapper
          closeHambargar={closeHambargar}
          searchedArr={searchedArr}
        />
      </ShowOnDesktop>
    </>
  );
}

export default Header;
