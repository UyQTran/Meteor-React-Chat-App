import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appName: 'Chat App i state'
        };
    }


    render() {
        return (
            <div className="landing-page">
                <h1>
                    {this.state.appName}
                </h1>
            </div>
        );
    }
}