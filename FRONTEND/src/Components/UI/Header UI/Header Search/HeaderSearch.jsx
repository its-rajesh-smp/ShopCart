import React, { useEffect, useState } from "react";
import "./HeaderSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../../../Store/Actions/searchAction";

function HeaderSearch(props) {
  // Search Logic
  const [searchParam, setSearchParam] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const allPrductData = useSelector(
    (state) => state.searchProductSlice.searchProductArr
  );

  //Fetching All Data If All Product Data is not available in reducer
  const onClickInputFetchAllData = () => {
    if (allPrductData.length === 0) {
      dispatch(searchProduct());
    }
  };

  // Some Big Issue is here due to make the arr empty we loss the click
  // So not opening the product page after click on the search product

  useEffect(() => {
    let timeout;
    const filteredArr = allPrductData.filter((item) => {
      if (item.title.includes(searchParam)) {
        return true;
      }
    });
    if (searchParam === "" || isFocused === false) {
      timeout = setTimeout(() => {
        props.setSearchedArr([]);
      }, 100);
    } else {
      props.setSearchedArr(filteredArr);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [searchParam, isFocused]);

  return (
    <div className=" HeaderSearch-div ">
      <input
        onBlur={() => {
          setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onClick={onClickInputFetchAllData}
        type="text"
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Search For Products, brands and more"
      />
      <button>
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}

export default HeaderSearch;
