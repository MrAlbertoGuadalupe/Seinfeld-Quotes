import React from 'react';


export default function AllQuotes(props){



return(
  <div className = "parent">

  {props.holddata.map(index => (
               <div className= "baggy" key={index}>
               
            <p>{index.author}:  "{index.quote}"</p>
            <span> Season:{index.season} </span>
            <span> Episode:{index.episode} </span>
          </div>

        ))}
        </div>
  )
}
