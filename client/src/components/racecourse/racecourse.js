import './_racecourse.styl';

import React from 'react';


//components
import { PureComponent } from 'react';
import Time from 'components/time/time';
import Race from './race';
import Header from './header';

//constants
import Constants from 'constants';

export default class Racecourse extends PureComponent {

    races(players, count) {
        const races = [];

        players = players.sort((a, b) => {
            return a.get('progressTime') - b.get('progressTime') ;
        });

        for (let i = 0; i < count; i ++) {
            const racePlayers = players.filter((player) => {
                return player.get('progress') === i;
            });

            races.push(<Race key={i} index={i} players={racePlayers} />);
        }

        return races;
    }

    render() {
        const { players, start, end } = this.props;
        const races = this.races(players, Constants.TASKS_LENGTH);

        return (
            <div className="racecourse">
                <div className="header-container">
                    <Header />
                    <Time
                        start={start}
                        end={end}
                    />
                </div>
                <div className="races-container">
                    { races }
                </div>
            </div>
        );
    }
};
