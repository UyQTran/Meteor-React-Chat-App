import React, { Component } from 'react';
import { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class MessageBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        return (
            <div className="landing-page">

            </div>
        );
    }
}

MessageBox.propTypes = {
    roomNumber: PropTypes.string.isRequired
};