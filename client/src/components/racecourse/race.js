import './_animation.styl';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//components
import { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Player from 'components/player/player';
//icons
import { names, icons } from './names_and_icons';
//constants
import Constants from 'consts';

export default class Race extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.players && this.props.players) {
            return nextProps.players.count() !== this.props.players.count();
        }

        return true;
    }

    render () {
        const { index, players } = this.props;
        const iconStyle = {
            fontSize: 35
        };

        const playersMap = players.valueSeq().map((player, idx) => {
            return (
                <Player key={player.get('id')}
                        position={index === Constants.LAST_RACE ? idx : null}
                        name={player.get('name')}/>
            );
        });

        return (
            <div className={`race`}>
                <div className="race-header">
                    <FontIcon className="material-icons"
                              style={iconStyle}
                              color={'black'}>
                        {icons[index]}
                    </FontIcon>
                    <div className="race-name">{names[index]}</div>
                </div>

                <div className="race-players">
                    <ReactCSSTransitionGroup transitionName={Constants.ANIMATION_NAME}
                                             transitionEnterTimeout={Constants.ANIMATION_DURATION}
                                             transitionLeaveTimeout={Constants.ANIMATION_DURATION}>
                        { playersMap }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

Race.propTypes = {
    players: React.PropTypes.any,
    index: React.PropTypes.number,
};
