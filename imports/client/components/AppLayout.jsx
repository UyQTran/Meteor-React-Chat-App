import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="app-body">
                        <main>{this.props.body}</main>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

AppLayout.propTypes = {
    body: PropTypes.node.isRequired
};