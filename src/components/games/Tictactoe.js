import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Board from '../components/Board';
import Popup from '../components/Popup';

import 'styles/modal.scss';


var row;
var col;
var modalText = "An error has occured with the scores.";
const modalTitle = "Tictactoe game results";

class Tictactoe extends Component {

    row = 3;
    col = 3;

    constructor(props) {
		super();
        this.handleChange = this.handleChange.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.state = {
            playerTurn: "O",
            grid: Array(this.row).fill("").map(() => Array(this.col).fill("")),
            lockedGrid: Array(this.row).fill(0).map(() => Array(this.col).fill(0)),
            modalShow: false
        };
    }

	handleChange(position) {
        this.addMarker(position);
    }

    onModalClose() {
        this.setState({modalShow: false});
    }

    changePlayerTurn() {
        if(this.state.playerTurn == "O") {
            this.setState({playerTurn: "X"});
        } else {
            this.setState({playerTurn: "O"});
        }
    }

    addMarker(position) {
        let pos = position - 1;
        let r = Math.floor(pos/this.row);
        let c = (pos % this.col);
        let tempArray = [];
        
        for (let i = 0; i < this.state.grid.length; i++) {
            tempArray[i] = this.state.grid[i].slice();
        }

        tempArray[r][c] = this.state.playerTurn;
        this.setState({grid: tempArray}, () => this.gameUpdate());
    }

    gameUpdate() {
        this.checkScore();
        this.changePlayerTurn();
    }

    checkScore(position) {
        if(this.checkRow() || this.checkCol() || this.checkDiag()) {
            modalText = "Player " + this.state.playerTurn + " is the winner!";
            this.setState({modalShow: true});
            this.setState({grid: Array(this.row).fill("").map(() => Array(this.col).fill(""))});
        } else if(this.checkDraw()) {
            modalText = "The game ended in a draw!";
            this.setState({modalShow: true});
            this.setState({grid: Array(this.row).fill("").map(() => Array(this.col).fill(""))});
        }
    }

    checkRow() {
        let winstate = false;
        this.state.grid.map((rows) => {
            if(rows.every((el) => el === rows[0] && el !== "")) {
                winstate = true;
            }
        })
        return winstate;
    }

    checkCol() {
        let winstate = false;
        let tempArr = [];
        for (var c = 0; c < this.state.grid[0].length; c++) {
            for (var r = 0; r < this.state.grid.length; r++) {
                tempArr.push(this.state.grid[r][c]);
            }
            if(tempArr.every((el) => el === tempArr[0] && el !== "")) {
                winstate = true;
                break;
            }
            tempArr = [];
        }
        return winstate;
    }

    checkDiag() {
        let winstate = false;
        let tempArr = [];
        let col = 0;

        for (var r = 0; r < this.state.grid.length; r++) {
            tempArr.push(this.state.grid[r][col++]);
        }
        if(tempArr.every((el) => el === tempArr[0] && el !== "")) {
            winstate = true;
        }

        col = this.col - 1;
        tempArr = [];

        for (var r = 0; r < this.state.grid.length; r++) {
            tempArr.push(this.state.grid[r][col--]);
        }
        if(tempArr.every((el) => el === tempArr[0] && el !== "")) {
            winstate = true;
        }

        return winstate;
    }

    checkDraw() {
        let tempArray = [];

        for(var i = 0; i < this.state.grid.length; i++) {
            tempArray = tempArray.concat(this.state.grid[i]);
        }

        if(tempArray.every((el) => el !== "")) {
            return true;
        }

        return false;
    }
    
    render() {
		return (
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Row className="mb-5">
                            <Col sm={12} className="text-center">
                                <h3>Tic tac toe</h3>
                                <h6>(Easiest game created?)</h6>
                            </Col>
                        </Row>
                        <Board grid={this.state.grid} rows={this.row} cols={this.col} onSquareClick={this.handleChange}/>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                {this.state.modalShow === true ? <Popup text={modalText} title={modalTitle} onModalClose={this.onModalClose} /> : '' }
            </Container>
  		)
	}
}

export default Tictactoe;