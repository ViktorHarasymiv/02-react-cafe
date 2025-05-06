import css from "./Notification.module.css";

function Notification() {
  return (
    <div className={css.message}>
      <p>На даний момент відгуки відсутні !</p>
    </div>
  );
}

export default Notification;
