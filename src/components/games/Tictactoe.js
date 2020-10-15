import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Board from '../../components/Board';

var row;
var col;

class Tictactoe extends Component {

    row = 3;
    col = 3;

    constructor(props) {
		super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            playerTurn: "O",
            grid: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
        };
	}

	handleChange(position) {
        this.checkScore(position);
        this.changePlayerTurn();
    }

    changePlayerTurn() {
        if(this.state.playerTurn == "O") {
            this.setState({playerTurn: "X"});
        } else {
            this.setState({playerTurn: "O"});
        }
    }

    checkScore(position) {
        let pos = position - 1;
        let r = Math.floor(pos/this.row);
        let c = (pos % this.col);

        this.state.grid[r][c] = this.state.playerTurn;

        if(this.checkRow() || this.checkCol() || this.checkDiag()) {
            console.log(this.state.playerTurn + " wins!");
            this.setState({grid: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]});
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

	componentDidMount(){

    }
    
	componentWillUnmount(){

    }
    
    render() {
		return (
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Board rows={this.row} cols={this.col} playerTurn={this.state.playerTurn} onTurnChange={this.handleChange}/>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
  		)
	}
}

export default Tictactoe;