import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Style Entry File
import './sass/main.scss';

// App Component
import { App } from 'component/App/app.component';

// Redux Store
import { store } from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
