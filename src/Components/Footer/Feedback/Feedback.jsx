import React, {useState, useEffect} from 'react'
import { FeedbackTextArea, FeedbackForm } from './Styles/Feedback.style.js'
import apiCalls from '../../../apiCalls.js'

const Feedback = (props) => {

  const [feedback, setFeedback] = useState('')

  const changeHandler = (event) => {
    setFeedback(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    apiCalls.postFeedback(feedback)
      .then((data) => {
        setFeedback('')
      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <FeedbackForm onSubmit={submitHandler}>
      <div>Leave us some feedback!</div>
      <FeedbackTextArea onChange={changeHandler} value={feedback}></FeedbackTextArea>
      <button type='submit'>Submit</button>
    </FeedbackForm>
  )
}

export default Feedback;