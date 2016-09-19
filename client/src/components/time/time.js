import './_time.styl';

import React from 'react';

//colors
import { blue500, red500, green500} from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { Card, CardText } from 'material-ui/Card';

//constants
import Constants from '../../constants/constants';

export default class TimeCard extends PureComponent {

    render() {
        const iconStyles = {
            fontSize: Constants.TIMER_ICONS_SIZE
        };

        return (
            <Card className="time-card">
                <CardText>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={green500}>alarm_on</FontIcon>
                        <span>Start: 10:11</span>
                    </div>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={blue500}>alarm</FontIcon>
                        <span>Remaining: 00:30:26</span>
                    </div>
                    <div className="timer">
                        <FontIcon className="material-icons timer-icon" style={iconStyles} color={red500}>alarm_off</FontIcon>
                        <span>Finish: 12:11</span>
                    </div>

                </CardText>
            </Card>
        );
    }
};
