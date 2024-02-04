import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === null) {
      setMessage(null);
      setDisabled(true);
    } else if (text.trim().length <= 10) {
      setMessage("Please type more than 10 characters!");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    if (
      feedbackEdit.edit === true &&
      text.trim().length >= 10 &&
      text !== null
    ) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
      setDisabled(true);
      feedbackEdit.edit = false;
    } else {
      addFeedback(newFeedback);
    }
    setText("");
    setRating(10);
    setDisabled(true);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect rating={rating} select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="Enter your Feedback Here...."
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
