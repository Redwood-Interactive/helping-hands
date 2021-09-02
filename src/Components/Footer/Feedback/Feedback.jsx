import React, {useState, useEffect} from 'react'
import { FeedbackTextArea, FeedbackForm, FeedbackSubmitButton, FeedbackTitle } from './Styles/Feedback.style.js'
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
        console.log(data)
        setFeedback('')
      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <FeedbackForm onSubmit={submitHandler}>
      <FeedbackTitle>Leave us some feedback!</FeedbackTitle>
      <FeedbackTextArea onChange={changeHandler} value={feedback}></FeedbackTextArea>
      <FeedbackSubmitButton type='submit'>Submit</FeedbackSubmitButton>
    </FeedbackForm>
  )
}

export default Feedback;