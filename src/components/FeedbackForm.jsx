import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { useState } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

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

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
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
