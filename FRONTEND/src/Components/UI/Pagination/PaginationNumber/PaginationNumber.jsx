function PaginationNumber({ number, setSkip, skip }) {


  // On Click Page Number
  const onClickPage = () => {
    setSkip(5 * number - 5)
  };



  return (
    <button
      className={`${(5 * number - 5) === skip && "active_page"}`}
      disabled={skip === (5 * number - 5)}
      onClick={onClickPage}
    >
      {number}
    </button>
  );
}

export default PaginationNumber;
