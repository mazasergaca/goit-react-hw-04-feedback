import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification';
import s from './Feedback.module.css';

function Feedback() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neuntral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  // };

  const countTotalFeedback = () => {
    return good + neuntral + bad;
  };

  // countPositiveFeedbackPercentage = () => {
  //   const result = Math.round(
  //     (100 / this.countTotalFeedback()) * this.state.good
  //   );
  //   return result ? result : 0;
  // };

  const countPositiveFeedbackPercentage = () => {
    const result = Math.round((100 / countTotalFeedback()) * good);
    return result ? result : 0;
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  const onLeaveFeedback = key => {
    this.setState(prevState => prevState[key] + 1);
  };

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {this.countTotalFeedback() ? (
          <Statistics
            options={this.state}
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
