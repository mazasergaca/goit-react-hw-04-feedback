import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li className={s.good}>
        <span>Good:</span> <span>{good}</span>
      </li>
      <li className={s.neutral}>
        <span>Neutral:</span> <span>{neutral}</span>
      </li>
      <li className={s.bad}>
        <span>Bad:</span> <span>{bad}</span>
      </li>
      <li className={s.total}>
        <span>Total:</span> <span>{total}</span>
      </li>
      <li
        className={
          positivePercentage > 50
            ? s.good
            : positivePercentage === 50
            ? s.neutral
            : s.bad
        }
      >
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
