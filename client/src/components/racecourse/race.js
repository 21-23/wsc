import './_animation.styl';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//components
import {PureComponent} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Player from 'components/player/player';

//icons
import {names, icons} from './names_and_icons';

export default class Race extends PureComponent {
    render() {
        const { index, players } = this.props;
        const iconStyle = {
            fontSize: 35
        };

        const playersMap = players.map((player, position) => {
            return (
                <Player
                    key={player.get('id')}
                    position={index === 3 ? position : null}
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
                    {/*TODO: refactor animations*/}
                    <ReactCSSTransitionGroup
                        transitionName="move"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        { playersMap }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
};
