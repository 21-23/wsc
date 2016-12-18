import './_application.styl';

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from 'components/header/header';
import Racecourse from 'components/racecourse/racecourse';
import Spinner from  'components/spinner/spinner';

//selectors
import { end, isGameStarted } from 'shared/selectors/system_selectors';
import { playersList } from 'selectors/players_selectors';

class Application extends Component {

    render() {
        const {
            isGameStarted,
            playersList,
            end,
        } = this.props;
        const racecourse = <Racecourse end={end} players={playersList}/>;
        const spinner = <Spinner/>;
        const game = isGameStarted ? racecourse : spinner;

        return (
            <MuiThemeProvider>
                <div className="main-container">
                    <Header />
                    { game }
                </div>
            </MuiThemeProvider>
        );
    }
}

const applicationSelector = createStructuredSelector({
    isGameStarted,
    playersList,
    end,
});

Application.propTypes = {
    isGameStarted: React.PropTypes.any,
    playersList: React.PropTypes.instanceOf(Map),
    end: React.PropTypes.any,
};

export default connect(applicationSelector)(Application);
