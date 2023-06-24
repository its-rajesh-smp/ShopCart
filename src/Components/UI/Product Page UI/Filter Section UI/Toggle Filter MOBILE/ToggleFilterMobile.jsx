import React, { useState } from "react";
import "./ToggleFilterMobile.css";
import FilterSection from "../../../../Product Page/Filter Section/FilterSection";

function ToggleFilterMobile(props) {
  const [showFilter, setShowFilter] = useState(false);

  const showFilterHandeler = () => {
    setShowFilter((p) => !p);
  };

  return (
    <>
      <div className=" ToggleFilterMobile-div ">
        <button onClick={showFilterHandeler}>
          <i className="bx bx-filter"></i>Filter
        </button>
      </div>
      {showFilter && <FilterSection showFilterHandeler={showFilterHandeler} />}
    </>
  );
}

export default ToggleFilterMobile;
