import React from 'react';
import CorrectMsg from './CorrectMsg.js'
import IncorrectMsg from './IncorrectMsg.js'

export default function Answer(props) {
  let isCorrect = props.isCorrect;
  if (isCorrect === true) {
    return <CorrectMsg />;
  }
  return <IncorrectMsg />;
}
