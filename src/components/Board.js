import React, { Component } from 'react';

import Square from '../components/Square';

import '../styles/board.scss';

function renderSquare(i, width, fsize, handleSquare, playerTurn) {
    return <Square value={i} width={width} fsize={fsize} onSquareClick={handleSquare} playerTurn={playerTurn} />;
}

function returnGrid(rows, cols, handleSquare, playerTurn) {

    let rowSquares = [];
    let grid = [];
    const fsize = (rows*cols >= 100 ? 5 : 6) - Math.log2(cols);

    for(var i=0; i < rows; i++) {
        for(var j=0; j < cols; j++) {
            rowSquares.push( renderSquare((i*cols)+(j+1), (100/cols), fsize, handleSquare, playerTurn) );
        }
        grid.push(<div className="board-row" style={{height: (100/rows)+"%"}}>{rowSquares}</div>);
        rowSquares = [];
    }

    return (
        <div className="board">
            {grid}
        </div>
    );
}

class Board extends Component {

    constructor(props) {
        super(props);
        this.handleSquare = this.handleSquare.bind(this);
    }

    handleSquare(position) {;
        this.props.onTurnChange(position);
    }

    render() {
        return (
            <div class="board-wrapper">
                {returnGrid(this.props.rows, this.props.cols, this.handleSquare, this.props.playerTurn)}
            </div>
        );
    }
}

export default Board;