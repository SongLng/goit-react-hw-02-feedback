import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
