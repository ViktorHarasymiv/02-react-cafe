import css from "./VoteOptions.module.css";

import type { OptionsProps } from "../../types/types";

function Options({ click, totalValue, reset }: OptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => click("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => click("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => click("bad")}>
        Bad
      </button>
      {totalValue >= 1 && (
        <button className={css.reset} onClick={() => reset()}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
