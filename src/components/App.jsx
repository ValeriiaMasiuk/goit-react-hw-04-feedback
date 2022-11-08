import { useState } from 'react';
import Statistics from './Feedbacks/Statistics/Statistics';
import FeedbackOptions from './Feedbacks/Controls/Controls';
import Section from './Feedbacks/Section/Section';
import NotificationMessage from './Feedbacks/NotificationMessage/NotificationMessage'

function App() {
  const [state, setState] = useState({
    good: 0,
    bad: 0,
    neutral: 0}
  )

  const { good, neutral, bad } = state;

    const onLeaveFeedback = (evt) => {
      const name = evt.currentTarget.name;

      setState(state => ({ ...state, [name]: state[name] + 1 }));
    }

    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total
    }
    const countPositiveFeedbackPercentage = total => {
        const { good } = state;
        if (total === 0) {
            return 0;
        }
        const percentage = (good * 100) / total;
        return Math.round(percentage)
    }

        const options = Object.keys(state);
        const total = countTotalFeedback();
        const percent = countPositiveFeedbackPercentage(total)

        return (
          <div
            style={{
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}>
            <Section title="Please, leave your feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
              />
            </Section>

            <Section title="Statistics">
              {total !== 0
                ? 
              <Statistics
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
                total={total}
                positivePercentage={percent} />
                : 
              <NotificationMessage
                message="There is no feedback"/>} 
              </Section>
            </div>
        )
};

export default App