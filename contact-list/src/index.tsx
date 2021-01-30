import React from 'react';
import { render } from 'react-dom';

// Root Styles Import
import './sass/main.scss';

// App Entry Point
import { App } from 'components/App/app.component';

render(<App />, document.getElementById('root'));
