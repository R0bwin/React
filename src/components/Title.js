import React from 'react';
import '../styles/general.scss';

function Title(props) {
  return (
    <div className="row mt-5 mb-5">
        <div className="col-12"><h1 className="text-center">{props.title}<hr/></h1></div>
    </div>
  )
}

export default Title;