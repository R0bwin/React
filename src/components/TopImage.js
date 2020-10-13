import React from 'react';
import 'styles/topimage.scss';

function TopImage(props) {
  return (
    <div className="card top-image standard-card-img dark-color" style={ props.image ? {backgroundImage: "url("+props.image+")"} : {} }>
      <div className="text-white text-center py-5 px-4 sky-gradient item">
        <div className="py-5">
          <h1 className="card-title h2 my-4 py-2">{props.name}</h1>
          <h5 className="mb-4 pb-2 px-md-5 mx-md-5 text-uppercase">{props.subInfo}</h5>
        </div>
      </div>
    </div>
  )
}

export default TopImage;