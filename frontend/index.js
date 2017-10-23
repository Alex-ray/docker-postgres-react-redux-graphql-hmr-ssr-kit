import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './universal/redux/createStore';

// Styles
import 'universal/styles/colors.css';
import 'universal/styles/reset.css';

import Routes from './universal/routes/Routes.js';

const history = createHistory();
const store = createStore(history);

const MOUNT_NODE = document.getElementById('mount');

const renderApp = (Component) => {
    render(
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <Routes history={history}/>
        </ConnectedRouter>
      </Provider>,
      MOUNT_NODE
    );
}

renderApp(Routes);

if (module.hot) {
  module.hot.accept('./universal/routes/Routes.js', () => {
    const nextRoutes = require('./universal/routes/Routes.js');
    renderApp(nextRoutes);
  });
}
