import './_winners.styl';

import React from 'react';
import FontIcon from 'material-ui/FontIcon';

//colors
import { yellow500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import { ListItem } from 'material-ui/List';

export default class Player extends PureComponent {

    render() {
        const { name, withStar, index } = this.props;
        const star = withStar ? <FontIcon className="material-icons" color={yellow500}>star_rate</FontIcon> : null;
        return (
            <ListItem
                primaryText={`${index + 1}. ${name}`}
                leftIcon={star}
                insetChildren={true}
            />
        );
    }
};
