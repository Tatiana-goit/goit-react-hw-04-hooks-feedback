import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
      <>
    <div>
      {options.map(option => (
        <button className={s.button}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
            {option}
        </button>

      ))}
    </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
