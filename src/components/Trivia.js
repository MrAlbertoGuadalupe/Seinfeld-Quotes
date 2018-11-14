import React from 'react';


export default function Trivia(props){

return(
  <div>
  <h1>{props.holdrandata.quote}</h1>

  <form onSubmit = {props.handleSubmit}>
      <ul>
      <li>
    <label>
      Jerry:
      <input
      type="radio"
      name="msg"
      id="Jerry"
      value="Jerry"
      onChange={props.handleChange}

      />
    </label>
    </li>
    <li>
    <label>
      George:
      <input
      type="radio"
      name="msg"
      id="George"
      onChange={props.handleChange}

      />
    </label>
    </li>
    <li>
    <label>
      Elaine:
      <input
      type="radio"
      name="msg"
      id="Elaine"
      onChange={props.handleChange}

      />
    </label>
    </li>
    <li>
    <label>
      Kramer:

      <input
      type="radio"
      name="msg"
      id="Kramer"
      onChange={props.handleChange}
      />


    </label>
    </li>
    <li>
    <label>
    Other:
    <input
    type="radio"
    name="msg"
    id="Other"
    onChange={props.handleChange}
    />



  </label>
  </li>
</ul>
    <input type="submit" value="Submit" />

  </form>

  </div>
)
}


//
