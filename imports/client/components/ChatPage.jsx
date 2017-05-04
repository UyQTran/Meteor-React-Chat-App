import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Meteor } from 'meteor/meteor';
import MessageBox from './MessageBox.jsx';


export default class ChatPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textFieldValue: ''
        };
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleTextFieldChange(event, newValue) {
        this.setState({textFieldValue:newValue});
    }

    handleKeyDown({keyCode}) {
        if(keyCode === 13) {
            Meteor.call('addMessage', this.props.roomNumber, this.state.textFieldValue);
            this.setState({textFieldValue:''});
        }
    }

    render() {
        return (
            <div className="landing-page">
                <MessageBox roomNumber={this.props.roomNumber}/>
                <TextField
                    hintText="Skriv din melding her"
                    fullWidth={true}
                    value={this.state.textFieldValue}
                    onChange={this.handleTextFieldChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}