import React, { useCallback, useState } from "react";
import "./Pagination.css";
import PaginationNumber from "../../UI/Pagination/PaginationNumber/PaginationNumber";
import PaginationNextPrev from "../../UI/Pagination/PaginationNextPrev/PaginationNextPrev";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate Page Number
  const pageNumbersArray = useCallback(() => {
    const pageNumberArr = [];
    const floorLength = Math.ceil(props.length / 5);

    for (let i = 1; i <= floorLength; i++) {
      pageNumberArr.push(
        <PaginationNumber
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setSkip={props.setSkip}
          key={i}
          number={i}
        />
      );
    }
    return pageNumberArr;
  }, [props.length, currentPage]);

  return (
    <div className=" Pagination-div ">
      <PaginationNextPrev
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setSkip={props.setSkip}
        text="PREV"
        totalPage={Math.ceil(props.length / 5)}
      />
      {pageNumbersArray()}
      <PaginationNextPrev
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setSkip={props.setSkip}
        text="NEXT"
        totalPage={Math.ceil(props.length / 5)}
      />
    </div>
  );
}

export default Pagination;
