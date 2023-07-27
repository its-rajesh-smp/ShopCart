function PaginationNextPrev({ text, setSkip, skip, length }) {


  const onButtonClickHandeler = () => {
    if (text === "NEXT" && skip < length - 5) {
      setSkip(p => p + 5)
    }
    else if (text === "PREV" && skip > 0) {
      setSkip(p => p - 5)
    }
  }




  let isDissabled;
  if (text === "NEXT" && skip === length - 5) {
    isDissabled = true
  }
  else if (text === "PREV" && skip === 0) {
    isDissabled = true
  }



  return (
    <button
      disabled={isDissabled}
      onClick={onButtonClickHandeler}
      className={`${isDissabled && 'dissabledBtn'} Pagination-div__next`}
    >
      {text}
    </button>
  );
}

export default PaginationNextPrev;
