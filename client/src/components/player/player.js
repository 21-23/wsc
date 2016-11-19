import './_player.styl';
import React from 'react';

//components
import FontIcon from 'material-ui/FontIcon';
import { PureComponent } from 'react';

import Constants from 'constants';
import { isWinner } from 'helpers/game';


export default class Player extends PureComponent {

    render() {
        const { name, position } = this.props;
        const iconStyle = {
            fontSize: 20,
            position: 'absolute',
            right: 15
        };
        const top = position !== null && isWinner(position) ?
            <FontIcon
                className="material-icons"
                style={iconStyle}
                color={Constants.raspberry}
            >
                star
            </FontIcon> : null;
        return (
            <div className="player">
                { top }
                <span>{name}</span>
            </div>
        );
    }
}

Player.propTypes = {
    name: React.PropTypes.string,
    position: React.PropTypes.number,
};
