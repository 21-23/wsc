import './_player.styl';
import React from 'react';
//components
import FontIcon from 'material-ui/FontIcon';
import { PureComponent } from 'react';
import Constants from 'consts';
import { isWinner } from 'helpers/game';

const iconStyle = {
    fontSize: 20,
    position: 'absolute',
    right: 15
};

export default class Player extends PureComponent {

    render () {
        const { name, position } = this.props;
        const isTopPlayer = position !== null && isWinner(position);
        const Star = (
            <FontIcon className="material-icons"
                      style={iconStyle}
                      color={Constants.raspberry}>
                star
            </FontIcon>
        );

        return (
            <div className="player">
                {isTopPlayer && Star}
                <span>{name}</span>
            </div>
        );
    }
}

Player.propTypes = {
    name: React.PropTypes.string,
    position: React.PropTypes.number,
};
