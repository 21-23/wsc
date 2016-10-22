import React from 'react';
import { red500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';


export default class Header extends PureComponent {

    render() {
        const iconStyle = {
            fontSize: 50,
            top: 8,
            right: 8
        };

        return (
            <div className="header">
                <FontIcon
                    className="material-icons"
                    color={red500}
                    style={iconStyle}
                >
                    directions_walk
                </FontIcon>
                <span>Break the distance as soon as possible!</span>
            </div>
        );
    }
};
