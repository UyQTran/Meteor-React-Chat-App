import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './LandingPage.jsx';

export default class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <MuiThemeProvider>
                <LandingPage />
            </MuiThemeProvider>
        );
    }
}