import './_players.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Player from './player';

//stub
import players from './stub';

export default class Players extends PureComponent {

    render() {
        const headerStyle = {
            fontSize: 25,
            color: 'white'
        };
        return (
            <List className="players-list">
                <Subheader className="players-header" style={headerStyle}>
                    <span>Players</span>
                </Subheader>
                <div className="players-list-wrapper">
                    {
                        players.map((player) => {
                            return <Player name={player}
                                           completed={Math.floor(Math.random() * 5)}
                                           key={player}
                            />
                        })
                    }
                </div>

            </List>
        );
    }
};
