import React from "react";
import "./TopFilter.css";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../../../../Store/Reducer/filterSortReducer";

function TopFilter(props) {

  const myFilter = useSelector(state => state.filterSortSlice.filter)
  const dispatch = useDispatch()

  // On Click Clear Filter
  const onClickClearAll = () => {
    dispatch(clearFilter())
  };

  return (
    <div className=" TopFilter-div filterCard">
      <div className=" TopFilter-div__firstDiv ">
        <p className=" TopFilter-div__firstDiv__filter ">Filters</p>
        <p
          className=" TopFilter-div__firstDiv__clear"
          onClick={onClickClearAll}
        >
          CLEAR ALL
        </p>
      </div>

      <div>

        {
          Object.entries(myFilter).map((item) => <Filter key={item[0]} name={item} />).filter((item) => {
            if (item.props.name[1] !== "" && item.props.name[1] !== "" && item.props.name[1] !== "") { return true }
          })
        }

      </div>
    </div>
  );
}

export default TopFilter;
