import './_time.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Timer from './remainingTime';

//constants
import Constants from 'constants';

export default class Time extends PureComponent {
    render() {
        const { start, end } = this.props;
        const iconStyles = {
            fontSize: Constants.TIMER_ICONS_SIZE
        };

        return (
            <div className="time-table">
                <div className="timer">
                    <FontIcon
                        className="material-icons timer-icon"
                        style={iconStyles}
                        color={Constants.lightBlue}>
                        timelapse
                    </FontIcon>
                    <Timer
                        start={start}
                        end={end}
                    />
                </div>
            </div>
        );
    }
}

Time.propTypes = {
    start: React.PropTypes.instanceOf(Date),
    end: React.PropTypes.instanceOf(Date),
};
