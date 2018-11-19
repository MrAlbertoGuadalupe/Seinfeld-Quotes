import React from 'react';

export default function George(props) {
  let data = [];

  return (<div className="parent">
    {
      props.holddata.filter(e => {
        if (e.author === "George") {
          data.push(e.quote);
        }

      })
    }
    {
      data.map(e => (<div className="baggy" key={e}>

        <p>George: "{e}"</p>
      </div>))
    }
  </div>)
}
