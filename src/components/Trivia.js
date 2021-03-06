import React from 'react';
import CorrectMsg from './CorrectMsg.js'
import IncorrectMsg from './IncorrectMsg.js'

export default function Trivia(props) {
  let isCorrect = props.isCorrect;
  let isSubmitted = props.isSubmitted;
  if (isCorrect && isSubmitted) {
    isCorrect = <CorrectMsg/>
  } else if (!isCorrect && isSubmitted) {
    isCorrect = <IncorrectMsg/>
  } else {
    isCorrect = ""
  }

  return (<div className="parent">
    <h1 className="hone">"{props.holdrandata.quote}"</h1>

    <form className="formy" onSubmit={props.handleSubmit}>
      <ul>
        <li>
          <label>
            Jerry:
            <input type="radio" name="msg" id="Jerry" value="Jerry" onChange={props.handleChange}/>
          </label>
        </li>
        <li>
          <label>
            George:
            <input type="radio" name="msg" id="George" onChange={props.handleChange}/>
          </label>
        </li>
        <li>
          <label>
            Elaine:
            <input type="radio" name="msg" id="Elaine" onChange={props.handleChange}/>
          </label>
        </li>
        <li>
          <label>
            Kramer:

            <input type="radio" name="msg" id="Kramer" onChange={props.handleChange}/>

          </label>
        </li>
        <li>
          <label>
            Other:
            <input type="radio" name="msg" id="Other" onChange={props.handleChange}/>

          </label>
        </li>
      </ul>
      <input type="submit" value="Submit"/>
      <label>
        Next Question:
        <input type="submit" value="Next"/>
      </label>
    </form>

    {isCorrect}

  </div>)
}
