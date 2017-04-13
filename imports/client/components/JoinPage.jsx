import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {FlowRouter} from 'meteor/kadira:flow-router';
import TextField from 'material-ui/TextField';

export default class JoinPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textFieldValue: ''
        };

        this.handleJoinButton = this.handleJoinButton.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleTextFieldChange(event, newValue) {
        this.setState({textFieldValue:newValue});
    }

    handleKeyDown({keyCode}) {
        if(keyCode === 13) {
            this.handleJoinButton();
        }
    }

    handleJoinButton() {
        FlowRouter.go('chat-room', {pin:this.state.textFieldValue});
    }

    render() {
        const joinPageMessage = 'Please enter a pin code';
        return (
            <div className="landing-page">
                <h1>
                    {joinPageMessage}
                </h1>
                <TextField
                    hintText="Enter a pin code"
                    onChange={this.handleTextFieldChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.textFieldValue}
                />
                <FlatButton
                    label="Continue"
                    onTouchTap={this.handleJoinButton}/>
            </div>
        );
    }
}