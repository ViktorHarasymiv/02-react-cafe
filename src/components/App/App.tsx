import { useState, useEffect } from "react";

import style from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import Feedback from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

import type { Votes } from "../../types/types.ts";

function App() {
  const [feedback, setFeedback] = useState<Votes>(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback) as Votes;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType: keyof Votes) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  return (
    <div className={style.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions
        click={updateFeedback}
        totalValue={totalFeedback}
        reset={resetFeedback}
      ></VoteOptions>
      {totalFeedback >= 1 ? (
        <Feedback review={feedback} totalValue={totalFeedback}></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
}

export default App;
