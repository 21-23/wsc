import './_time.styl';

import React from 'react';

//colors
import { blue500, green500} from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Timer from './remainingTime';

//constants
import Constants from '../../constants/constants';

//helpers
import { prettyDate } from '../../helpers/date';

export default class Time extends PureComponent {
    render() {
        const { start, end } = this.props;
        const iconStyles = {
            fontSize: Constants.TIMER_ICONS_SIZE
        };

        return (
            <div className="time-table">
                <div className="timer">
                    <FontIcon className="material-icons timer-icon" style={iconStyles}
                              color={green500}>alarm_on</FontIcon>
                    <span>{prettyDate(start)}</span>
                </div>
                <div className="timer">
                    <FontIcon className="material-icons timer-icon" style={iconStyles}
                              color={blue500}>timelapse</FontIcon>
                    <Timer
                        start={start}
                        end={end}
                    />
                </div>
            </div>
        );
    }
};
