import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification';
import s from './Feedback.module.css';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = Math.round((100 / countTotalFeedback()) * good);
    return result ? result : 0;
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={{ good, neutral, bad }}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            options={{ good, neutral, bad }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
