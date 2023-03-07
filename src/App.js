import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedBackData from "./data/FeedbackData";

function App() {
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
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
