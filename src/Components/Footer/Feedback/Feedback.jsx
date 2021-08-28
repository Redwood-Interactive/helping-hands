import React, {useState, useEffect} from 'react'
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
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler}></input>
      <button type='submit' value={feedback}>Submit</button>
    </form>
  )
}

export default Feedback;