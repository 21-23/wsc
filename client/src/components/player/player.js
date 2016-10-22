import './_player.styl';
import React from 'react';
import { red500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';


export default class Header extends PureComponent {

    render() {
        const { name } = this.props;
        const iconStyle = {
            fontSize: 20,
            position: 'absolute'
        };

        return (
            <div className="player">
                <FontIcon
                    className="material-icons runner"
                    color={red500}
                    style={iconStyle}
                >
                    directions_run
                </FontIcon>
                <span>{name}</span>
            </div>
        );
    }
};
