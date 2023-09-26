import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("This is an example of Feedback text");

  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default FeedbackItem;
