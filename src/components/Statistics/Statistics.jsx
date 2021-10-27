import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total ? (
        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.text}>Good: </span> {good}
          </li>
          <li className={s.item}>
            <span className={s.text}>Neutral: </span>
            {neutral}
          </li>
          <li className={s.item}>
            <span className={s.text}>Bad: </span>
            {bad}
          </li>
          <li className={s.item}>
            <span className={s.text}>Total: </span>
            {total}
          </li>
          <li className={s.item}>
            <span className={s.text}>Positive percentage: </span>
            {positivePercentage} %
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
