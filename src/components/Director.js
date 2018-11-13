import React from 'react';

export default function Director(props){

return(
  <div className ="panels">
  <div className ="home" onClick={() => props.handleViewChange('Welcome')}>
    Home
  </div>
  <div className ="jerry" onClick={() => props.handleViewChange('Jerry')}>
    Jerry
  </div>
  <div className ="george" onClick={() => props.handleViewChange('George')}>
    George
  </div>
  <div className ="elaine" onClick={() => props.handleViewChange('Elaine')}>
    Elaine
  </div>
  <div className ="kramer" onClick={() => props.handleViewChange('Kramer')}>
    Kramer
  </div>
  <div className ="allquotes" onClick={() => props.handleViewChange('AllQuotes')}>
    All Quotes
  </div>




</div>
)
}
