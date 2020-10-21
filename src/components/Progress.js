import React from 'react';
import '../styles/general.scss';

function Progress(props) {

  const progressBars = props.progress.map((bars, key) =>
    <React.Fragment key={key}>
      <h6 className="mt-4">{bars.title}</h6>
      <div className="my-2 progress md-progress">
        <div className="progress-bar" role="progressbar" style={{width: bars.width + "%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <h4>{props.title}</h4>
      <div className="mt-5">
        {progressBars}
      </div>
    </React.Fragment>
  )
}

export default Progress;

