import './_animation.styl';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Player from 'components/player/player';

//icons
import { names, icons } from './names_and_icons';

//constants
import Constants from 'constants';

export default class Race extends PureComponent {
    render() {
        const { index, players } = this.props;
        const iconStyle = {
            fontSize: 35
        };

        const playersMap = players.valueSeq().map((player, idx) => {
            return (
                <Player
                    key={player.get('id')}
                    position={index === Constants.LAST_RACE ? idx : null}
                    name={player.get('name')}
                />
            )
        });

        return (
            <div className={`race`}>
                <div className="race-header">
                    <FontIcon
                        className="material-icons"
                        style={iconStyle}
                        color={'black'}
                    >
                        {icons[index]}
                    </FontIcon>
                    <div className="race-name">{names[index]}</div>
                </div>

                <div className="race-players">
                    <ReactCSSTransitionGroup
                        transitionName={Constants.ANIMATION_NAME}
                        transitionEnterTimeout={Constants.ANIMATION_DURATION}
                        transitionLeaveTimeout={Constants.ANIMATION_DURATION}
                    >
                        { playersMap }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
};
