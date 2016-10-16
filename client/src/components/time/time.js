import './_time.styl';

import React from 'react';

//colors
import { blue500, red500, green500} from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Card, CardText } from 'material-ui/Card';
import Timer from './timer';

//constants
import Constants from '../../constants/constants';

//helpers
import { prettyDate } from '../../helpers/date';

export default class TimeCard extends PureComponent {
    render() {
        const { start, end } = this.props;
        const iconStyles = {
            fontSize: Constants.TIMER_ICONS_SIZE
        };

        return (
            <Card className="time-card">
                <CardText>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={green500}>alarm_on</FontIcon>
                        <span>Start: {prettyDate(start)}</span>
                    </div>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={blue500}>timelapse</FontIcon>
                        <Timer text={'Remaining'}
                               start={start}
                               end={end}

                        />
                    </div>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={red500}>alarm_off</FontIcon>
                        <span>Finish: {prettyDate(end)}</span>
                    </div>

                </CardText>
            </Card>
        );
    }
};
