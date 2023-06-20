import { useDispatch } from "react-redux";
import "./CreateReview.css";
import { useState } from "react";
import { addNewProductReview } from "../../../../Store/Actions/fetchCurrentProduct";

function CreateReview(props) {
  const dispatch = useDispatch();

  const [ratingInput, setRatingInput] = useState(5);
  const [reviewInput, setReviewInput] = useState("");
  const [loader, setLoader] = useState(false);

  // Add Review On Button Click
  const addNewProductReviewOnClick = () => {
    if (reviewInput.trim() !== "") {
      if (!loader) {
        setLoader(true);
        dispatch(
          addNewProductReview(
            { rating: Number(ratingInput), review: reviewInput },
            props.data,
            props.setReviews,
            setReviewInput,
            setLoader
          )
        );
      }
    }
  };

  return (
    <div className="CreateReview">
      <input
        onChange={(e) => setReviewInput(e.target.value)}
        placeholder="Add Your Review Here"
        type="text"
        value={reviewInput}
      />
      <select onChange={(e) => setRatingInput(e.target.value)} name="star">
        <option value="5">5⭐</option>
        <option value="4">4⭐</option>
        <option value="3">3⭐</option>
        <option value="2">2⭐</option>
        <option value="1">1⭐</option>
      </select>
      <button onClick={addNewProductReviewOnClick}>
        {loader ? <i className="bx bx-loader-circle" /> : "Submit Review"}
      </button>
    </div>
  );
}

export default CreateReview;
