export type Votes = {
  good: number;
  neutral: number;
  bad: number;
};

export interface OptionsProps {
  click: (feedbackType: keyof Votes) => void;
  totalValue: number;
  reset: () => void;
}

export interface FeedbackProps {
  review: Votes;
  totalValue: number;
}

export interface NotificationProps {}
