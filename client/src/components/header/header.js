import React from 'react';
//components
import AppBar from 'material-ui/AppBar';
import Logo from 'components/logo/logo';

export default function Header () {
    const style = {
        backgroundColor: 'none',
        boxShadow: 'none',

    };

    const titleStyle = {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: '69px',
    };

    return (
        <AppBar
            title="WebSocket Challenge"
            iconElementLeft={ <Logo /> }
            style={style}
            titleStyle={titleStyle}
        />
    );
}
