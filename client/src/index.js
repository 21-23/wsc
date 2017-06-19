import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Application from 'components/application/application';
import applyHooks from 'hooks';
import store from 'store';

import injectTapEventPlugin from 'react-tap-event-plugin';

applyHooks();
injectTapEventPlugin();

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('react-main-app')
);
