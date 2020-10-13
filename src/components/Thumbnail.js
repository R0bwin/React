import React from 'react';
import 'styles/thumbnail.scss';

function Thumbnail(props) {
    return (
        <React.Fragment>
            <div className="col-4 carditem d-flex align-items-stretch">
            <   div className="card standard-card-img" style={ props.image ? {backgroundImage: "url("+props.image+")"} : {} }>
                    <div className="text-white text-center rgba-dark d-flex align-items-center py-5 px-4">
                        <div>
                            <h5 className="card-title"><i className={"fa fa-"+(props.icon ? props.icon : "square")}></i> {props.title ? props.title : "Title"}</h5>
                            <h3 className="card-subtitle pt-2"><strong>{props.subtitle ? props.subtitle : "Subtitle"}</strong></h3>
                            <p>{props.text}</p>
                            <a className="btn card-btn text-white" href="#"><i className="fa fa-clone left"></i> View {props.title ? props.title.toLowerCase() : "Here"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Thumbnail;

