import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <span>Good: {good}</span>
      <p></p>
      <span>Neutral: {neutral}</span>
      <p></p>
      <span>Bad: {bad}</span>
      <p></p>
      <span>Total: {total}</span>
      <p></p>
      <span>Positive Feedback: {positivePercentage} %</span>
      <p></p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
