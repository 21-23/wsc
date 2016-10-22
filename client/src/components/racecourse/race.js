import React from 'react';
import {grey500} from 'material-ui/styles/colors';

//components
import {PureComponent} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Player from '../player/player';

export default class Race extends PureComponent {
    getIcon(index) {
        switch (index) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            default:
                return index;
        }
    }
    render() {
        const {index, players} = this.props;

        return (
            <div className={`race`}>
                <div className="race-header">
                    <FontIcon
                        className="material-icons"
                        color={grey500}
                    >
                        {`looks_${this.getIcon(index + 1)}`}
                    </FontIcon>
                </div>

                <div className="race-players">
                    {
                        players.map((player) => {
                            return <Player name={player.name} />
                        })
                    }
                </div>
            </div>
        );
    }
};
