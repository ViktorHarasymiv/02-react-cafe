import css from "./VoteStats.module.css";

import type { FeedbackProps } from "../../types/types";

function Feedback({ review, totalValue }: FeedbackProps) {
  return (
    <div className={css.container}>
      <span className={css.stat}>
        <strong className={css.strong}>Good : {review.good}</strong>
      </span>
      <span className={css.stat}>
        <strong className={css.strong}>Neutral : {review.neutral}</strong>
      </span>
      <span className={css.stat}>
        <strong className={css.strong}>Bad : {review.bad}</strong>
      </span>
      <span className={css.stat}>
        <strong className={css.strong}>Total : {totalValue}</strong>
      </span>
      <span className={css.stat}>
        <strong className={css.strong}>
          Positive:
          {totalValue - review.neutral >= 1
            ? Math.round((review.good / (review.good + review.bad)) * 100)
            : "0"}
          %
        </strong>
      </span>
    </div>
  );
}

export default Feedback;
