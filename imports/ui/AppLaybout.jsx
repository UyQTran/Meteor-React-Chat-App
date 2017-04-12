import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PropTypes } from 'react';

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <article>
                <MuiThemeProvider>
                    <div>
                        <main>{this.props.body}</main>
                    </div>
                </MuiThemeProvider>
            </article>
        );
    }
}

AppLayout.propTypes = {
    header: PropTypes.node.isRequired,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node
};