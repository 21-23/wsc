import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Application from 'components/application/application';
import injectTapEventPlugin from "react-tap-event-plugin";
import applyHooks from 'hooks';
import store from 'store';

injectTapEventPlugin();
applyHooks();

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('react-main-app')
);
