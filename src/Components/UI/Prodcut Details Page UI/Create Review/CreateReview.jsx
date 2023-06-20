import "./CreateReview.css";
function CreateReview() {
  return (
    <div className="CreateReview">
      <input placeholder="Add Your Review Here" type="text" />
      <select name="star">
        <option value="5">5⭐</option>
        <option value="4">4⭐</option>
        <option value="3">3⭐</option>
        <option value="2">2⭐</option>
        <option value="1">1⭐</option>
      </select>
      <button>Submit Review</button>
    </div>
  );
}

export default CreateReview;
