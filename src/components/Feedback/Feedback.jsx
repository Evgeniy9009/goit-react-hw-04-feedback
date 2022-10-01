import { Component } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class Feedback extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName]
            return {
                [propertyName]: value + 1
            }
        })
    }

    totalCount = () => {
        const { good, neutral, bad } = this.state;
        return  good + neutral + bad
    }

    percentPozitive = () => {
        const { good } = this.state;
        const total = this.totalCount()
        return good/total*100
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.totalCount()
        let percent = this.percentPozitive() || 0
        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <Section title='Statistics'>
                    {total === 0 ?
                        <Notification message="There is no feedback" /> :
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={percent } />  }
                </Section>
            </>
        )
    }
}

