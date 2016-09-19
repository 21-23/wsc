import React from 'react';
import { render } from 'react-dom';

import Application from './components/application/application';

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

render(
    <Application />,
    document.getElementById('react-main-app')
);
