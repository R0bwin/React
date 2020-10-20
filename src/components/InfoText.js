import React from 'react';
import 'styles/general.scss';

function InfoText(props) {
  return (
    <React.Fragment>
      <h4>{props.title}</h4>
      <div className="mt-4">
        {props.text.map(function (n, key) {
          return ([
            <p key={key}>{n}</p>
          ]);
        })}
      </div>
    </React.Fragment>
  )
}



export default InfoText;