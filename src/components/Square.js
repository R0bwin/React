import React, { Component } from 'react';

import '../styles/square.scss';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            empty: '\u00A0',
            value: '',
        };
    }

    handleClick() {
        // pass up the clicked square number.
        if(this.state.value == '') {
            this.setState({value: this.props.playerTurn});
            this.props.onSquareClick(this.props.value);
        }
    }

    render() {
        return (
            <button className="square" style={{width: this.props.width+"%", fontSize: this.props.fsize+"vw"}} onClick={() => this.handleClick()}>
                <div class="square-content">{this.state.value ? this.state.value : this.state.empty}</div>
            </button>
        );
    }
}

export default Square;