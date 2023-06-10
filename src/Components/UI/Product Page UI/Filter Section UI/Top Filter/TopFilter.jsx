import React from "react";
import "./TopFilter.css";
import Filter from "./Filter/Filter";

function TopFilter(props) {
  // On Click Clear Filter
  const onClickClearAll = () => {
    props.setFilter({ minPrice: "", maxPrice: "", rating: "" });
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
        {Object.entries(props.filter)
          .map((filterName) => {
            return (
              <Filter
                key={Math.random()}
                setFilter={props.setFilter}
                name={filterName}
              />
            );
          })
          .filter((filterName) => {
            return filterName.props.name[1] !== "";
          })}
      </div>
    </div>
  );
}

export default TopFilter;
