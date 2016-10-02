import './_players.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import Progress from '../progress/progress';

//constants
import Constants from '../../constants/constants';

export default class Player extends PureComponent {

    render() {
        const { name, completed } = this.props;
        return (
                <div className="player">
                    <span>{name}</span>
                    <Progress length={Constants.TASKS_LENGTH} completed={completed}/>
                </div>
        );
    }
};
