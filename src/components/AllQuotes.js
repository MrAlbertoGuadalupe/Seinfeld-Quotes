import React from 'react';


export default function AllQuotes(props){



return(
  <div className = "parent">

  {props.holddata.map(index => (
               <div className= "bag" key={index}>
               {console.log(index)}
            <p>Quote:  {index.quote}</p>
          </div>

        ))}
        </div>
  )
}
