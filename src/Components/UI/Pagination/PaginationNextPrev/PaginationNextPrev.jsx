function PaginationNextPrev(props) {
  // On Click Change Page
  const onClickNextPrev = (value) => {
    if (value === "NEXT") {
      props.setCurrentPage((p) => p + 1);
      props.setSkip((p) => +p + 5);
    } else {
      props.setCurrentPage((p) => p - 1);
      props.setSkip((p) => +p - 5);
    }
  };

  let isDissabled = false;

  if (
    (props.totalPage === props.currentPage && props.text == "NEXT") ||
    (props.currentPage === 1 && props.text == "PREV") ||
    props.totalPage === 0
  ) {
    isDissabled = true;
  }

  return (
    <button
      disabled={isDissabled}
      onClick={(e) => {
        onClickNextPrev(e.target.innerText);
      }}
      className={`${isDissabled && "dissabledBtn"} Pagination-div__next`}
    >
      {props.text}
    </button>
  );
}

export default PaginationNextPrev;
