import { useState } from 'react'
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';


export default function Feedback() {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const onLeaveFeedback = (propertyName) => {
        console.log(propertyName)

        switch (propertyName) {
            case 'good':
                return setGood((prev)=> prev + 1);
            case 'neutral':
                return setNeutral((prev)=> prev + 1);
            case 'bad' :
                return setBad((prev)=> prev + 1);
            default:
                return
        }
    }

    const totalCount = () => {
        return  good + neutral + bad
    }

    const total = totalCount()

    const percentPozitive = () => {
        const total = totalCount()
        return good/total*100
    }

    let percent = percentPozitive() 

    const options = { good, neutral, bad }
    console.log("options", options)

    const nameOptions = Object.keys(options)
    console.log("nameOptions", nameOptions)
    
    
  return (
    <>
        <Section title='Please leave feedback'>
            <FeedbackOptions nameOptions={nameOptions} onLeaveFeedback={onLeaveFeedback} />
            </Section>
        <Section title='Statistics'>
            {total === 0 ? <Notification message="There is no feedback" /> :
            
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={percent} />  }
            </Section>
            </>
  )
}
