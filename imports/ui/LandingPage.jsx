import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appName: 'Chat App'
        };
    }


    render() {
        return (
            <div className="landing-page air-above">
                <h1>
                    {this.state.appName}
                </h1>
                <FlatButton label="Create"/>
                <FlatButton label="Join"/>
            </div>
        );
    }
}