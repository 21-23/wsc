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
import { players } from 'selectors/players_selectors';

class Application extends Component {
    render() {
        const {
            isGameStarted,
            players,
            end,
        } = this.props;

        return (
            <MuiThemeProvider>
                <div className="main-container">
                    <Header />
                    {
                        isGameStarted
                            ? <Racecourse end={end} players={players}/>
                            : <Spinner>Please wait. Game will start shortly.</Spinner>
                    }
                </div>
            </MuiThemeProvider>
        );
    }
}

const applicationSelector = createStructuredSelector({
    isGameStarted,
    players,
    end,
});

Application.propTypes = {
    isGameStarted: React.PropTypes.any,
    players: React.PropTypes.instanceOf(Map),
    end: React.PropTypes.any,
};

export default connect(applicationSelector)(Application);
