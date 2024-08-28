import css from './Feedback.module.css';

const Feedback = ({ ratings:{good, neutral, bad}, total, positive }) => (
  <ul className={css.stats}>
    <li>good: {good},</li>
    <li>neutral: {neutral},</li>
    <li>bad: {bad}</li>
    <li>total: {total}</li>
    <li>positive: {positive}%</li>
  </ul>
);

export default Feedback;
