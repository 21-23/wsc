import './_winners.styl';

import React from 'react';

//colors
import { yellow500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';

export default class Winners extends PureComponent {

    render() {
        const headerStyle = {
            fontSize: 25
        };
        return (
            <List className="winners-list">
                <Subheader className="winners-header" style={headerStyle}>
                    <span>Winners</span>
                </Subheader>
                <ListItem
                    primaryText="1. Chelsea Otakan"
                    leftIcon={<FontIcon className="material-icons" color={yellow500}>stars</FontIcon>}
                />
                <ListItem
                    primaryText="2. Eric Hoffman"
                    leftIcon={<FontIcon className="material-icons" color={yellow500}>stars</FontIcon>}

                />
                <ListItem
                    primaryText="3. James Anderson"
                    leftIcon={<FontIcon className="material-icons" color={yellow500}>stars</FontIcon>}
                />
                <ListItem
                    primaryText="4. Kerem Suer"
                    insetChildren={true}
                />
            </List>
        );
    }
};
