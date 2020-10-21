import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Board from 'components/Board';
import Popup from 'components/Popup';

var row;
var col;
var sudokuGrid;
var difficulty;
var time;

var modalText = "An error has occured with the scores.";
const modalTitle = "Congratulations!";

/*
Lazy generation used for the sudoku puzzle (rotational generation)
Lazy solving used for the sudoku puzzle (comparing only original solution, ergo = 1 correct solution)
*/

class Sudoku extends Component {

    row = 9;
    col = 9;
    difficulty = 50;
    sudokuGrid = Array(this.row).fill(0).map(() => Array(this.col).fill(0));

    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.state = {
            grid: Array(this.row).fill("").map(() => Array(this.col).fill("")),
            lockedGrid: Array(this.row).fill(0).map(() => Array(this.col).fill(0)),
            modalShow: false
        };
    }

    handleChange(position) {
        this.incrementSquare(position);
    }

    onModalClose() {
        this.setState({modalShow: false});
        this.initSudokuGrid();
        this.realizeGameGrid(this.difficulty);
    }

    initSudokuGrid() {

        this.time = new Date().getTime();

        let tempArray = [this.row];
        while(tempArray.length < this.col){
            let r = Math.floor(Math.random() * 9) + 1;
            if(tempArray.indexOf(r) === -1) {
                tempArray.push(r);
            }
        }
        for(let i=0; i < this.row; i++) {
            if(i==0) {
                this.sudokuGrid[i] = tempArray;
            }
            else if(i%3==0) {
                this.sudokuGrid[i] = this.shiftRow(this.sudokuGrid[i-1], 1);
            } else {
                this.sudokuGrid[i] = this.shiftRow(this.sudokuGrid[i-1], 3);
            }
        }
    };

    shiftRow(arr, num) {
        let tempArray = arr.slice();
        for (var i = 0; i < num; i++) {
            tempArray.unshift(tempArray.pop());
        }
        return tempArray;
    };

    realizeGameGrid(percent) {
        let rand;
        let tempLockArray = Array(this.row).fill(0).map(() => Array(this.col).fill(0));

        for(var r = 0; r < tempLockArray.length; r++) {
            for(var c = 0; c < tempLockArray[0].length; c++) {
                rand = Math.floor(Math.random() * 100);
                if(rand <= percent) {
                    tempLockArray[r][c] = 1;
                }
            }    
        }
        this.setState({lockedGrid: tempLockArray});

        let tempGridArray = Array(this.row).fill(0).map(() => Array(this.col).fill(0));
        this.sudokuGrid.forEach((item, row) => {
            item.forEach((value, col) => {
                if(tempLockArray[row][col] == 1) {
                    tempGridArray[row][col] = value;
                }
            })
        })
        this.setState({grid: tempGridArray});

    }

    checkGrid() {
        if(JSON.stringify(this.sudokuGrid) === JSON.stringify(this.state.grid)) {
            modalText = "You solved the puzzle in " + (new Date((new Date().getTime() - this.time)).toISOString().slice(11, -1)).replaceAll('00:', "") + ".";
            this.setState({modalShow: true});
        }
    }

    incrementSquare(position) {
        let pos = position - 1;
        const r = Math.floor(pos/this.row);
        const c = (pos % this.col);
        let tempArray = [];
        
        for (let i = 0; i < this.state.grid.length; i++) {
            tempArray[i] = this.state.grid[i].slice();
        }

        if(tempArray[r][c] == 9) {
            tempArray[r][c] = 1;
        } else {
            tempArray[r][c]++;
        }
        
        this.setState({grid: tempArray}, () => this.checkGrid());
    }

    componentDidMount() {
        this.initSudokuGrid();
        this.realizeGameGrid(this.difficulty);
    }

    render() {
		return (
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Row className="mb-5">
                            <Col sm={12} className="text-center">
                                <h3>Sudoku Puzzle</h3>
                                <h6>(Auto-checks grid after each input)</h6>
                            </Col>
                        </Row>
                        <Board grid={this.state.grid} lockGrid={this.state.lockedGrid} rows={this.row} cols={this.col} onSquareClick={this.handleChange}/>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                {this.state.modalShow === true ? <Popup text={modalText} title={modalTitle} onModalClose={this.onModalClose} /> : '' }
            </Container>
  		)
	}
}

export default Sudoku;