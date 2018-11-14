import React from 'react';


export default function George(props){
let data=[];

console.log(data)

return(
  <div className= "parent">
    {props.holddata.filter(e => {
      if(e.author==="George"){
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
// {props.holddata.map(index => (
//              <div className= "quotebag" key={index}>
//              {console.log(index)}
//           <p>Quote:  {index.quote}</p>
//         </div>
//
//       ))}
// data.map(e => {
//     {console.log(e.quote)}
