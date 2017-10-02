import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './universal/redux/createStore';

import Routes from './universal/routes/Routes.js';

const history = createHistory();
const store = createStore(history);

const mountEl = document.getElementById('mount');
const renderApp = (Component) => {
    render(
      <Provider store={store}>
        <Routes history={history}/>
      </Provider>,
      mountEl
    );
}

renderApp(Routes);

if (module.hot) {
  module.hot.accept('./universal/routes/Routes.js', () => {
    const nextApp = require('./universal/routes/Routes.js');
    renderApp(nextApp);
  });
}
