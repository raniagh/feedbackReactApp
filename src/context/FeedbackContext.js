import { createContext, useState } from "react";
import FeedBackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wnt to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4();
    setFeedback([newfeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
