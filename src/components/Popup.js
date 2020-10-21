import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap';

class Popup extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: true
        };
    }

    handleClose(){
        this.setState({show: false});
        this.props.onModalClose();
    };
    
    render() {
        return (
            <>
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                keyboard={false}
                animation={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.text}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }

}

export default Popup;