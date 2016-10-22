import './_racecourse.styl';

import React from 'react';


//components
import { PureComponent } from 'react';
import Time from '../time/time';
import Race from './race';
import Header from './header';

export default class Racecourse extends PureComponent {

    races(count, players) {
        let races = [];
        for (let i = 0; i < count; i ++) {
            let racePlayers = players.filter((player) => {
                return player.progress === i + 1;
            });
            let race = <Race key={i} index={i} players={racePlayers} />;

            races.push(race);
        }

        return races;
    }

    render() {
        const { players, start, end } = this.props;
        let races = this.races(4, players);

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
                    {
                        races
                    }
                </div>
            </div>
        );
    }
};
