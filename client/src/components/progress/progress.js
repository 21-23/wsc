import './_progress.styl';

import React from 'react';

//colors
import { lightGreen500, grey500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class Progress extends PureComponent {

    createProgressComponents(length, completed) {
        let result = [];
        for (let i = 0; i < length; i++) {
            if (i < completed) {
                result.push(<FontIcon className="material-icons" color={lightGreen500}>check_box</FontIcon>);
            } else {
                result.push(<FontIcon className="material-icons" color={grey500}>check_box_outline_blank</FontIcon>);
            }
        }

        return result;
    }

    render() {
        const { length, completed } = this.props;
        return (
            <div className="progress">
                {
                    this.createProgressComponents(length, completed)
                }
            </div>
        );
    }
};
