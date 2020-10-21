import React from 'react';
import '../styles/fullimage.scss';

function TopImage(props) {

  let skillsText = "";

  if(props.skills && Array.isArray(props.skills)) {
    {props.skills.map(function (item, key) {
      if(props.skills.length-1 === key) {
        skillsText += item;
      } else {
        skillsText += item + " | ";
      }
    })}
  }


  return (
    <React.Fragment>
      <div className="full-background" style={ props.image ? {backgroundImage: "url("+props.image+")"} : {} }>
        <div className="image-text">
          <h1>{props.title}</h1>
          <h4>{props.skills ? skillsText : props.subTitle}</h4>
          <h5>{props.subInfo}</h5>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TopImage;