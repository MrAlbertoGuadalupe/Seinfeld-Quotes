import React from 'react';


export default function George(props){
let data=[];

console.log(data);
return(
  <div className= "parent">
    {props.holddata.filter(e => {
      if(e.author==="George"){
        data.push(e);
      }

}

    )}

  </div>

      )

}
// data.map(i => {
//       {console.log(i.quote)}
