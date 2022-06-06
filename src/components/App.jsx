import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Sratistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  total() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPercentage() {
    const { good } = this.state;
    const total = this.total();
    const percentage = total ? ((good / total) * 100).toFixed(0) : 0;

    return Number(percentage);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave Feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.total()}
            percentage={this.countPercentage()}
          />
        </Section>
      </>
    );
  }
}
