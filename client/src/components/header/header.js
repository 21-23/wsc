import React from 'react';
import { PureComponent } from 'react';

//components
import AppBar from 'material-ui/AppBar';
import Logo from 'components/logo/logo';


export default class Header extends PureComponent {
    render() {
        const style = {
            backgroundColor: 'none',
            boxShadow: 'none',

        };

        const titleStyle = {
            fontSize: 28,
            fontWeight: 'bold',
        };

        return (
            <AppBar
                title="Websocket Challenge"
                iconElementLeft={ <Logo /> }
                style={style}
                titleStyle={titleStyle}
            />
        );
    }
};
