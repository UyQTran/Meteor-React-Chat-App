import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { PropTypes } from 'react';
import MessageBoxContainer from '../containers/MessageBoxContainer.js';
import FlatButton from 'material-ui/FlatButton';

export default class ChatPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        const headerText = 'Romnummer: ';
        const roomNumber = this.props.roomNumber;
        return (
            <div className="landing-page">
                {headerText+roomNumber}
                <MessageBoxContainer roomNumber={roomNumber}/>
                <TextField
                    hintText="Write a message..."
                    multiLine={true}
                    rowsMax={4}
                    fullWidth={true}
                />
            </div>
        );
    }
}

ChatPage.propTypes = {
    roomNumber: PropTypes.string.isRequired
};