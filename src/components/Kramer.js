import React from 'react';


export default function Elaine(props){
let data = [];
return(
  <div className= "parent">
    {props.holddata.filter(e => {
      if(e.author==="Kramer"){
        data.push(e.quote);
      }

    }
    )}
      {data.map(e => (
                   <div className= "baggy" key={e}>

                <p>quote:  {e}</p>
              </div>
            ))
      }
  </div>
)
}
// <img src={props.holddata[1].picture} />

//
