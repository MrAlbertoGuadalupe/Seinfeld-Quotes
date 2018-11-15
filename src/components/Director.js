import React from 'react';

export default function Director(props){

return(
  <div className ="panels">
  <div className ="jerry" onClick={() => props.handleViewChange('Jerry')}>

  </div>
  <div className ="george" onClick={() => props.handleViewChange('George')}>

  </div>
  <div className ="elaine" onClick={() => props.handleViewChange('Elaine')}>

  </div>
  <div className ="kramer" onClick={() => props.handleViewChange('Kramer')}>

  </div>
  <div className ="allquotes" onClick={() => props.handleViewChange('AllQuotes')}>

  </div>
  <div className ="trivia" onClick={() => props.handleViewChange('Trivia')}>
    
  </div>





</div>
)
}
