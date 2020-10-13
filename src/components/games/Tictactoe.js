import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Board from 'components/Board';

class Tictactoe extends Component {

    constructor(props) {
		super();
        this.handleChange = this.handleChange.bind(this);
        this.playerTurn = "O";
	}

	handleChange() {

	}

	componentDidMount(){

	}
	componentWillUnmount(){

    }

    /*
        state = array[9]
        pass down the state to board -> square.
        when square onclick pass up event.
        playerTurn = "";
    */
    
    render() {
		return (
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Board rows="3" cols="3"/>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
  		)
	}
}

export default Tictactoe;