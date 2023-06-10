import React from "react";
import "./Filter.css";

function Filter(props) {
  // Remove Filter On Click Close
  const onClickClearFilter = () => {
    props.setFilter((p) => {
      const newObj = { ...p, [props.name[0]]: "" };
      return newObj;
    });
  };

  return (
    <div className=" Filter-div ">
      <p onClick={onClickClearFilter}>X</p>
      <p>{props.name[0].toUpperCase()}</p>
      <p>{props.name[1]}</p>
    </div>
  );
}

export default Filter;
