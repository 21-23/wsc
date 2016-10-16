import './_winners.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Winner from './winner';

import winners from './stub';

export default class Winners extends PureComponent {

    render() {
        const headerStyle = {
            fontSize: 25
        };
        return (
            <List className="winners-list">
                <Subheader className="winners-header" style={headerStyle}>
                    <span>Top 10</span>
                </Subheader>
                {
                    winners.map((name, index) => {
                        return <Winner name={name} index={index} key={name} withStar={index < 3}/>
                    })
                }
            </List>
        );
    }
};
