import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            value={text}
            placeholder="Enter your Feedback Here...."
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
