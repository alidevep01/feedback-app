import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //calculate average rating
  let sum = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);
  let average = sum > 0 ? sum / feedback.length : 0;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>
        <span style={{ color: "#ff6a95" }}>{feedback.length}</span> Reviews
      </h4>
      <h4>
        Average Rating: <span style={{ color: "#ff6a95" }}>{average}</span>
      </h4>
    </div>
  );
}

export default FeedbackStats;
