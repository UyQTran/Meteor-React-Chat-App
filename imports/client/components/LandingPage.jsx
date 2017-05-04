import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import PinGeneratorService from '../services/PinGeneratorService.jsx';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appName: 'Uy sin app'
        };

        this.handleCreateButton = this.handleCreateButton.bind(this);
    }


    handleCreateButton() {
        const pin = PinGeneratorService.generatePin();
        FlowRouter.go('chat-room', {pin:pin});
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