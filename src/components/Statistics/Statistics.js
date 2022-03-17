import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      {Object.entries(options).map(([key, value]) => {
        return (
          <li className={s[key]} key={key}>
            <span>{key[0].toUpperCase() + key.slice(1)}:</span>
            <span>{value}</span>
          </li>
        );
      })}
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
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
