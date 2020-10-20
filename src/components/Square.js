import React, { Component } from 'react';

import 'styles/square.scss';

const clear = '\u00A0';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.locked === "" || this.props.locked === 0) {
            this.props.onSquareClick(this.props.pos);
        }
    }

    render() {
        return (
            <button className={"square " + (this.props.locked ? "disabled" : "")} style={{width: this.props.width+"%", fontSize: this.props.fsize+"vw"}} onClick={() => this.handleClick()} >
                <div className="square-content">{this.props.value ? this.props.value : clear}</div>
            </button>
        );
    }
}

export default Square;