import React from 'react';
import { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './_application.styl';


export default class Application extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton label="Hello WSC" />
                </div>
            </MuiThemeProvider>
        );
    }
};
