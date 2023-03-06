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
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
