import React, { Component } from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{width: this.props.width+"%", fontSize: this.props.fsize+"vw"}}>
                <div class="square-content">{this.props.value}</div>
            </button>
        );
    }
}

export default Square;