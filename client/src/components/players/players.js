import './_players.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Progress from '../progress/progress';

export default class Players extends PureComponent {

    render() {
        const headerStyle = {
            fontSize: 25
        };
        return (
            <List className="players-list">
                <Subheader className="players-header" style={headerStyle}>
                    <span>Players</span>
                </Subheader>
                <ListItem
                    primaryText="Chelsea Otakan"
                    leftIcon={<Progress length={4} completed={3}/>}
                />
                <ListItem
                    leftIcon={<Progress length={4} completed={1}/>}
                    primaryText="Eric Hoffman"
                />
                <ListItem
                    leftIcon={<Progress length={4} completed={2}/>}
                    primaryText="James Anderson"
                />
                <ListItem
                    leftIcon={<Progress length={4} completed={0}/>}
                    primaryText="Kerem Suer"
                />
            </List>
        );
    }
};
