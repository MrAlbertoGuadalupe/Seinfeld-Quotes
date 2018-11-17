import React from 'react';

export default function Director(props){

return(
  <div className ="panels">
  <div className ="jerry" onClick={() => props.handleViewChange('Jerry')}>
    <div class="middle">
    <div class="jtext">Jerrys Quotes</div>
  </div>
</div>
  <div className ="george" onClick={() => props.handleViewChange('George')}>
    <div class="middle">
    <div class="gtext">Georges Quotes</div>
    </div>
  </div>
  <div className ="elaine" onClick={() => props.handleViewChange('Elaine')}>
    <div class="middle">
    <div class="etext">Elaines Quotes</div>
    </div>
    </div>

  <div className ="kramer" onClick={() => props.handleViewChange('Kramer')}>
    <div class="middle">
    <div class="ktext">Kramers Quotes</div>
    </div>
    </div>

  <div className ="allquotes" onClick={() => props.handleViewChange('AllQuotes')}>
    <div class="middle">
    <div class="qtext">All Quotes</div>
    </div>
  </div>

  <div className ="trivia" onClick={() => props.handleViewChange('Trivia')}>
    <div class="middle">
    <div class="ttext">Who Said It Trivia</div>
    </div>
    </div>
  </div>

)
}
