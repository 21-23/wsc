import './_application.styl';

import React from 'react';
import { Component } from 'react';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Logo from '../logo/logo';

export default class Application extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="wsc-main-container">
                    <AppBar
                        title="Websocket Challenge"
                        iconElementLeft={ <Logo /> }
                    />


                </div>
            </MuiThemeProvider>
        );
    }
};
