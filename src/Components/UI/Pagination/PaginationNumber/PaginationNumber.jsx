function PaginationNumber(props) {
  // On Click Page Number
  const onClickPage = (pageNumber) => {
    if (props.currentPage != props.number) {
      props.setSkip((p) => {
        return 5 * +pageNumber;
      });
      props.setCurrentPage(+pageNumber);
    }
  };

  return (
    <button
      className={`${props.currentPage == props.number ? "active_page" : ""}`}
      onClick={(e) => onClickPage(e.target.innerText)}
    >
      {props.number}
    </button>
  );
}

export default PaginationNumber;
