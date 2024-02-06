import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetch data
  const fetchFeedback = async () => {
    try {
      const response = await fetch("/feedback");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  //Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      "/feedback/",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      }
    );
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update Feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    // console.log(updItem);
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
