import React, { useEffect, useRef, useState } from "react";
import "./FilterSection.css";
import { ShowOnMobile } from "../../../Style/Media";
import TopFilter from "../../UI/Product Page UI/Filter Section UI/Top Filter/TopFilter";
import PriceFilter from "../../UI/Product Page UI/Filter Section UI/Price Filter/PriceFilter";
import RatingFilter from "../../UI/Product Page UI/Filter Section UI/Rating Filter/RatingFilter";
import SortFilter from "../../UI/Product Page UI/Filter Section UI/Sort Filter/SortFilter";

function FilterSection(props) {
  return (
    <div className=" FilterSection-div ">
      <TopFilter />
      <PriceFilter />
      <RatingFilter />
      <ShowOnMobile>
        <SortFilter />
        <button
          onClick={props.showFilterHandeler}
          className="FilterSection-div__applyFilterBTN"
        >
          APPLY FILTER
        </button>
      </ShowOnMobile>
    </div>
  );
}

export default FilterSection;
