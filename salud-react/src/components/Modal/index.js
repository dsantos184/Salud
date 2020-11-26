  
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends Component {

    constructor(props) {
        super(props)
        
        this.state = { isOpen: props.isOpen }
    }
 

    toggle = () => { 
        this.setState({isOpen: !this.state.isOpen})       
    } 

    render() {     
        return ( 
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.state.isOpen}  toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className={this.props.classCssHeader} toggle={this.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                    {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                    { (this.props.textBtnCancel != undefined)  ?
                        <Button color="primary" onClick={this.props.clickBtnCancel}>{this.props.textBtnCancel}</Button> 
                    : "" }  
    
                    { (this.props.textBtnOk != undefined)  ?  
                     <Button color="secondary" onClick={this.props.clickBtnOk}>{this.props.textBtnOk}</Button>
                    : "" } 
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}


export default ModalExample;