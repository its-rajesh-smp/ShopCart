import React from "react";
import "./Pagination.css";
import PaginationNumber from "../../UI/Pagination/PaginationNumber/PaginationNumber";
import PaginationNextPrev from "../../UI/Pagination/PaginationNextPrev/PaginationNextPrev";


function Pagination({ skip, setSkip, length }) {


  const paginationNumberArr = []
  for (let i = 1; i <= Math.ceil(length / 5); i++) {
    paginationNumberArr.push(<PaginationNumber setSkip={setSkip} skip={skip} key={i} number={i} />)
  }





  return (
    <div className=" Pagination-div ">
      <PaginationNextPrev
        length={length}
        text="PREV"
        setSkip={setSkip}
        skip={skip}
      />

      {paginationNumberArr}

      <PaginationNextPrev
        length={length}
        text="NEXT"
        setSkip={setSkip}
        skip={skip}
      />
    </div>
  );
}

export default Pagination;
