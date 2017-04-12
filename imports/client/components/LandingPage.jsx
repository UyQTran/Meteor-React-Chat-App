import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {FlowRouter} from 'meteor/kadira:flow-router';
import PinGeneratorService from '../services/PinGeneratorService.jsx';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appName: 'Chat App'
        };

        this.handleCreateButton = this.handleCreateButton.bind(this);
    }

    handleCreateButton() {
        const pin = PinGeneratorService.generatePin();
        FlowRouter.go('create-room', {pin});
    }

    render() {
        return (
            <div className="landing-page">
                <h1>
                    {this.state.appName}
                </h1>
                <FlatButton
                    label="Create"
                    onTouchTap={this.handleCreateButton}/>
                <FlatButton label="Join"/>
            </div>
        );
    }
}