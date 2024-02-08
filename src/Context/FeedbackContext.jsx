import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "d65c",
      text: "this is feedback with rating 5",
      rating: 5,
    },
    {
      text: "this is feedback with rating 8",
      rating: 8,
      id: "bb4f",
    },
    {
      text: "44444444444444444444444",
      rating: 4,
      id: "e28b",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback
  const updateFeedback = (id, newFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...newFeedback } : item
      )
    );
  };

  useEffect(() => {
    // Fetch data or any other initialization logic if needed
    setIsLoading(false); // Set loading to false after initialization
  }, []);

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
