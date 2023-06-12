import React from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../../../Store/Reducer/filterSortReducer";

function Filter(props) {
  const dispatch = useDispatch();

  // Remove Filter On Click Single DeleteFliter
  const onClickClearFilter = () => {
    dispatch(setFilter({ [props.name[0]]: "" }));
  };

  return (
    <div className=" Filter-div ">
      <p onClick={onClickClearFilter}>X</p>
      <p>{props.name[0].toUpperCase()}</p>
      <p>{props.name[1].toUpperCase()}</p>
    </div>
  );
}

export default Filter;
