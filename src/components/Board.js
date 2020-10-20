import React, { Component } from 'react';

import Square from 'components/Square';

import 'styles/board.scss';

function renderSquare(i, width, fsize, handleSquare, value, locked) {
    return <Square key={i} pos={i} value={value} width={width} fsize={fsize} onSquareClick={handleSquare} locked={locked} />;
}

function returnGrid(rows, cols, handleSquare, playerGrid, lockGrid) {

    let rowSquares = [];
    let grid = [];
    const fsize = (rows*cols >= 100 ? 5 : 6) - Math.log2(cols);
    for(var i=0; i < rows; i++) {
        for(var j=0; j < cols; j++) {
            rowSquares.push( renderSquare((i*cols)+(j+1), (100/cols), fsize, handleSquare, playerGrid[i][j], lockGrid ? lockGrid[i][j] : playerGrid[i][j]) );
        }
        grid.push(<div key={i} className="board-row" style={{height: (100/rows)+"%"}}>{rowSquares}</div>);
        rowSquares = [];
    }

    return (
        grid
    );
}

class Board extends Component {

    constructor(props) {
        super(props);
        this.handleSquare = this.handleSquare.bind(this);
    }

    handleSquare(position) {
        this.props.onSquareClick(position);
    }

    render() {
        return (
            <div className="board-wrapper">
                <div className="board">
                    {returnGrid(this.props.rows, this.props.cols, this.handleSquare, this.props.grid, this.props.lockGrid)}
                </div>
            </div>
        );
    }
}

export default Board;